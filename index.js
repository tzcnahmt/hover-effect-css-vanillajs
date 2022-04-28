const bgColor = document.querySelector(".main__content")
const images = document.querySelectorAll(".main__content div")
const divP = document.p

document.querySelectorAll(".main__content div").forEach((element) => {
    element.addEventListener("click", function () {
        element.classList.toggle("clicked")

        images.forEach((element2) => {
            if (element2 === element) {
                return
            } else {
                element2.classList.toggle("bg-images")
            }
        })
    })
})

function anim() {}
