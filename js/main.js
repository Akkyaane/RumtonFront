const signInBtn = document.getElementById("sign-in-btn");
const signUpBtns = document.querySelectorAll(".sign-up-btn");
const mobileSignInBtn = document.getElementById("mobile-sign-in-btn");
const mobileSignUpBtn = document.getElementById("mobile-sign-up-btn");
const forgottenPasswordBtn = document.getElementById("forgotten-password-btn");
const closeBtn = document.getElementById("close-btn");
const popup = document.getElementById("popup");

const menuBtn = document.getElementById("menu-btn");
const menuContent = document.getElementById("menu-content");

const sortBtn = document.getElementById("sort-btn");
const sortContent = document.getElementById("sort-content");

const filterBtn = document.getElementById("filter-btn");
const filterContent = document.getElementById("filter-content");

const items = Array.from(document.querySelectorAll(".item"));
const itemsPerPage = 12;
let currentPage = 1;

function displayPaginatedItems(page) {
  const container = document.querySelector(".items-container");
  const pageNumber = document.getElementById("page-number");

  if (!container || !pageNumber) return;

  container.innerHTML = "";
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);

  paginatedItems.forEach((item) => {
    container.appendChild(item.cloneNode(true));
  });

  pageNumber.innerText = `${page} / ${Math.ceil(items.length / itemsPerPage)}`;
}

if (
  items.length &&
  document.querySelector(".items-container") &&
  document.getElementById("page-number")
) {
  displayPaginatedItems(currentPage);
}

function changePage(page) {
  if (page < 1 || page > Math.ceil(items.length / itemsPerPage)) return;
  currentPage = page;
  displayPaginatedItems(page);
}

function displayAuthenticationPopup(button, buttons) {
  if (button && !buttons) {
  button.addEventListener("click", () => {
    popup.classList.toggle("hide");

    popup.querySelector("#sign-in")?.classList.add("hide");
    popup.querySelector("#sign-up")?.classList.add("hide");
    popup.querySelector("#forgotten-password")?.classList.add("hide");

    if (button === signInBtn || button === mobileSignInBtn) {
      popup.querySelector("#sign-in")?.classList.remove("hide");
    } else if (button === mobileSignUpBtn) {
      popup.querySelector("#sign-up")?.classList.remove("hide");
    } else if (button === forgottenPasswordBtn) {
      popup.querySelector("#forgotten-password")?.classList.remove("hide");
    } else if (button === closeBtn) {
      popup.classList.add("hide");
    }
  });
  }

  if (!button && buttons) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        popup.classList.toggle("hide");
        popup.querySelector("#sign-in")?.classList.add("hide");
        popup.querySelector("#forgotten-password")?.classList.add("hide");
        popup.querySelector("#sign-up")?.classList.remove("hide");
      });
    });
  }
}

function displayPopup(button, content) {
  if (!button || !content) return;

  button.addEventListener("click", () => {
    if (button === sortBtn) {
      content.classList.toggle("hide");
      filterContent.classList.add("hide");
    } else if (button === filterBtn) {
      content.classList.toggle("hide");
      sortContent.classList.add("hide");
    }
  });
}

[
  signInBtn,
  mobileSignInBtn,
  mobileSignUpBtn,
  forgottenPasswordBtn,
  closeBtn,
].forEach(button => displayAuthenticationPopup(button, null));

displayAuthenticationPopup(null, signUpBtns)

displayPopup(menuBtn, menuContent);
displayPopup(sortBtn, sortContent);
displayPopup(filterBtn, filterContent);
