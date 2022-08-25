const logmodal = document.getElementById("logmodal");

function logmodalOn() {
  logmodal.style.display = "flex";
}
function islogmodalOn() {
  logmodal.style.display === "flex";
}
function logmodalOff() {
  logmodal.style.display = "none";
}

const joinmodal = document.getElementById("joinmodal");

function joinmodalOn() {
  joinmodal.style.display = "flex";
}
function isjoinmodalOn() {
  joinmodal.style.display === "flex";
}
function joinmodalOff() {
  joinmodal.style.display = "none";
}

const btnLogin = document.getElementById("btn_login");
btnLogin.addEventListener("click", (e) => {
  logmodalOn();
  console.log("login");
});

const btnJoin = document.getElementById("btn_join");
btnLogin.addEventListener("click", (e) => {
  joinmodalOn();
  console.log("join");
});

const log_closeBtn = modal.querySelector(".log_close_area");
closeBtn.addEventListener("click", (e) => {
  console.log("close");
  logmodalOff();
});
const join_closeBtn = modal.querySelector(".join_close_area");
closeBtn.addEventListener("click", (e) => {
  console.log("close");
  joinmodalOff();
});

modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("#modal_overlay")) {
    logmodalOff();
    joinmodalOff();
  }
});
