let docTitle = document.title
window.addEventListener("blur", () => {
  document.title = "Come back :("
  document.getElementById("portfolio").classList.remove("visible")
  document.getElementById("portfolio").classList.add("hidden")
})
window.addEventListener("focus", () => {
  document.title = docTitle
  setTimeout(function () {
    document.getElementById("portfolio").classList.remove("hidden")
    document.getElementById("portfolio").classList.add("visible")
  }, 1000)
})

window.addEventListener("blur", () => {
  document.title = "Come back :("
  document.getElementById("send_mensage").classList.remove("visible")
  document.getElementById("send_mensage").classList.add("hidden")
})
window.addEventListener("focus", () => {
  document.title = docTitle
  setTimeout(function () {
    document.getElementById("send_mensage").classList.remove("hidden")
    document.getElementById("send_mensage").classList.add("visible")
  }, 1000)
})

document.addEventListener("DOMContentLoaded", function () {
  var seta = document.getElementById("seta")

  seta.addEventListener("click", function () {
    var newX = 30
    // var newY = Math.random() * (window.innerHeight - seta.offsetHeight)

    if (send_mensage.style.left != newX + "px") {
      send_mensage.style.left = newX + "px"
      seta.classList.add("open")
    } else {
      send_mensage.style.left = "-220px"
      seta.classList.remove("open")
    }
    // seta.style.top = newY + "px"
  })
})
