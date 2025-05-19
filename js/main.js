const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");
const forgottenPasswordBtn = document.getElementById("forgotten-password-btn");
const closeBtn = document.getElementById("close-btn");
const popup = document.getElementById("popup");
let content;

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

