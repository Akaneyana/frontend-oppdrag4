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

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}