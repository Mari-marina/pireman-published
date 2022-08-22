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
//# sourceMappingURL=script.js.map
