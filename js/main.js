let elSettingsBnt = document.querySelector(".header__btn--settings");
let elAccounModal = document.querySelector(".account-modal");
let elBody = document.querySelector("body");
let elTop = document.querySelector(".top");
let elEye = document.querySelector(".eye");
let elIconEye1 = document.querySelector(".bi-eye");
let elIconEye2 = document.querySelector(".bi-eye-slash");
let elInp = document.querySelector(".login__input");
const elProductBtn = document.querySelectorAll(".products__btn");
const elSliderBtn =  document.querySelectorAll(".carousel__btn");

elProductBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let clickedBtn = item;
        elProductBtn.forEach(function(item){
            item.classList.remove("products__btn--active")
        });
        clickedBtn.classList.add("products__btn--active")
    })
})


elSliderBtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        let activeBtn = btn;
        elSliderBtn.forEach(function(btn){
            btn.classList.remove("carousel__btn--active")
        });
        activeBtn.classList.add("carousel__btn--active")
    })
})

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