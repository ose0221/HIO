const logmodal = document.getElementById("logmodal");

function logmodalOn() {
  logmodal.style.display = "flex";
}
function logmodalOff() {
  logmodal.style.display = "none";
}

const joinmodal = document.getElementById("joinmodal");

function joinmodalOn() {
  joinmodal.style.display = "flex";
}
function joinmodalOff() {
  joinmodal.style.display = "none";
}

const btnLogin = document.getElementById("btn_login");
btnLogin.addEventListener("click", (e) => {
  joinmodalOff();
  logmodalOn();
});

const btnJoin = document.getElementById("btn_join");
btnJoin.addEventListener("click", (e) => {
  logmodalOff();
  joinmodalOn();
});

document.getElementById("log_close_area").addEventListener("click", (e) => {
  console.log("close");
  logmodalOff();
});
document.getElementById("join_close_area").addEventListener("click", (e) => {
  joinmodalOff();
});

modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("#modal_overlay")) {
    logmodalOff();
    joinmodalOff();
  }
});
