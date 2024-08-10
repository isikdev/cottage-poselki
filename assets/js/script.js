$(document).ready(function () {
    var $bankInner = $('.feedback__bank-inner');
    var $bankWrapper = $('.feedback__bank-wrapper');

    $bankInner.each(function () {
        $(this).append($(this).html());
    });

    var originalWidth = $bankInner.width() / 2;

    function animateBankInner() {
        $bankInner.animate({ marginLeft: -originalWidth }, {
            duration: 10000,
            easing: 'linear',
            complete: function () {
                $bankInner.css('marginLeft', '0');
                animateBankInner();
            }
        });
    }

    animateBankInner();

    // страница Каталог Домов
    var $wrapper = $('.progress__wrapper');
    var $cards = $('.progress__card');
    var cardWidth = $cards.outerWidth(true); // Включает margin

    $wrapper.on('wheel', function (e) {
        e.preventDefault(); // Отменяем стандартную прокрутку
        if (e.originalEvent.deltaY > 0) { // Прокрутка вправо
            $wrapper.scrollLeft($wrapper.scrollLeft() + cardWidth);
        } else { // Прокрутка влево
            $wrapper.scrollLeft($wrapper.scrollLeft() - cardWidth);
        }
    });
});
