function test(a, b) {
    return a + b
}



let openModalBtn = document.getElementById("modalOpen1");
// let openModalBtn1 = document.getElementById("modalOpen1");
let modal = document.querySelector(".modal");
let closeModalBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex";
});
// openModalBtn1.addEventListener("click", function () {
//   modal.style.display = "flex";
// });

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

let openModalBtn2 = document.getElementById("modalOpen2");
let modalNovorossiysk = document.querySelector(".modal-novorossiysk");
let closeModalBtn2 = document.querySelector(".close-btn2");

openModalBtn2.addEventListener("click", function () {
  modalNovorossiysk.style.display = "flex";
});

closeModalBtn2.addEventListener("click", function () {
  modalNovorossiysk.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === modalNovorossiysk) {
    modalNovorossiysk.style.display = "none";
  }
});

let openModalBtn3 = document.getElementById("modalOpen3");
let modalRostov = document.querySelector(".modal-rostov");
let closeModalBtn3 = document.querySelector(".close-btn3");

openModalBtn3.addEventListener("click", function () {
  modalRostov.style.display = "flex";
});

closeModalBtn3.addEventListener("click", function () {
  modalRostov.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === modalRostov) {
    modalRostov.style.display = "none";
  }
});

let openModalBtn4 = document.getElementById("modalOpen4");
let modalForm = document.querySelector(".modal-form");
let closeModalBtn4 = document.querySelector(".close-btn4");

openModalBtn4.addEventListener("click", function () {
  modalForm.style.display = "flex";
});

closeModalBtn4.addEventListener("click", function () {
  modalForm.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === modalForm) {
    modalForm.style.display = "none";
  }
});

let openModalBtn5 = document.getElementById("modalOpen5");
let modalFormSecond = document.querySelector(".modal-form_second");
let closeModalBtn5 = document.querySelector(".close-btn5");

openModalBtn5.addEventListener("click", function () {
  modalFormSecond.style.display = "flex";
});
closeModalBtn5.addEventListener("click", function () {
  modalFormSecond.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === modalFormSecond) {
    modalFormSecond.style.display = "none";
  }
});

let openModalBtn9 = document.getElementById("modalOpen-delivery");
let modalFormDelivery = document.querySelector(".modal-form_delivery");
let closeModalBtn9 = document.querySelector(".close-btn9");

openModalBtn9.addEventListener("click", function () {
  modalFormDelivery.style.display = "flex";
});
closeModalBtn9.addEventListener("click", function () {
  modalFormDelivery.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === modalFormDelivery) {
    modalFormDelivery.style.display = "none";
  }
});
//# sourceMappingURL=script.js.map
