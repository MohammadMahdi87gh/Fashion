"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slide");
  var dots = document.querySelectorAll(".dot");
  var currentSlide = 0;
  var slideInterval;

  function showSlide(index) {
    slides.forEach(function (slide, i) {
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
  } // اطمینان از نمایش اولین اسلاید


  showSlide(currentSlide); // شروع اسلایدر

  startSlider(); // تغییر اسلاید با کلیک روی دایره‌ها

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      currentSlide = parseInt(dot.getAttribute("data-index"));
      showSlide(currentSlide);
      stopSlider();
      startSlider();
    });
  });
});
