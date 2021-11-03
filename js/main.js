let elSettingsBnt = document.querySelector(".header__btn--settings");
let elAccounModal = document.querySelector(".account-modal");

elSettingsBnt.addEventListener("click", function () {
    elAccounModal.classList.toggle("open-accoun-modal");
})