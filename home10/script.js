const menuActive = document.querySelector('.menu-active');
const stripes = document.querySelector('.user-list_item-menu');

function menu () {
    menuActive.classList.toggle('hidden');
}
stripes.addEventListener('click', menu);
