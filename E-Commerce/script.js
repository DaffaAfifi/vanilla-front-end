// navbar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// single product image slider
const mainImg = document.getElementById('mainImg');
const smallImg = document.getElementsByClassName('small-img');

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].addEventListener('click', () => {
        mainImg.setAttribute('src', `img/products/f${i+1}.jpg`);
    })
}