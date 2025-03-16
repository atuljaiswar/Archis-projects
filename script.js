const menuBar = document.querySelector(".menuIcon");
const crossIcon = document.querySelector(".crossIcon");
const menuList = document.querySelector(".menu-list");

menuBar.addEventListener("click", () => {
  menuList.classList.add("showMenuList");
});

crossIcon.addEventListener("click", () => {
  menuList.classList.remove("showMenuList");
});

