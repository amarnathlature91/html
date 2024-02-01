const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu__inner");
const menuArrow = menu.querySelector(".menu__arrow");
const menuTitle = menu.querySelector(".menu__title");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");


// Chat button toggler
document.addEventListener('DOMContentLoaded', function () {
  var openFormBtn = document.getElementById('openFormBtn');
  var closeFormBtn = document.getElementById('closeFormBtn');
  var popupForm = document.getElementById('popupForm');

  openFormBtn.addEventListener('click', function () {
    popupForm.style.display = 'flex';
  });

  closeFormBtn.addEventListener('click', function () {
    popupForm.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === popupForm) {
      popupForm.style.display = 'none';
    }
  });

  document.getElementById('helpForm').addEventListener('submit', function (event) {
    alert('Form submitted!');
    event.preventDefault();
    popupForm.style.display = 'none';
  });
});

// chat button toggler -end

// Carousel script
const carousel = document.querySelector(".scr-carousel");
const carouselItems = document.querySelectorAll(".scr-carousel-item");
let currentIndex = 0;
function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}
function updateCarousel() {
  const itemWidth = carouselItems[currentIndex].clientWidth;
  carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
}
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 }
      },
      opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
  });





  function updateCarousel() {
    const itemWidth = carouselItems[currentIndex].clientWidth;
    carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  }
  setInterval(nextSlide, 5000);
});

// carousel script

// Navbar Menu Toggle Function
function toggleMenu() {
  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
  subMenu = children.querySelector(".submenu");
  subMenu.classList.add("is-active");
  subMenu.style.animation = "slideLeft 0.35s ease forwards";
  const menuTitle = children.querySelector("i").parentNode.childNodes[0]
    .textContent;
  menu.querySelector(".menu__title").textContent = menuTitle;
  menu.querySelector(".menu__header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.35s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("is-active");
  }, 300);

  menu.querySelector(".menu__title").textContent = "";
  menu.querySelector(".menu__header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
  if (!menu.classList.contains("is-active")) {
    return;
  }
  if (e.target.closest(".menu__dropdown")) {
    const children = e.target.closest(".menu__dropdown");
    showSubMenu(children);
  }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    if (menu.classList.contains("is-active")) {
      toggleMenu();
    }
  }
});

// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuTitle.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);


