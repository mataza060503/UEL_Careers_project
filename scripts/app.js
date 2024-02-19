$(document).ready(function(){
    $(".timviec2-container").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:
            `<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
    });
    $('.sukien1-container').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplaySpeed: 1000,
        infinite: true,
    });
    $('.sukien3-container').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        
    });
    $('.sukien4-container').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,

    });
    $('.ctyhangdau5-container').slick({
        slidesToShow: 2,
        infinite: true,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back"></ion-icon></button>`,
    });
    $('.cungnhinlai-container').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back"></ion-icon></button>`,
    });
    $('.cungnhinlai2-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back"></ion-icon></button>`,
    });
});
$(document).ready(function(){
    
});