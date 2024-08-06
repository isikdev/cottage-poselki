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
});
