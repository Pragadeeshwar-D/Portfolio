document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Optionally, close the menu when a link is clicked
    navbar.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            navbar.classList.remove('active');
        }
    });
});
