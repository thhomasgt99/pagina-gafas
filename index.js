const slider = document.querySelector("#slider")
let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length - 1]

const bntLeft = document.querySelector("#btn-left")
const bntRight = document.querySelector("#btn-right")

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function Next() {
   let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]
   slider.style.marginLeft = "-200%"
   slider.style.transition = "all 1s"
   setTimeout(function () {
      slider.style.transition = "none"
      slider.insertAdjacentElement('beforeend', sliderSectionFirst)
      slider.style.marginLeft = "-100%"
   }, 1000)
}

function Prev() {
   let sliderSection = document.querySelectorAll(".slider__section")
   let sliderSectionLast = sliderSection[sliderSection.length - 1]
   slider.style.marginLeft = "0"
   slider.style.transition = "all 1s"
   setTimeout(function () {
      slider.style.transition = "none"
      slider.insertAdjacentElement('afterbegin', sliderSectionLast)
      slider.style.marginLeft = "-100%"
   }, 1000)
}

bntRight.addEventListener('click', function () {
   Next()
})

bntLeft.addEventListener('click', function () {
   Prev()
})

setInterval(() => {
   Next()
}, 5000);

