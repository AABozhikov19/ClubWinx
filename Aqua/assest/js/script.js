let header = document.getElementById('header');
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let forest = document.getElementById('forest');
// let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    header.style.top = value * 0.5 + 'px';
    text.style.top = 50 + value * -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    forest.style.top = value * 0.25 + 'px';
    // btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
})