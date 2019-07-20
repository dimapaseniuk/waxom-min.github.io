// Бургер крестик

var $hamburger = $(".hamburger");
   $hamburger.on("click", function(e) {
     $hamburger.toggleClass("is-active");
     // Do something else, like open/close menu
   });



// Бургер меню

   jQuery(document).ready(function($) {

   $('#btn-z').on('click', function () {

     $('#burger-menu').toggleClass('burger-menu');

   });

   $('#btn-clo').on('click', function () {

     $('#burger-menu').toggleClass('burger-menu');

   });

});
