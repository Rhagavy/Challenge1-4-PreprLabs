function showSidebar() {
  console.log("clicked");
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  // const searchBox = document.querySelector(".searchbox");
  // searchBox.style.display = "none";
  sidebar.style.display = "none";
}

let subMenu = document.getElementById("sub-menu");
function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let profile = document.getElementById("profile");
let menuIcon = document.getElementById("menu-icon");
let topSection = document.getElementById("topSection");
let contentSection = document.getElementById("content-section");
let filterBox = document.getElementById("filterBox");
let searchItem = document.getElementById("searchItem");
// let btnGroup = document.getElementById("btnGroup");
// let pagination = document.getElementById("pagination");
// let projectCards = document.querySelectorAll(".projectCard");

let nav = document.getElementById("nav");
btn.onclick = function () {
  contentSection.style.backgroundColor = "";
  nav.classList.toggle("dark-theme-nav");
  topSection.classList.toggle("dark-theme-topSection");
  subMenu.classList.toggle("dark-theme-sub-menu-link");
  contentSection.classList.toggle("dark-theme-content-section");
  filterBox.classList.toggle("dark-theme-filter-box");
  searchItem.classList.toggle("dark-theme-search-items");
  // btnGroup.classList.toggle("dark-theme-buttons");
  // pagination.classList.toggle("dark-theme-pagination");

  // projectCards.classList.toggle("dark-theme-card");
  document.querySelectorAll(".projectCard").forEach((element) => {
    element.classList.toggle("dark-theme-card");
  });

  document.querySelectorAll(".page").forEach((element) => {
    element.classList.toggle("dark-theme-pagination");
  });

  document.querySelectorAll(".btnGroup").forEach((element) => {
    element.classList.toggle("dark-theme-buttons");
  });

  if (nav.classList.contains("dark-theme-nav")) {
    btnIcon.src = "images/sun2.png";
    btnText.innerHTML = "Light Mode";
    profile.src = "images/profileDark.png";
    menuIcon.src = "images/menuDarkMode.png";
  } else {
    btnIcon.src = "images/moon2.png";
    btnText.innerHTML = "Dark Mode";
    profile.src = "images/profile-icon.png";
    // topSection.style.backgroundColor = "#005365";
  }
};

const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

let positionButton = document.getElementById("changePosition");
let reposition = document.getElementById("modal");
positionButton.onclick = () => {
  reposition.classList.toggle("change-position");
};
