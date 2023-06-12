import { videoData } from "./data.js";
let slideIndex = 0;
let slides = document.getElementsByClassName("showSlider");

slidesDisplay(slideIndex);
export function nextSlide() {
  const long = slides.length;
  if (slideIndex < long - 3) {
    slidesDisplay((slideIndex += 1));
  }
}
export function previousSlide() {
  const long = slides.length;
  if (slideIndex > 0) {
    slidesDisplay((slideIndex -= 1));
  }
}
function currentSlide(n) {
  slidesDisplay(n);
}
function slidesDisplay(index) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "inline-block";
  slides[index + 1].style.display = "inline-block";
  slides[index + 2].style.display = "inline-block";
}

export function showVideo(index) {
  const iframe = document.getElementById("video_content__iframe");
  iframe.setAttribute("src", videoData.result[index].videoUrl);

  const text = videoData.result[index].text;

  const videoTextElement = document.getElementById("text_container__p");
  videoTextElement.innerText = text;
  const element = document.getElementById("video_content");
  element.style.display = "flex";
  element.style.visibility = "visible";
}
