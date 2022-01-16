let msgbox = document.getElementById("msgbox")
let txt = document.getElementById("text")
let btn = document.getElementById("btn-close")
function CheckStatus() {
  if (window.navigator.onLine) {
    msgbox.classList.remove("offline")
    msgbox.classList.add("online")
    txt.innerHTML = "You Are Online"
  } else {
    msgbox.classList.remove("online")
    msgbox.classList.add("offline")
    txt.innerHTML = "You are Offline"
  }
}
window.addEventListener("load", () => {
  CheckStatus()
})
btn.addEventListener("click", () => {
  CheckStatus()
})
