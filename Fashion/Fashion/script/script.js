document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        if (!slideInterval) {
            slideInterval = setInterval(nextSlide, 3000);
        }
    }

    function stopSlider() {
        clearInterval(slideInterval);
        slideInterval = null;
    }

    // اطمینان از نمایش اولین اسلاید
    showSlide(currentSlide);

    // شروع اسلایدر
    startSlider();

    // تغییر اسلاید با کلیک روی دایره‌ها
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            currentSlide = parseInt(dot.getAttribute("data-index"));
            showSlide(currentSlide);
            stopSlider();
            startSlider();
        });
    });
});