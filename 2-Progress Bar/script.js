const progress = document.getElementById('progress');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circle.length) {
        currentActive = circle.length;
    }
})