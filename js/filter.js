/** filter */
let filter = document.querySelector('.filter__wrapper div');
let filtermenu = document.querySelector('.filter__menu');//блок меню фильтра

filter.addEventListener('click', function() {
    if(filtermenu.classList.contains('menu__hide')){
        filtermenu.classList.remove('menu__hide');
        filtermenu.classList.add('menu__show');
    }else {
        filtermenu.classList.add('menu__hide');
        filtermenu.classList.remove('menu__show');
    }
});





