
let line = document.querySelector('.slider__liner');//линия на которой храняться все файлы
let itemlengt = document.querySelector('.slider__item').clientWidth;//ширина файла

let i = 0
setInterval(function(){
    i++;
    if(itemlengt == 300) {
        if(i == 5){
            line.style.marginLeft = -(itemlengt) + 'px';//добавляем смещение на ширину файла
        }
        if(i == 10){
            line.style.marginLeft = -(itemlengt * 2) + 'px';
        }
        if(i == 15){
            line.style.marginLeft = -(itemlengt * 3) + 'px';
        }
        if(i == 20){
            line.style.marginLeft = -(itemlengt * 4) + 'px';
        }
        if(i == 25){
            line.style.marginLeft = 0;
            i = 0;
        }
    } else {
    if(i == 45){
        line.style.marginLeft = -(itemlengt) + 'px';//добавляем смещение на ширину файла
    }
    if(i == 90){
        line.style.marginLeft = -(itemlengt * 2) + 'px';
    }
    if(i == 135){
        line.style.marginLeft = -(itemlengt * 3) + 'px';
    }
    if(i == 180){
        line.style.marginLeft = -(itemlengt * 4) + 'px';
    }
    if(i == 225){
        line.style.marginLeft = 0;
        i = 0;
    }
    }
},1000);