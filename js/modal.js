const modal = document.getElementById(".modal");

function modalOn() {
  modal.style.display = "flex";
}
function ismodalOn() {
  return modal.style.display === "flex";
}
function modalOff() {
  modal.style.display = "none";
}

const btnLogin = document.getElementById("login");
btnLogin.addEventListener("click", (e) => {
  console.log("login");
  modalOn();
});

const closeBtn = modal.querySelector(".close_area");
closeBtn.addEventListener("click", (e) => {
  modalOff();
});

modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("#modal_overlay")) {
    modalOff();
  }
});
