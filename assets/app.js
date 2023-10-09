
    // window.onload = () => {
    //     $('#onload').modal('show');
    // }
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


