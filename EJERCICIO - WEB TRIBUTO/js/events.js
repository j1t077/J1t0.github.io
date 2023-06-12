import { nextSlide, previousSlide, showVideo } from "./videos.js";
const leftButton = document.getElementById("left_button");
leftButton.addEventListener("click", previousSlide);
const rightButton = document.getElementById("right_button");
rightButton.addEventListener("click", nextSlide);
let fotos = document.getElementsByClassName("showSlider__image");
for (let i = 0; i < fotos.length; i++) {
  const foto = fotos[i];
  foto.addEventListener("click", () => {
    showVideo(i);
  });
}
