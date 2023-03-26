const menuBtn = document.getElementById('menu');
const dropDwn = document.querySelector('.dropdown');
const listItems = document.querySelector('.dropdown');

menuBtn.addEventListener('click', () => {
  menuBtn.style.display = 'none';
  dropDwn.style.display = 'block';
});

listItems.addEventListener('click', () => {
  menuBtn.style.display = 'flex';
  dropDwn.style.display = 'none';
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 