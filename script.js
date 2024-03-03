let docTitle = document.title
window.addEventListener("blur", () => {
  document.title = "Come back"
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
