

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20 ){
            $('.navbar').addClass('sticky');

        }
        else{
            $('.navbar').removeClass('sticky');

        }if(this.scrollY > 400 ){
            $('.scroll_up_btn').addClass('show');
    
        }else{
            $('.scroll_up_btn').removeClass('show');
    
        }

    })

    

});


    //typed js
    var typed = new Typed('.typing', {
        strings: ["I'm a Designer", "I'm a Developer","I'm a Bloger","I'm a Freelancer","I'm a Youtuber"],
        typeSpeed: 100,
        backSpeed:60,
        loop:true
      });
      var typed = new Typed('.typing_2', {
        strings: ["I'm a Designer", "I'm a Developer","I'm a Bloger","I'm a Freelancer","I'm a Youtuber"],
        typeSpeed: 100,
        backSpeed:60,
        loop:true
      });




//slide 
$('.scroll_up_btn').click(function(){

$('html').animate({scrollTop:0});


});


    //humberMenu js
    $('.humbergerMenu').click(function(){
        $('.navbar .menu').toggleClass('showMenu');
        $('.humbergerMenu i').toggleClass('fa-times');
    })


//owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplaySpeed:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

//mixitup
var mixer = mixitup('.mixitUp');

//wow js
 new WOW().init();


