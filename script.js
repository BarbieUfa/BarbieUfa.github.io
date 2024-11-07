let currentSlide = 0;
const slides = ['k_CU13uLFxw.jpg', '3ea28a20-b6cc-4ead-8428-a18b7854f806.jpg', 'vsepOsztJR4.jpg'];

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    document.getElementById('slide').src = slides[currentSlide];
}
