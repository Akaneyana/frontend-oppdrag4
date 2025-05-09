function sendMelding() {
    alert("Melding sendt!");
}

function darkmode() {
    /* funker ikke :() */
    var element = document.body;
    element.classList.toggle("dark-mode");
}
document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('comment').value;
    document.getElementById('comment-section').innerHTML += `<p>${input}</p>`;
});

// Adds a transparent background to the header when scrolling down the page
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//Makes you able to toggle Hamburger menu when on smaller device with smaller screens 
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}