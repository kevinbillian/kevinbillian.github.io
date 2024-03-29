// Event onclick on links
$('.page-scroll').on('click', function(e){
    
    // get href content
    var tujuan = $(this).attr('href');
    
    // get element that correspond to href content
    var elementTujuan = $(tujuan);
    
    // Pindahkan scroll
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1250, 'swing');

    e.preventDefault();

});

// Parallax
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();


    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    // Portfolio
    if (wScroll > $('.portfolio').offset().top-250){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }
});

