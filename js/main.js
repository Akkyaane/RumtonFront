const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");
const forgottenPasswordBtn = document.getElementById("forgotten-password-btn");
const closeBtn = document.getElementById("close-btn");
const popup = document.getElementById("popup");
let content;
const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");
const items = Array.from(document.querySelectorAll(".item"));
const itemsPerPage = 12;
let currentPage = 1;

function displayPaginatedItems(page) {
  const container = document.querySelector(".items-container");
  container.innerHTML = "";
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);

  paginatedItems.forEach((item) => {
    const clone = item.cloneNode(true);
    container.appendChild(clone);
  });

  document.getElementById("page-number").innerHTML = `${page} / ${Math.ceil(
    items.length / itemsPerPage
  )}`;
}

function changePage(page) {
  if (page < 1 || page > Math.ceil(items.length / itemsPerPage)) return;
  currentPage = page;
  displayPaginatedItems(page);
}

displayPaginatedItems(currentPage);

signInBtn.addEventListener("click", () => {
  popup.classList.remove('hide');
  popup.querySelector("#sign-in").classList.remove('hide')
  popup.querySelector("#sign-up").classList.add('hide')
  popup.querySelector("#forgotten-password").classList.add('hide')

});

signUpBtn.addEventListener("click", () => {
  popup.classList.remove('hide');
  popup.querySelector("#sign-in").classList.add('hide')
  popup.querySelector("#sign-up").classList.remove('hide')
  popup.querySelector("#forgotten-password").classList.add('hide')
});

forgottenPasswordBtn.addEventListener("click", () => {
  popup.classList.remove('hide');
  popup.querySelector("#sign-in").classList.add('hide')
  popup.querySelector("#sign-up").classList.add('hide')
  popup.querySelector("#forgotten-password").classList.remove('hide')
});

closeBtn.addEventListener("click", () => {
  popup.classList.add('hide');
});

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("hide");
});