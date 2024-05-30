document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    // Add this to remove the 'show' class when window is resized to larger screens
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.classList.remove('show');
        }
    });
});
