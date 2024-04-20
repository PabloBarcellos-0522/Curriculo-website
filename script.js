document.addEventListener("DOMContentLoaded", () => {
  "use strict"

  const preloader = document.querySelector("#preloader")
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("loaded")
    }, 4000)
    setTimeout(() => {
      preloader.remove()
    }, 5000)
  }

  document.addEventListener("click", function (event) {
    preloader.classList.add("loaded")
    setTimeout(() => {
      preloader.remove()
    }, 1000)
  })
})

let sections = [
  document.querySelector("#Home-page"),
  document.querySelector("#Projects-page"),
  document.querySelector("#Skills-page"),
  document.querySelector("#Education-page"),
  document.querySelector("#Contact-me-page"),
]

function clear() {
  for (let index = 0; index < sections.length; index++) {
    const element = sections[index]
    element.classList.remove("active")
    element.classList.add("disable")
  }
}

function Home() {
  const atual = document.querySelector("#Home-page")
  clear()
  atual.classList.add("active")
  atual.classList.remove("disable")
}

function Projects() {
  const atual = document.querySelector("#Projects-page")
  clear()
  atual.classList.add("active")
  atual.classList.remove("disable")
}

function Skills() {
  const atual = document.querySelector("#Skills-page")
  clear()
  atual.classList.add("active")
  atual.classList.remove("disable")
}

function Education() {
  const atual = document.querySelector("#Education-page")
  clear()
  atual.classList.add("active")
  atual.classList.remove("disable")
}

function Contact() {
  const atual = document.querySelector("#Contact-me-page")
  clear()
  atual.classList.add("active")
  atual.classList.remove("disable")
}
