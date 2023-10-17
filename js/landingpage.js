// Add event listener for the contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  try {
    // Validate the contact form data
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("Email-1").value.trim();
    const message = document.getElementById("Message").value.trim();

    if (!name || !email || !message) {
      throw new Error("Please fill in all fields.");
    }

    if (!isValidEmail(email)) {
      throw new Error("Invalid email address.");
    }

    // If the data is valid, display a success message for the contact form
    const successBanner = document.querySelector(".success-banner");
    successBanner.style.display = "block";
    successBanner.textContent = "Form submitted successfully!";
    // You can reset the contact form here if needed
  } catch (error) {
    // If there's an error, display an error message for the contact form
    const errorBanner = document.querySelector(".error-banner");
    errorBanner.style.display = "block";
    errorBanner.textContent = error.message;
  } finally {
    // You can clean up or reset contact form elements here if needed
  }
});

document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  try {
    // Validate the email for the subscribe form
    const email = document.getElementById("EmailSubscribe").value.trim();

    if (!isValidEmail(email)) {
      throw new Error("Invalid email address.");
    }

    // If the email is valid, display a success message for the subscribe form
    const successBanner = document.querySelector(".success-banner-subscribe");
    successBanner.style.display = "block";
    successBanner.textContent = "You've subscribed successfully!";
    // You can reset the subscribe form here if needed
  } catch (error) {
    // If there's an error, display an error message for the subscribe form
    const errorBanner = document.querySelector(".error-banner-subscribe");
    errorBanner.style.display = "block";
    errorBanner.textContent = error.message;
  } finally {
    // You can clean up or reset subscribe form elements here if needed
  }
});

function isValidEmail(email) {
  // You can implement a more robust email validation function here
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


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

  