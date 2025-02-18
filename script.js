//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentActive = 0;

nextButton.addEventListener('click', () => {
    if (currentActive < circles.length - 1) {
        currentActive++;
        updateProgress();
    }
});

prevButton.addEventListener('click', () => {
    if (currentActive > 0) {
        currentActive--;
        updateProgress();
    }
});

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive + 1) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const progressLine = document.querySelector('.progress-line');
    const activeCircles = currentActive + 1; // +1 because index starts at 0
    const totalCircles = circles.length;
    progressLine.style.width = (activeCircles / totalCircles) * 100 + '%';

    // Enable/disable buttons
    prevButton.disabled = currentActive === 0;
    nextButton.disabled = currentActive === totalCircles - 1;
}

// Initial setup
updateProgress();