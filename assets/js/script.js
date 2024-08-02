$(document).ready(function () {
    var $bankInner = $('.feedback__bank-inner');
    var $bankWrapper = $('.feedback__bank-wrapper');

    // Clone the content of .feedback__bank-inner to simulate infinite scroll
    $bankInner.each(function () {
        $(this).append($(this).html());
    });

    // Adjust the animation duration based on the container width
    var originalWidth = $bankInner.width() / 2; // Since we duplicated the content
    var duration = (originalWidth / 30) + 's'; // Adjust speed as needed
    $bankInner.css('animation-duration', duration);
});
