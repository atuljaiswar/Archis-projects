const menuBar = document.querySelector(".menuIcon");
const crossIcon = document.querySelector(".crossIcon");
const menuList = document.querySelector(".menu-list");

menuBar.addEventListener("click", () => {
  menuList.classList.add("showMenuList");
});

crossIcon.addEventListener("click", () => {
  menuList.classList.remove("showMenuList");
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".believe-swiper", {
      slidesPerView: 1.2, // Center full + 10% side visibility
      centeredSlides: true,
      loop: true,
      spaceBetween: 15,
      breakpoints: {
        768: {
          slidesPerView: 2, // Show more slides on larger screens
          spaceBetween: 20,
          centeredSlides: false,
        },
      },
      pagination: {
          el: ".swiper-pagination", // This will now reference our outside pagination
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        },
    });
  });