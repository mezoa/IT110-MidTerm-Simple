document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const errorBanner = document.querySelector('.error-banner');
  const successBanner = document.querySelector('.success-banner');

  form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Reset previous error messages and hide banners
      errorBanner.style.display = 'none';
      successBanner.style.display = 'none';
      errorBanner.textContent = '';

      try {
          // Validate form fields
          const name = form.querySelector('#Name').value.trim();
          const email = form.querySelector('#Email-1').value.trim();
          const message = form.querySelector('#Message').value.trim();

          if (!name || !email || !message) {
              throw new Error('All fields are required');
          }

          // Validate email format
          if (!isValidEmail(email)) {
              throw new Error('Invalid email format');
          }

          // Additional validation checks can be added as needed

          // Display success banner upon successful validation
          successBanner.textContent = 'Form submitted successfully!';
          successBanner.style.display = 'block';

      } catch (error) {
          // Handle errors and display in the error banner
          console.error(error);

          // Display errors in the error banner
          errorBanner.textContent = error.message;
          errorBanner.style.display = 'block';
      }
  });

  // Function to validate email format
  function isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
  }
});


// HEADER ANIMATION
window.onscroll = function() {scrollFunction()};
var element = document.getElementById("body");
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $(".navbar").addClass("fixed-top");
      element.classList.add("header-small");
      $("body").addClass("body-top-padding");

  } else {
      $(".navbar").removeClass("fixed-top");
      element.classList.remove("header-small");
      $("body").removeClass("body-top-padding");
  }
}

// OWL-CAROUSAL
$('.owl-carousel').owlCarousel({
    items: 3,
    loop:true,
    nav:false,
    dot:true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayHoverPause: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

// SCROLLSPY
$(document).ready(function() {
  $(".nav-link").click(function() {
      var t = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(t).offset().top - 75
      }, {
          duration: 1000,
      });
      $('body').scrollspy({ target: '.navbar',offset: $(t).offset().top });
      return false;
  });

});

// AOS
AOS.init({
    offset: 120, 
    delay: 0,
    duration: 1200, 
    easing: 'ease', 
    once: true, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
    disable: "mobile"
  });

//SIDEBAR-OPEN
  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
    $("body").removeClass("sidebar-open");
  })

  $('#navbarSupportedContent').on('shown.bs.collapse', function () {
    $("body").addClass("sidebar-open");
  })


  window.onresize = function() {
    var w = window.innerWidth;
    if(w>=992) {
      $('body').removeClass('sidebar-open');
      $('#navbarSupportedContent').removeClass('show');
    }
  }

  