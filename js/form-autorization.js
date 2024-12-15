

let autorizationbody = document.querySelector('.autorization');//окно авторизации
let autorizationform = document.querySelector('.autorization__wrapper');//окно формы авторизации
let registredbody = document.querySelector('.autorization__registration');//окно регистрации



let autorization = document.querySelector('.close');//закрыть форму авторизации
let btnopen = document.querySelector('.header__authorization');//открыть форму авторизации
let btnmobopen = document.querySelector('.mobile__autorization');//открыть форму авторизации моб версияы
let btncloseregistration = document.querySelector('.close_registration');//закрыть окно регистрации



let btnregistred = document.querySelectorAll('.registred');//кнопка открыть форму регистрации
for(let i = 0; i < btnregistred.length; i++) {
    btnregistred[i].addEventListener('click', function() {
        if(i == 2) {
            autorizationform.style.display = 'none';
            autorizationbody.classList.add('autorization__active');
            registredbody.classList.add('registration__active');
            registredbody.style.display = 'block';
        }else {
        autorizationbody.classList.add('autorization__active');
        registredbody.classList.add('registration__active');
        registredbody.style.display = 'block';
        }
    });
}




autorization.addEventListener('click', function() {
    autorizationbody.classList.remove('autorization__active');
    autorizationform.style.display = 'none';
});

btnopen.addEventListener('click', function() {
    autorizationbody.classList.add('autorization__active');
    autorizationform.style.display = 'block';
});

btnmobopen.addEventListener('click', function() {
    autorizationbody.classList.add('autorization__active');
    autorizationform.style.display = 'block';
});


btncloseregistration.addEventListener('click', function() {
    autorizationbody.classList.remove('autorization__active');
    registredbody.classList.remove('registration__active');
    registredbody.style.display = 'none';
});


let forgotpass = document.querySelector('.forgotpass');//забыли пароль кнопка

forgotpass.addEventListener('click', function() {
    autorizationbody.classList.add('autorization__active');
    forgot__pass.style.display = 'block';
});

let close_forgot = document.querySelector('.close_forgot');//закрыть окно забыл пароль
let forgot__pass = document.querySelector('.forgot__pass');//окно забыл пароль

close_forgot.addEventListener('click', function() {
    autorizationbody.classList.remove('autorization__active');
    forgot__pass.style.display = 'none';
    autorizationform.style.display = 'none';
});

let autorizaton_btn = document.querySelector('.autorizaton_btn');

autorizaton_btn.addEventListener('click', function() {
    forgot__pass.style.display = 'none';
    autorizationform.style.display = 'block';
});


// форма обратной связи

let helpopen = document.querySelectorAll('.header__help');
let helpclose = document.querySelector('.close_feedback');
let helpwindow = document.querySelector('.feedback');

for (let el of helpopen) {
el.addEventListener('click', function() {
    helpwindow.style.display = 'block';
    autorizationbody.classList.add('autorization__active');
});
}

helpclose.addEventListener('click', function () {
    helpwindow.style.display = 'none';
    autorizationbody.classList.remove('autorization__active');
});


//тестовый пользователь
let user = [{name: 'Ivan', surename: 'Ivanov', nikname: 'Ivan333', email: 'ivan@ivan.com', password: '12345'}];//для примера

//тестовый пользователь
let auth = false;

let containerwidth = document.querySelector('.container').clientWidth;
let nav = document.querySelector('nav');
let mobnav = document.querySelector('.mobile__menu ');


let testuser = document.querySelector('.testuser');

testuser.addEventListener('click', function() {
    if(auth == false) {
        btnmobopen.remove();
        btnopen.remove();
        btnregistred[0].remove();
        btnregistred[1].remove();
        auth = true;

        
        creatusermenu('header__user', "./img/users/user.png", 'user', user[0].name, 'userexite', 'Выход', containerwidth);

        document.querySelector('.userexite').addEventListener('click', function() {
            window.location.reload();
        });

    } else {
        window.location.reload();
    }


});



function creatusermenu ( parm1, parm2, parm3, param4, param5, param6, param7 ) {
    let div = document.createElement('div');
    div.classList.add(parm1);

    let img = document.createElement('img');
    img.src = parm2;
    img.alt = parm3;
    div.append(img);

    let supdiv = document.createElement('div');

    let phello = document.createElement('p');
    phello.innerHTML = 'Привет ' + param4;
    supdiv.append(phello);

    let pexite = document.createElement('p');
    pexite.classList.add(param5);
    pexite.innerHTML = param6;
    supdiv.append(pexite);

    div.append(supdiv);

    if(param7 == 320) {
        mobnav.append(div);
    }else {
        nav.append(div);
    }
}




//лайк дислайк

let like = document.querySelector('.like__dislike div img');
let dislike = document.querySelector('.rotate');

let nums = document.querySelectorAll('.like__dislike div span');


addlikedislike(like);
addlikedislike(dislike);

function addlikedislike (param) {
    param.addEventListener('click', function() {
        if(auth == true) {
            if(param == like) {
                nums[0].innerHTML = 1;
                nums[1].innerHTML = 0;
            }
            if(param == dislike) {
                nums[0].innerHTML = 0;
                nums[1].innerHTML = 1;
            }
        }
    });
}