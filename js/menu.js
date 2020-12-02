const menuBtn = document.querySelector('.menu-btn');
const menuPage = document.querySelector('#menu');
const menuList = document.querySelector('#menu-list');



let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuPage.classList.remove('open');
        menuList.classList.remove('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuPage.classList.add('open');
        menuList.classList.add('open');
        menuOpen = false;
    }
});