function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
   
  }
 
  function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
  }

let galleryImg = document.getElementById('gallery-photo')

let nature = document.getElementById('nature');
let relax = document.getElementById('relax');
let unique = document.getElementById('unique');
let hotelFeet = document.getElementById('Hotel_features');


hotelFeet.addEventListener('mouseout', function(){
  galleryImg.src ='imgs/The_Manchester_Hotel_Photo.png'
})

nature.addEventListener('mouseover', function(){
  galleryImg.src ='imgs/Front_Reso.png'
})
relax.addEventListener('mouseover', function(){
  galleryImg.src ='imgs/Indoor_Meet.png'
})
unique.addEventListener('mouseover', function(){
  galleryImg.src ='imgs/BAR.png'
})










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


var map = L.map('map').setView([37.8495892, -84.3684298], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGlua2NhbSIsImEiOiJjbDFkb3JjMGUwamsxM2ZuNGE5YXdzbjFrIn0.IalJsP4Je2nt6-V9HXK5cw'
}).addTo(map);





    var marker = L.marker([38.053367,-84.5109815,17]).addTo(map);
    marker.bindPopup("Manchester Hotel").openPopup();

    





