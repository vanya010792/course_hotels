const sliderWrap = document.querySelector('[data-slider-wrap]');
const sliderList = sliderWrap.querySelector('[data-slider-list]');
const sliderItems = sliderList.querySelectorAll('li');
const sliderPrevBtn = sliderWrap.querySelector('[data-slider-prev]');
const sliderNextBtn = sliderWrap.querySelector('[data-slider-next]');
const sliderCurrentNumberSlide = sliderWrap.querySelector('[data-slider-current-slide]');
let currentSlide = 0;

function moveSlide(side) {
    if(side === 'prev') {
        if(currentSlide === 0) {
            currentSlide = sliderItems.length - 1;
        } else {
            currentSlide--;
        }
    } else {
        if(currentSlide === sliderItems.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
    }
    const widthSlide = sliderItems[0].clientWidth;
    sliderList.style.backgroundColor = 'red';
    sliderList.style.transform = `translateX(-${widthSlide * currentSlide}px)`;
    sliderCurrentNumberSlide.textContent = `0${currentSlide + 1}`;
}

sliderPrevBtn.addEventListener('click', () => moveSlide('prev'));
sliderNextBtn.addEventListener('click', () => moveSlide('next'));