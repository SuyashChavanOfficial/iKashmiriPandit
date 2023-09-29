
// TO CHANGE IMAGE 

const imgContainer = document.querySelector('.img-container');
const images = imgContainer.querySelectorAll('img');
let currentImageIndex = 0;

function changeImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(changeImage, 3000);