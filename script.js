document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    
    navbar.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            navbar.classList.remove('active');
        }
    });
});
