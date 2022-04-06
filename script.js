function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
   
  }
 
  function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
  }

let slideIndex = 1;
showSlides(slideIndex);
showSlides2(slideIndex)

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
 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "flex";
}



//Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}


function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "flex";
 
}


var map = L.map('map').setView([37.8495892, -84.3684298], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGlua2NhbSIsImEiOiJjbDFkb3JjMGUwamsxM2ZuNGE5YXdzbjFrIn0.IalJsP4Je2nt6-V9HXK5cw'
}).addTo(map);





