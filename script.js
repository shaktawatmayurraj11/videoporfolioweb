
const video = document.querySelector('.page2 video');
let currentZoomFactor = 1; 
const maxZoomFactor = 3;
const minZoomFactor = 0.5; 
const zoomStep = 0.1; 

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const zoomFactor = 1 + (scrollY / scrollHeight) * (maxZoomFactor - 1);

    if (zoomFactor > currentZoomFactor && currentZoomFactor < maxZoomFactor) {
        currentZoomFactor += zoomStep;
        video.style.transform = `scale(${currentZoomFactor})`;
    } 
    else if (zoomFactor < currentZoomFactor && currentZoomFactor > minZoomFactor) {
        currentZoomFactor -= zoomStep;
        video.style.transform = `scale(${currentZoomFactor})`;
    }
});

