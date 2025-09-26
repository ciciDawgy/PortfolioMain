const planets = document.querySelectorAll('.planet');

const planetData = {
    sun: {
        name: "Sun",
        info: "The Sun is the star at the center of the Solar System. It is a massive, nearly perfect sphere of hot plasma, radiating energy primarily as visible light and infrared radiation. It is the most important source of energy for life on Earth."
    },
    mercury: {
        name: "Mercury",
        info: "Mercury is the smallest planet and closest to the Sun. It is named after the Roman god Mercurius, the messenger of the gods. It is a terrestrial planet with roughly the same surface gravity as Mars."
    },
    venus: {
        name: "Venus",
        info: "Venus is the second planet from the Sun and has a dense atmosphere of carbon dioxide with clouds of sulfuric acid. It has the highest surface temperature of any planet in the Solar System."
    },
    earth: {
        name: "Earth",
        info: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. It has vast oceans and a biosphere that sustains millions of species, including humans."
    },
    mars: {
        name: "Mars",
        info: "Mars is the fourth planet from the Sun and is often referred to as the 'Red Planet' due to iron oxide on its surface. It has seasons, polar ice caps, and was once believed to have liquid water."
    },
    jupiter: {
        name: "Jupiter",
        info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a strong magnetic field and dozens of moons, including the largest moon, Ganymede."
    },
    saturn: {
        name: "Saturn",
        info: "Saturn is the sixth planet from the Sun and is famous for its ring system. It is a gas giant and has many moons, including Titan, which has a thick atmosphere."
    },
    uranus: {
        name: "Uranus",
        info: "Uranus is the seventh planet from the Sun. It is an ice giant with a cyan color due to methane in its atmosphere and has a unique axial tilt that causes extreme seasons."
    },
    neptune: {
        name: "Neptune",
        info: "Neptune is the eighth planet from the Sun. It is an ice giant known for its deep blue color and strong winds, and it takes about 165 Earth years to orbit the Sun."
    }
};

// Create planet lightbox container
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Create content box inside lightbox
const contentBox = document.createElement('div');
contentBox.id = 'content-box';
lightbox.appendChild(contentBox);

// Add image + name + info
const img = document.createElement('img');
contentBox.appendChild(img);

const nameEl = document.createElement('h2');
contentBox.appendChild(nameEl);

const infoEl = document.createElement('p');
contentBox.appendChild(infoEl);


// Create space weather lightbox
const spaceWeatherLightbox = document.createElement('div');
spaceWeatherLightbox.id = 'space-weather-lightbox';
document.body.appendChild(spaceWeatherLightbox);

const spaceWeatherContent = document.createElement('div');
spaceWeatherContent.id = 'space-weather-content';
spaceWeatherLightbox.appendChild(spaceWeatherContent);

// Add space weather button to the main page
const weatherButton = document.createElement('button');
weatherButton.id = 'weather-button';
weatherButton.textContent = 'Space Weather Alerts';
document.body.appendChild(weatherButton);


// CSS for the weather button
const buttonStyle = document.createElement('style');
buttonStyle.innerHTML = `
#weather-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 600;
    padding: 10px 20px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    animation: fadeIn 1s linear 38s forwards;
}
#weather-button:hover {
    background-color: rgba(255, 255, 255, 0.3);
}
@media (max-width: 480px) {
    #weather-button {
        bottom: 10px;
        right: 10px;
        padding: 8px 15px;
        font-size: 0.9rem;
    }
}
`;
document.head.appendChild(buttonStyle);

// --- Fetch data from DONKI API ---
async function fetchDONKIData() {
    // You will need to implement the actual API call here.
    // Replace this placeholder with your code to fetch data from a specific DONKI API endpoint.
    // Remember to use a real API key for production (obtainable from the [NASA API portal](https://api.nasa.gov/)).
    console.log("Fetching DONKI data...");
    // Example placeholder return data structure
    return [
        {
            catalog: "CME",
            startTime: "2025-09-18T12:00:00Z",
            cmeAnalyses: [{ speed: 500, note: "Example CME event" }]
        }
    ];
}

// --- Display space weather alerts ---
function displaySpaceWeather(events) {
    spaceWeatherContent.innerHTML = '<h2>Space Weather Alerts (CMEs)</h2>';
    if (!events || events.length === 0) {
        spaceWeatherContent.innerHTML += '<p>No recent CME events found.</p>';
        return;
    }

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('weather-event');
        eventElement.innerHTML = `
            <h3>Event: ${event.catalog}</h3>
            <p><strong>Start Time:</strong> ${new Date(event.startTime).toLocaleString()}</p>
            <p><strong>Speed:</strong> ${event.cmeAnalyses[0]?.speed} km/s</p>
            <p><strong>Details:</strong> ${event.cmeAnalyses[0]?.note || 'N/A'}</p>
        `;
        spaceWeatherContent.appendChild(eventElement);
    });
}

// --- Event Listeners ---
// Close planet lightbox when background is clicked
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Show planet info on click
planets.forEach(planet => {
    planet.addEventListener('click', () => {
        const planetKey = planet.dataset.planet;
        const data = planetData[planetKey];

        const bg = window.getComputedStyle(planet).backgroundImage;
        const match = bg.match(/url\(["']?(.*?)["']?\)/);
        const imageUrl = match ? match[1] : '';

        img.src = imageUrl;
        nameEl.textContent = data.name;
        infoEl.textContent = data.info;

        lightbox.classList.add('active');
    });
});

// Show space weather lightbox on button click
weatherButton.addEventListener('click', async () => {
    // Clear previous content
    spaceWeatherContent.innerHTML = '<h2>Fetching Space Weather Alerts...</h2>';
    spaceWeatherLightbox.classList.add('active');

    const donkiData = await fetchDONKIData();
    displaySpaceWeather(donkiData);
});

// Close space weather lightbox when background is clicked
spaceWeatherLightbox.addEventListener('click', e => {
    if (e.target === spaceWeatherLightbox) {
        spaceWeatherLightbox.classList.remove('active');
    }
});
