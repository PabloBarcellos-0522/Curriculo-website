document.addEventListener("DOMContentLoaded", () => {
    "use strict"

    const preloader = document.querySelector("#preloader")
    if (preloader) {
        console.log("hello")
        setTimeout(() => {
            preloader.classList.add("loaded")
        }, 5000)
        setTimeout(() => {
            preloader.remove()
        }, 2000000)
    }

    document.addEventListener("click", function (event) {
        preloader.classList.add("loaded")
        setTimeout(() => {
            preloader.remove()
        }, 2000)
    })
})
