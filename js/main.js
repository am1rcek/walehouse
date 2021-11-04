let elSettingsBnt = document.querySelector(".header__btn--settings");
let elAccounModal = document.querySelector(".account-modal");
let elBody = document.querySelector("body");

elSettingsBnt.addEventListener("click", function () {
    elAccounModal.classList.toggle("open-accoun-modal");
    elBody.classList.toggle("body-transform");
})