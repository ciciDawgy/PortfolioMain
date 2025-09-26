
/*const planets = document.querySelectorAll('.planet');
const planetData = {
    sun: { name: "Sun", info: "The Sun is the star at the center of the Solar System. The Sun is the star at the center of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important source of energy for life on Earth. The Sun has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity" },
    mercury: { name: "Mercury", info: "Mercury is the smallest planet and closest to the Sun. Mercury is the first planet from the Sun and the smallest in the Solar System. In English, it is named after the ancient Roman god Mercurius, god of commerce and communication, and the messenger of the gods. Mercury is classified as a terrestrial planet, with roughly the same surface gravity as Mars" },
    venus: { name: "Venus", info: "Venus is the second planet from the Sun and has a thick atmosphere. It is a terrestrial planet and is the closest in mass and size to its orbital neighbour Earth. Venus has by far the densest atmosphere of the terrestrial planets, composed mostly of carbon dioxide with a thick, global sulfuric acid cloud cover. At the surface it has a mean temperature of 737 K (464 °C; 867 °F) and a pressure of 92 times that of Earth's at sea level. These extreme conditions compress carbon dioxide into a supercritical state at Venus's surface."},
    earth: { name: "Earth", info: "Earth is the third planet from the Sun and the only known planet to support life. Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere. Most of Earth's land is somewhat humid and covered by vegetation." },
    mars: { name: "Mars", info: "Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron oxide dust, giving it the nickname the Red Planet. Mars is among the brightest objects in Earth's sky, and its high-contrast albedo features have made it a common subject for telescope viewing. It is classified as a terrestrial planet and is the second smallest of the Solar System's planets with a diameter of 6,779 km (4,212 mi). In terms of orbital motion, a Martian solar day (sol) is equal to 24.5 hours, and a Martian solar year is equal to 1.88 Earth years (687 Earth days)." },
    jupiter: { name: "Jupiter", info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than 2.5 times that of all the other planets in the Solar System combined and slightly less than one-thousandth the mass of the Sun. Its diameter is eleven times that of Earth, and a tenth that of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm), with an orbital period of 11.86 years. It is the third brightest natural object in the Earth's night sky, after the Moon and Venus, and has been observed since prehistoric times. Its name derives from that of Jupiter, the chief deity of ancient Roman religion." },
    saturn: { name: "Saturn", info: "Saturn is the sixth planet from the Sun and the second largest in the Solar System, after Jupiter. It is a gas giant, with an average radius of about nine times that of Earth.[27][28] It has an eighth the average density of Earth, but is over 95 times more massive.[29][30][31] Even though Saturn is almost as big as Jupiter, Saturn has less than a third the mass of Jupiter. Saturn orbits the Sun at a distance of 9.59 AU (1,434 million km), with an orbital period of 29.45 years." },
    uranus: { name: "Uranus", info: "Uranus is the seventh planet from the Sun and has a thick atmosphere.  It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which astronomy calls ice or volatiles. The planet's atmosphere has a complex layered cloud structure and has the lowest minimum temperature of all the Solar System's planets. It has a marked axial tilt of 82.23° with a retrograde rotation period of 17 hours and 14 minutes." },
    neptune: { name: "Neptune", info: "Neptune is the eigth planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth and slightly more massive, but denser and smaller, than fellow ice giant Uranus. Being composed primarily of gases and liquids,[21] it has no well-defined solid surface, and orbits the Sun once every 164.8 years at an orbital distance of 30.1 astronomical units (4.5 billion kilometres; 2.8 billion miles). It is named after the Roman god of the sea, representing Neptune's trident." }
}; 

// Create lightbox container
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.background = 'rgba(0,0,0,.8)';
lightbox.style.display = 'flex';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = '1000';
lightbox.style.display = 'none';
document.body.appendChild(lightbox);

// Create content box inside lightbox
const contentBox = document.createElement('div');
contentBox.style.background = 'transparent';
contentBox.style.padding = '20px';
contentBox.style.borderRadius = '10px';
contentBox.style.color = '#fff';
contentBox.style.maxWidth = '500px';
contentBox.style.textAlign = 'center';
contentBox.style.position = 'relative';
contentBox.style.boxShadow = '0 0 15px rgba(0,0,0,0.5)';
lightbox.appendChild(contentBox);

// Add image + name + info
const img = document.createElement('img');
img.style.maxWidth = '50%';
img.style.borderRadius = '50%';
contentBox.appendChild(img);


const nameEl = document.createElement('h2');
contentBox.appendChild(nameEl);

const infoEl = document.createElement('p');
infoEl.style.marginTop = '0px';
infoEl.style.fontSize = '1.2rem';
contentBox.appendChild(infoEl);

// Close on background click
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


// Show lightbox on planet click
planets.forEach(planet => {
    planet.addEventListener('click', () => {
        const planetKey = planet.dataset.planet;
        const data = planetData[planetKey];

        // Extract background-image URL
        const bg = window.getComputedStyle(planet).backgroundImage;
        const match = bg.match(/url\(["']?(.*?)["']?\)/);
        const imageUrl = match ? match[1] : '';
 
        img.src = imageUrl;
        nameEl.textContent = data.name;
        infoEl.textContent = data.info;

        lightbox.style.display = 'flex';
    });
}); */

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

// Create lightbox container
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.background = 'rgba(0,0,0,.8)';
lightbox.style.display = 'flex';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = '1000';
lightbox.style.display = 'none';
document.body.appendChild(lightbox);

// Create content box inside lightbox
const contentBox = document.createElement('div');
contentBox.style.background = 'transparent';
contentBox.style.padding = '20px';
contentBox.style.borderRadius = '10px';
contentBox.style.color = '#fff';
contentBox.style.maxWidth = '500px';
contentBox.style.textAlign = 'center';
contentBox.style.position = 'relative';
contentBox.style.boxShadow = '0 0 15px rgba(0,0,0,0.5)';
// Ensure vertical stacking
contentBox.style.display = 'flex';
contentBox.style.flexDirection = 'column';
contentBox.style.alignItems = 'center';
contentBox.style.maxHeight = '90vh';  // 90% of viewport height
contentBox.style.transform = 'translateY(-150px)';

lightbox.appendChild(contentBox);

// Add image + name + info
const img = document.createElement('img');
img.style.maxWidth = '50%';
img.style.borderRadius = '50%';
img.style.marginBottom = '20px'; 
contentBox.appendChild(img);

const nameEl = document.createElement('h2');
contentBox.appendChild(nameEl);

const infoEl = document.createElement('p');
infoEl.style.marginTop = '30px';
infoEl.style.fontSize = '1.2rem';
contentBox.appendChild(infoEl);

// Close lightbox when background is clicked
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Show lightbox on planet click
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
        infoEl.style.marginTop = '50px'

        lightbox.style.display = 'flex';
    });
});


