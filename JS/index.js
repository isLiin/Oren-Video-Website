
  "use strict";


$('.title-theme').on('click', function () {
    $('.theme').toggleClass('theme-dark')
    $('.logo').toggleClass('hide-logo');
})

// Load file Category to Index
$('.navigation-categories').on('click', function () {
    $('.content-main').html("");
    $('.content-main').load('HTML/Category.html');
})

// search list category

$('.signin').on('click', function(){
    // $('.content-main').html("");
    $('.content-main').load('HTML/boxSignin.html');
})