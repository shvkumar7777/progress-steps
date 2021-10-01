const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const progressBar = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

//update the DPM
function updateDOM() {
    //update the circle colour with the help of circle class
    circles.forEach((circle,index) => {
        if (currentActive > index) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    //update the progress bar

    //update the button status
}

//event listeners
let currentActive = 1;
nextButton.addEventListener('click', () => {
    currentActive++;
    if (currentActive == circles.length) {
        currentActive = circles.length;
    }
    updateDOM();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    if (currentActive == 1) {
        currentActive = 1;
    }

})