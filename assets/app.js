// =========================clock//   -=======================================================counter
// Set the date we're counting down to
var countDownDate = new Date("Feb 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="demo"
document.getElementById("counter").innerHTML = 
` <div class="d-flex align-items-center justify-content-center">
<div class="d-flex flex-column">
<h1 class="m-0 p-0 text-center f-26 w-700">${days}</h1>
<p class="mb-0 pb-0 f-14 text-gray-light text-center w-600">Days</p>
</div>
<div class="mx-2 f-30 w-700 mb-4">:</div>
<div class="d-flex flex-column">
<h1 class="m-0 p-0 text-center f-26 w-700">${hours}</h1>
<p class="mb-0 pb-0 f-14 text-gray-light text-center w-600">Hours</p>
</div>
<div class="mx-2 f-30 w-700 mb-4">:</div>
<div class="d-flex flex-column">
<h1 class="m-0 p-0 text-center f-26 w-700">${minutes}</h1>
<p class="mb-0 pb-0 f-14 text-gray-light text-center w-600">Min</p>
</div>
<div class="mx-2 f-30 w-700 mb-4">:</div>
<div class="d-flex flex-column">
<h1 class="m-0 p-0 text-center f-26 w-700">${seconds}</h1>
<p class="mb-0 pb-0 f-14 text-gray-light text-center w-600">Sec</p>
</div>
</div>`
// If the count down is over, write some text 
if (distance < 0) {
clearInterval(x);
document.getElementById("counter").innerHTML = "EXPIRED";
}
}, 1000);

// =======================================hide-show
// function hide() {
//   var element = document.getElementById("navbarSupportedContent");
//   element.classList.add("hide");
// }
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
// ============
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 40) {
      $(".header-navbar").css("background-color", "#272f3b");
      $(".header-navbar").css("height", "90px");
      $(".header-navbar").css("box-shadow", "0 2px 10px 0 rgb(0 0 0 / 20%)");
      // $(".logo-toggle").css("padding-top", "0px");
    }

    else {
      $(".header-navbar").css("background-color", "transparent");
      $(".header-navbar").css("height", "100px");
      $(".header-navbar").css("box-shadow", "none");
      // $(".logo-toggle").css("padding-top", "10px");
    }
  })
});

// =========================================upcoming-events
$(document).ready(function () {
  $(".upcoming-events").owlCarousel(
    {
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      nav: true,

      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    }
  );
});

// =========================================upcoming-events
$(document).ready(function () {
  $(".testimonials").owlCarousel(
    {
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: ["<div class='nav-button owl-prev'><i class='bi bi-arrow-left'></i></div>", "<div class='nav-button owl-next'><i class='bi bi-arrow-right'></i></div>"],

      nav: true,

      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
        1150: {
          items: 3,
        }
      }
    }
  );
});

// =========================================clientsscroller
$(document).ready(function () {
  $(".clients-scroller1").owlCarousel(
    {
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        }
      }
    }
  );
});
$(document).ready(function () {
  $(".clients-scroller2").owlCarousel(
    {
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    }
  );
});
// =============================================js
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
$("#defaultOpen").click();


