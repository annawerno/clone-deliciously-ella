// NOTIFICATION
const notificationBannerEl = document.querySelectorAll(".notification");
const notificationBtnEl = document.querySelectorAll(".notification-btn");

function notificationCleared() {
  notificationBtnEl.forEach((element, index) => {
    element.addEventListener("click", function () {
      notificationBannerEl[index].remove();
    });
  });
}
notificationCleared();

// DELIVERY CHOICE
const delBtns = document.querySelectorAll(".del-btns");
const dropdownSelection = document.querySelector(".del-dd-selection");

for (i = 0; i < delBtns.length; i++) {
  delBtns[i].addEventListener("click", function () {
    dropdownSelection.classList.toggle("hidden");
  });
}

const deliveryUK = "uk";
const deliveryEU = "eu";
const delOptionUK = document.querySelector(".del-option-uk");
const delOptionEU = document.querySelector(".del-option-eu");
const delChoiceUK = document.querySelector(".del-choice-uk");
const delChoiceEU = document.querySelector(".del-choice-eu");
const notificationUK = document.querySelector(".notification-uk");
const notificationEU = document.querySelector(".notification-eu");

function showDeliveryOption(option) {
  delOptionUK.classList.toggle("hidden", option !== deliveryUK);
  delOptionEU.classList.toggle("hidden", option !== deliveryEU);
  notificationUK.classList.toggle("hidden", option !== deliveryUK);
  notificationEU.classList.toggle("hidden", option !== deliveryEU);
}

delChoiceUK.addEventListener("click", function () {
  showDeliveryOption(deliveryUK);
});

delChoiceEU.addEventListener("click", function () {
  showDeliveryOption(deliveryEU);
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

// NAVIGATION LINKS
function setupNavLinks() {
  const navLinks = ["recipes", "app", "shop"];

  for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];
    // const navNode = document.querySelector(".nav-link-" + navLink)
    const navNode = document.querySelector(`.nav-li-${navLink}`);

    let dropdownClass = `.dd-${navLink}`;
    if (navLink === "shop") {
      dropdownClass = dropdownClass + "-container";
    }

    const dropdownNode = document.querySelector(dropdownClass);

    navNode.addEventListener("mouseenter", function () {
      dropdownNode.classList.remove("hidden");
    });

    navNode.addEventListener("mouseout", function () {
      dropdownNode.classList.add("hidden");
    });
  }
}

setupNavLinks();
