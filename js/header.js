// header.js

// Function to toggle the nav list visibility
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}

// Code to create the header and nav
const header = document.createElement('header');
const nav = document.createElement('nav');

nav.innerHTML = `
    <div class="nav-container">
        <a href="index.html" class="logo">
            <img src="icons/site-spyder-logo-4.webp" alt="SiteSpyder" class="profile-photo" width="60" height="auto">
            <span>Penny’s Portfolio</span>
        </a>
        <div class="menu-icon" onclick="toggleMenu()">
            &#9776; <!-- Hamburger icon -->
        </div>
        <ul class="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
`;

header.appendChild(nav);
document.body.prepend(header);
