"use strict";
import gallery from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const newLighthbox = document.querySelector(".js-lightbox");
const imageLighthbox = document.querySelector(".lightbox__image");
const closeButton = document.querySelector(".lightbox__button");

const fragment = ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link">
     <img class="gallery__image"
       src="${preview}"
       alt="${description}"
       data-original="${original}"/>
  </a>
</li>
`;

const layoutImg = gallery.map(image => fragment(image));
galleryList.innerHTML = layoutImg.join("");

galleryList.addEventListener("click", e => {
  newLighthbox.classList.add("is-open");
  imageLighthbox.src = e.target.dataset.original;
});

closeButton.addEventListener("click", () => {
  newLighthbox.classList.remove("is-open");
  imageLighthbox.src = "";
});

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    newLighthbox.classList.remove("is-open");
  }
});
