


/*мобильное меню */
let mobilmenu = document.querySelector('.header__mobilemenu');
let mobilmenulist = document.querySelector('.mobile__menu');

mobilmenu.addEventListener('click', function () {
    if(mobilmenu.classList.contains('mobilemenu__active')){
        mobilmenu.classList.remove('mobilemenu__active');
        mobilmenu.firstElementChild.nextElementSibling.classList.remove('mobilmenu__active_one');
        mobilmenu.lastElementChild.classList.remove('mobilmenu__active_two');
        mobilmenulist.classList.add('mobile__menu_hide');
        mobilmenulist.classList.remove('mobile__menu_active');
    }else {
        mobilmenu.classList.add('mobilemenu__active');
        mobilmenu.firstElementChild.nextElementSibling.classList.add('mobilmenu__active_one');
        mobilmenu.lastElementChild.classList.add('mobilmenu__active_two');
        mobilmenulist.classList.remove('mobile__menu_hide');
        mobilmenulist.classList.add('mobile__menu_active');
    }
});



