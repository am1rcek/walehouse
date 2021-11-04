let elSettingsBnt = document.querySelector(".header__btn--settings");
let elAccounModal = document.querySelector(".account-modal");
let elBody = document.querySelector("body");
let elTop = document.querySelector(".top");
let elEye = document.querySelector(".eye");
let elIconEye1 = document.querySelector(".bi-eye");
let elIconEye2 = document.querySelector(".bi-eye-slash");
let elInp = document.querySelector(".login__input");


elSettingsBnt.addEventListener("click", function () {
    elAccounModal.classList.toggle("open-accoun-modal");
    elBody.classList.toggle("body-transform");
})

let s = 0;
elEye.addEventListener("click", function(){
    if(s==0) {
        elIconEye1.style.display = "none";
        elIconEye2.style.display = "block";
        elInp.type = "text"
        s++;
        
    } else  {
        elIconEye1.style.display = "block";
        elIconEye2.style.display = "none";
        elInp.type = "password"
        s = 0;
    }
   
})

window.addEventListener("scroll",function(){
    header = document.querySelector("header");
    elTop.classList.toggle("show-top",window.scrollY > 200);
  })