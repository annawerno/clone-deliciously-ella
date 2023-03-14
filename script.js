const dropdownDelContainer = document.querySelector(".del-dd-container");
const dropdownOptions = document.querySelector(".del-choice-dropdown");
const delChoice = document.querySelectorAll(".del-choice");
const delChoiceUK = document.querySelector(".del-choice-uk");
const delChoiceEU = document.querySelector(".del-choice-eu");
const delOptionUK = document.querySelector(".del-option-uk");
const delOptionEU = document.querySelector(".del-option-eu");
const notificationUK = document.querySelector(".notification-uk");
const notificationEU = document.querySelector(".notification-eu");

const notificationBannerEl = document.querySelectorAll(".notification");
const notificationBtnEl = document.querySelectorAll(".notification-btn");

// NOTIFICATION
notificationBtnEl.forEach((element, index) => {
  element.addEventListener("click", function () {
    notificationBannerEl[index].remove();
  });
});

// DELIVERY CHOICE
dropdownDelContainer.addEventListener("click", function () {
  dropdownOptions.classList.toggle("hidden");
});

delChoiceUK.addEventListener("click", function () {
  dropdownOptions.classList.add("hidden");
  delOptionUK.classList.remove("hidden");
  delOptionEU.classList.add("hidden");
  notificationEU.classList.add("hidden");
  notificationUK.classList.remove("hidden");
  location.reload();
});

delChoiceEU.addEventListener("click", function () {
  dropdownOptions.classList.add("hidden");
  delOptionUK.classList.add("hidden");
  delOptionEU.classList.remove("hidden");
  notificationUK.classList.add("hidden");
  notificationEU.classList.remove("hidden");
});

// MENU OVERLAY
const moreBtnEl = document.querySelectorAll(".menu-overlay-toggle");
const bodyEl = document.querySelector(".body");
const mainEl = document.querySelector(".main");

moreBtnEl.forEach((element) => {
  element.addEventListener("click", function () {
    bodyEl.classList.toggle("overlay-open");
  });
});

// DROPDOWN MENUS FOR NAVIGATION LINKS
const ddRecipes = document.querySelector(".dd-recipes");
const ddApp = document.querySelector(".dd-app");
const ddShop = document.querySelector(".dd-shop-container");
const navLinkRecipes = document.querySelector(".nav-li-recipes");
const navLinkApp = document.querySelector(".nav-li-app");
const navLinkShop = document.querySelector(".nav-li-shop");

navLinkRecipes.addEventListener("mouseenter", function () {
  ddRecipes.classList.remove("hidden");
});

navLinkRecipes.addEventListener("mouseout", function () {
  ddRecipes.classList.add("hidden");
});

navLinkApp.addEventListener("mouseenter", function () {
  ddApp.classList.remove("hidden");
});

navLinkApp.addEventListener("mouseout", function () {
  ddApp.classList.add("hidden");
});

navLinkShop.addEventListener("mouseenter", function () {
  ddShop.classList.remove("hidden");
});

navLinkShop.addEventListener("mouseout", function () {
  ddShop.classList.add("hidden");
});
