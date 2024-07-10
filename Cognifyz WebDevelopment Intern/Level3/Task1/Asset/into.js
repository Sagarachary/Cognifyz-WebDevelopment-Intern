let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

// Modal functionality
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const thumbnails = document.getElementsByClassName("thumbnail");

for (let thumbnail of thumbnails) {
    thumbnail.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.children[0].src;
    }
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}