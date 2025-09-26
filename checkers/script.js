// Canvas setup
const canvas = document.getElementById('checkersCanvas');
const ctx = canvas.getContext('2d');

const boardSize = 8;
const squareSize = canvas.width / boardSize;
let board = [];
let selectedPiece = null;
let currentPlayer = 'red';

// Initialize the board with pieces
function initializeBoard() {
    board = [];
    for (let row = 0; row < boardSize; row++) {
        board[row] = [];
        for (let col = 0; col < boardSize; col++) {
            if ((row + col) % 2 !== 0 && row < 3) {
                board[row][col] = 'black'; // Black pieces on top
            } else if ((row + col) % 2 !== 0 && row > 4) {
                board[row][col] = 'red'; // Red pieces at the bottom
            } else {
                board[row][col] = null; // Empty square
            }
        }
    }
}

// Draw the checkerboard and pieces
function drawBoard() {
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            // Draw squares
            ctx.fillStyle = (row + col) % 2 === 0 ? '#d18b47' : '#ffce9e';
            ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);

            // Draw pieces
            const piece = board[row][col];
            if (piece) {
                ctx.beginPath();
                ctx.arc(
                    col * squareSize + squareSize / 2,
                    row * squareSize + squareSize / 2,
                    squareSize / 2.5,
                    0,
                    Math.PI * 2
                );
                ctx.fillStyle = piece;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

// Get the row and column of the mouse click
function getMousePosition(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const col = Math.floor(x / squareSize);
    const row = Math.floor(y / squareSize);
    return { row, col };
}

// Handle piece selection and movement
function handleMove(row, col) {
    if (selectedPiece) {
        // Try to move the selected piece
        if (isValidMove(selectedPiece.row, selectedPiece.col, row, col)) {
            movePiece(selectedPiece.row, selectedPiece.col, row, col);
            selectedPiece = null;
            currentPlayer = currentPlayer === 'red' ? 'black' : 'red'; // Switch turn
        } else {
            selectedPiece = null; // Deselect if the move is invalid
        }
    } else {
        // Select a piece if it belongs to the current player
        if (board[row][col] === currentPlayer) {
            selectedPiece = { row, col };
        }
    }
    drawBoard();
}

// Validate if the move is legal
function isValidMove(startRow, startCol, endRow, endCol) {
    const piece = board[startRow][startCol];
    if (!piece || board[endRow][endCol]) return false; // Check if the destination is empty

    const direction = piece === 'red' ? -1 : 1; // Red moves up, Black moves down
    const isSingleStep = (endRow === startRow + direction) &&
                         (Math.abs(endCol - startCol) === 1);
    const isJump = (endRow === startRow + 2 * direction) &&
                   (Math.abs(endCol - startCol) === 2) &&
                   board[(startRow + endRow) / 2][(startCol + endCol) / 2] !== piece;

    return isSingleStep || isJump;
}

// Move the piece on the board and handle jumps
function movePiece(startRow, startCol, endRow, endCol) {
    board[endRow][endCol] = board[startRow][startCol];
    board[startRow][startCol] = null;

    // Handle jump moves
    if (Math.abs(endRow - startRow) === 2) {
        const jumpedRow = (startRow + endRow) / 2;
        const jumpedCol = (startCol + endCol) / 2;
        board[jumpedRow][jumpedCol] = null; // Remove the jumped piece
    }
}

// Event listener for mouse clicks
canvas.addEventListener('click', (event) => {
    const { row, col } = getMousePosition(event);
    handleMove(row, col);
});

// Initialize the game
initializeBoard();
drawBoard();
