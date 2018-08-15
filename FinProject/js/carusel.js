
$(function(){
    let slide;
    $(".arrowPrev, .arrowNext").css("display", "none");
    function autoleft() {
        $(".arrowNext").click();
        slide = setTimeout(autoleft, 5000);
    }
    slide = setTimeout(autoleft, 5000);

    $('.carousel').on('mouseenter', function () {
        clearTimeout(slide);
        $(".arrowPrev, .arrowNext").css("display", "block");
    });
    $('.carousel').on('mouseleave', function () {
        slide = setTimeout(autoleft, 5000);
        $(".arrowPrev, .arrowNext").css("display", "none");
    });

    let width = 440; // ширина изображения с отступами
    let count = 3; // количество изображений

    let carousel = document.getElementById('carousel');
    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // текущий сдвиг влево

    carousel.querySelector('.arrowPrev').onclick = function() {
        // сдвиг влево
        // последнее передвижение влево может быть на 3, на 2 или 1 элемент
        position = Math.min(position + width * count, 0)
        list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.arrowNext').onclick = function() {
        // сдвиг вправо
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position - width * count, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };
});


