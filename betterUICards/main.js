document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector('.productImageContainer');
    const images = document.querySelectorAll('.productImageContainer img');
    const customScrollbar = document.querySelector('.custom-scrollbar');
    const toggleBtn = document.getElementById("toggle");
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");

    toggleBtn.addEventListener("click", function() {
        moonIcon.classList.toggle("d-none");
        sunIcon.classList.toggle("d-none");
    });

    // Create dots for each image
    images.forEach((img, index) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active'); // First dot is active by default
        customScrollbar.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Function to update the active dot
    function updateActiveDot(activeIndex) {
        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Listen for scroll events to update the active dot
    imageContainer.addEventListener('scroll', () => {
        let scrollPosition = imageContainer.scrollLeft;
        let activeIndex = Math.round(scrollPosition / imageContainer.offsetWidth);
        updateActiveDot(activeIndex);
    });
});
