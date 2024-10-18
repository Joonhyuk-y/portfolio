// script.js

// Page Load Animation - Fade In
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Blog Slider Functionality
let currentSlide = 0;
const blogItems = document.querySelectorAll('.blog-item'); // Select all blog items
const totalBlogs = blogItems.length;

// Function to move the slider
function showSlide(index) {
    const slider = document.querySelector('.blog-slider');
    const blogWidth = document.querySelector('.blog-item').offsetWidth; // Get the width of one blog
    slider.style.transform = `translateX(-${index * blogWidth}px)`; // Move the slider based on blog width
}

// Left Arrow Click Event
document.querySelector('.left-btn').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--; // Move to the previous blog
    }
    showSlide(currentSlide);
});

// Right Arrow Click Event
document.querySelector('.right-btn').addEventListener('click', () => {
    if (currentSlide < totalBlogs - 2) { // Subtract 2 to ensure 2 blogs are visible
        currentSlide++; // Move to the next blog
    }
    showSlide(currentSlide);
});
