document.addEventListener('DOMContentLoaded', () => {
    // --- API Configuration ---
    // You MUST get a valid access token from the Spotify Developer Dashboard.
    // This token is temporary and will expire. For a full app, you would need to implement an OAuth flow.
    const accessToken = '458c6cf1315a4f348a2179072b8f92a1'; // Replace with your token
    const featuredPlaylistsUrl = 'https://api.spotify.com/v1/browse/featured-playlists?limit=5';
    const market = 'US'; // Set a market for relevant content

    // --- DOM Elements ---
    const songListContainer = document.querySelector('.song-list-container');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const audioPlayer = document.getElementById('audio-player');
    const albumArtEl = document.querySelector('.player-bar .album-art');
    const songTitleEl = document.querySelector('.player-bar .song-title');
    const songArtistEl = document.querySelector('.player-bar .song-artist');
    const volumeBar = document.getElementById('volume-bar');

    let currentTrackIndex = 0;
    let currentPlaylist = [];

    // --- API Fetching Function ---
    async function fetchPlaylists() {
        try {
            const response = await fetch(`${featuredPlaylistsUrl}&market=${market}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            const data = await response.json();
            const playlists = data.playlists.items;
            if (playlists.length > 0) {
                // Get the first playlist for demonstration
                const playlistId = playlists[0].id;
                fetchPlaylistTracks(playlistId);
            }
        } catch (error) {
            console.error('Error fetching playlists:', error);
        }
    }

    async function fetchPlaylistTracks(playlistId) {
        try {
            const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            const data = await response.json();
            currentPlaylist = data.items.filter(item => item.track && item.track.preview_url);
            renderSongCards();
        } catch (error) {
            console.error('Error fetching playlist tracks:', error);
        }
    }

    // --- UI Rendering Function ---
    function renderSongCards() {
        songListContainer.innerHTML = '';
        currentPlaylist.forEach((item, index) => {
            const track = item.track;
            const songCard = document.createElement('div');
            songCard.classList.add('song-card');
            songCard.dataset.index = index;

            songCard.innerHTML = `
                <img src="${track.album.images[0].url}" alt="${track.album.name} cover" class="album-cover">
                <h4 class="card-title">${track.name}</h4>
                <p class="card-artist">${track.artists.map(artist => artist.name).join(', ')}</p>
                <button class="play-button"><i class="fas fa-play"></i></button>
            `;
            songListContainer.appendChild(songCard);
        });

        // Add event listeners to play buttons
        document.querySelectorAll('.song-card .play-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const card = e.target.closest('.song-card');
                const index = parseInt(card.dataset.index, 10);
                loadTrack(index);
                togglePlay();
            });
        });
    }

    // --- Playback Logic ---
    function loadTrack(index) {
        currentTrackIndex = index;
        const track = currentPlaylist[currentTrackIndex].track;
        audioPlayer.src = track.preview_url;
        albumArtEl.src = track.album.images[0].url;
        songTitleEl.textContent = track.name;
        songArtistEl.textContent = track.artists.map(artist => artist.name).join(', ');
        updatePlayPauseButton();
    }

    function togglePlay() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
        updatePlayPauseButton();
    }

    function updatePlayPauseButton() {
        const icon = playPauseBtn.querySelector('.fas');
        if (audioPlayer.paused) {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        } else {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
        loadTrack(currentTrackIndex);
        audioPlayer.play();
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        loadTrack(currentTrackIndex);
        audioPlayer.play();
    }

    function updateProgress() {
        const { currentTime, duration } = audioPlayer;
        if (!isNaN(duration)) {
            progressBar.value = (currentTime / duration) * 100;
            currentTimeEl.textContent = formatTime(currentTime);
            durationEl.textContent = formatTime(duration);
        }
    }

    function setProgress() {
        const newTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    }
    
    function setVolume() {
        audioPlayer.volume = volumeBar.value / 100;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
        return `${minutes}:${formattedSeconds}`;
    }

    // --- Event Listeners ---
    playPauseBtn.addEventListener('click', togglePlay);
    nextBtn.addEventListener('click', nextTrack);
    prevBtn.addEventListener('click', prevTrack);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    progressBar.addEventListener('input', setProgress);
    volumeBar.addEventListener('input', setVolume);
    audioPlayer.addEventListener('ended', nextTrack);

    // Initial fetch
    fetchPlaylists();
});
