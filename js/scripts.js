// index - this store image - gallery
$(document).ready(function() {
    var width = 460;
    var height = 350;
    var count = $('div.this-store-image').length;

    $('div.slider').css({
        position: 'relative',
        overflow: 'hidden',
        width: width,
        height: height
    }).find('.this-image-container').css({
        position: 'absolute',
        width: width * count,
        overflow: 'hidden'
    }).find('.this-store-image').css({
        width: width,
        height: height,
        float: 'left'
    })
});

$(document).ready(function() {
    var currentPage = 0;
    var count = $('div.this-store-image').length;
    var width = 460;
    var changePage = function(){
        $('div.slider > .this-image-container').animate({
            left: -currentPage * width
        }, 460);
    };

    $('#this-left-button').click(function(){
        if (currentPage > 0) {
            currentPage = currentPage - 1;
            changePage();
        }
    });
    $('#this-right-button').click(function(){
        if (currentPage < count - 1) {
            currentPage = currentPage + 1;
            changePage();
        }
    });
});

// index - next store image - gallery
$(document).ready(function() {
    var width = 460;
    var height = 350;
    var count = $('div.next-store-image').length;

    $('div.slider').css({
        position: 'relative',
        overflow: 'hidden',
        width: width,
        height: height
    }).find('.next-image-container').css({
        position: 'absolute',
        width: width * count,
        overflow: 'hidden'
    }).find('.next-store-image').css({
        width: width,
        height: height,
        float: 'left'
    })
});

$(document).ready(function() {
    var currentPage = 0;
    var count = $('div.next-store-image').length;
    var width = 460;
    var changePage = function(){
        $('div.slider > .next-image-container').animate({
            left: -currentPage * width
        }, 460);
    };

    $('#next-left-button').click(function(){
        if (currentPage > 0) {
            currentPage = currentPage - 1;
            changePage();
        }
    });
    $('#next-right-button').click(function(){
        if (currentPage < count - 1) {
            currentPage = currentPage + 1;
            changePage();
        }
    });
});

// nav - product - dropdown
$(document).ready(function(){
    $('.menu-title:contains("상품")').mouseenter(function(){
        $('.inner-menu').css('display', 'block');
        $('.menu-title:contains("상품")').css('color', 'white');
    });
    $('.inner-menu').mouseenter(function(){
        $('.inner-menu').css('display', 'block');
        $('.menu-title:contains("상품")').css('color', 'white');
    });
    $('.inner-menu, .menu-title:contains("상품")').mouseleave(function(){
        $('.inner-menu').css('display', 'none');
        $('.menu-title:contains("상품")').css('color', 'black');
    });
});

// product - card - background
$(document).ready(function(){
    $('.product3').mouseenter(function(){
        $('.gradient-product3').css('background', 'url("./img/logo_text2.jpg") no-repeat');
        $('.text-product3 > h1, .text-product3 > p').css('color', 'black');
    });
    $('.product3').mouseleave(function(){
        $('.gradient-product3').css('background', 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))');
        $('.text-product3 > h1, .text-product3 > p').css('color', 'white');
    });
    $('.product2').mouseenter(function(){
        $('.gradient-product2').css('background', 'url("./img/logo_text2.jpg") no-repeat');
        $('.text-product2 > h1, .text-product2 > p').css('color', 'black');
    });
    $('.product2').mouseleave(function(){
        $('.gradient-product2').css('background', 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))');
        $('.text-product2 > h1, .text-product2 > p').css('color', 'white');
    });
    $('.product1').mouseenter(function(){
        $('.gradient-product1').css('background', 'url("./img/logo_text2.jpg") no-repeat');
        $('.text-product1 > h1, .text-product1 > p').css('color', 'black');
    });
    $('.product1').mouseleave(function(){
        $('.gradient-product1').css('background', 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))');
        $('.text-product1 > h1, .text-product1 > p').css('color', 'white');
    });
    $('.product-goods').mouseenter(function(){
        $('.gradient-product-goods').css('background', 'url("./img/logo_text2.jpg") no-repeat');
        $('.text-product-goods > h1, .text-product-goods > p').css('color', 'black');
    });
    $('.product-goods').mouseleave(function(){
        $('.gradient-product-goods').css('background', 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))');
        $('.text-product-goods > h1, .text-product-goods > p').css('color', 'white');
    });
});

// story - more - click
$(document).ready(function(){
    $('.more-definition1').click(function(){
        $('.more-definition1-img').css('display', 'block');
    });
    $('.more-definition1-img').click(function(){
        $('.more-definition1-img').css('display', 'none');
    });
    $('.more-definition2').click(function(){
        $('.more-definition2-img').css('display', 'block');
    });
    $('.more-definition2-img').click(function(){
        $('.more-definition2-img').css('display', 'none');
    });
    $('.more-problem1').click(function(){
        $('.more-problem1-img').css('display', 'block');
    });
    $('.more-problem1-img').click(function(){
        $('.more-problem1-img').css('display', 'none');
    });
    $('.more-problem2').click(function(){
        $('.more-problem2-img').css('display', 'block');
    });
    $('.more-problem2-img').click(function(){
        $('.more-problem2-img').css('display', 'none');
    });
});

// products - components - more
$(document).ready(function(){
    $('.component').hide();
    $('.components-more').click(function(){
        $('.component').slideToggle('slow');
        $('.components-more').hide();
    });
});
$(document).ready(function(){
    $('.components-more-close').click(function(){
        $('.component').slideToggle('slow');
        $('.components-more').show();
    });
});