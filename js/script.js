document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const stickyNavTop = nav.offsetTop;

  const stickyNav = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > stickyNavTop) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };

  stickyNav();
  window.addEventListener("scroll", stickyNav);
});

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".swiperproject", {
  speed: 600,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".swiperservice", {
  speed: 600,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".swiperservice2", {
  speed: 600,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".swiperteam", {
  speed: 600,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".swiperteam2", {
  speed: 600,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".swipertestimonial", {
  speed: 600,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll("details[data-dropdown]");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("toggle", (event) => {
      if (dropdown.open) {
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.open = false;
          }
        });
      }
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest("details[data-dropdown]")) {
      dropdowns.forEach((dropdown) => {
        dropdown.open = false;
      });
    }
  });
});

// counter

// Utility function to detect element visibility
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Animate count function
function animateCount(element, start, end, duration) {
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentCount = Math.floor(start + (end - start) * progress);

    element.innerText = currentCount;

    if (progress < 1) {
      requestAnimationFrame(animation);
    } else {
      element.innerText = end;
    }
  }

  requestAnimationFrame(animation);
}

// Main function to handle counting animation
function initCountAnimation() {
  const countBoxes = document.querySelectorAll(".count-box");

  countBoxes.forEach((countBox) => {
    const countText = countBox.querySelector(".count-text");
    const endCount = parseInt(countText.getAttribute("data-stop"), 10);
    const duration = parseInt(countText.getAttribute("data-speed"), 10);

    if (
      !countBox.classList.contains("counted") &&
      isElementInViewport(countBox)
    ) {
      countBox.classList.add("counted");
      animateCount(
        countText,
        parseInt(countText.innerText, 10),
        endCount,
        duration
      );
    }
  });
}

// Event listener for scroll to check if elements are in viewport
window.addEventListener("scroll", initCountAnimation);

// Initial check in case elements are already in viewport on load
window.addEventListener("load", initCountAnimation);
