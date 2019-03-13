$( document ).ready(function() {
    $(".first-hidden").each(function(){
        console.log(this);
        $(this).addClass("reveal");
    })
});


let listElement = $(".hidden");
$(window).scroll(function(){
    let scrolling = $(window).scrollTop();
    listElement.each(function(i, element){
        let elementOffset = $(element).offset().top;
        if(scrolling > elementOffset - $(window).height() + 100){
            $(element).addClass("reveal");
        }
    })  
})









// burger
//let myBurger = document.querySelector(".bubble");
//let myMenu = document.querySelector(".menu-burger");
//
//myBurger.addEventListener("click", function () {
//    myBurger.classList.toggle("white-bubble");
//    myMenu.classList.toggle("active");
//});


// onglets
//$(".tabs").each(function(){
//    $(".tabs").click(function() {
//        $(".tabs").removeClass("bold");
//        $(this).addClass("bold");
//    });
//});

// au clic sur .project > addClass hidden sur .projects-section
// removeClass hidden sur .single-project-section

//$(".project").each(function(){
//    $(".project").click(function() {
//        $(this).parent(".section-flex").parent(".projects-section").parent(".contenu-graphic").addClass("hidden")
//        $(this).parent(".section-flex").parent(".projects-section").parent(".contenu-graphic").siblings(".contenu-project").removeClass("hidden")
//    });
//});
/// CE PROJET 8

// reveal sur la premiere page
//let windowHeight = $(window).height();
//
//function apparait () {
//  $(".animate-window").each(function() {
//    let fromTop = $(this).offset().top;
//    let windowScroll = $(window).scrollTop();
//    if ((windowScroll + (windowHeight - 200)) >= fromTop) {
//      $(this).addClass('reveal');
//    }
//  });
//}
//apparait();
//$(window).on('scroll', function() {
//  apparait();
//})

// reveal au clic
//$(".section").each(function(){
//    $(".tabs, .project").click(function() {
//        $(".animate-clic").removeClass('reveal');
//        let windowHeight = $(window).height();
//        function reveal () {
//        $(".animate-clic").each(function() {
//          let fromTop = $(this).offset().top;
//          let windowScroll = $(window).scrollTop();
//          if ((windowScroll + (windowHeight - 100)) >= fromTop) {
//            $(this).addClass('reveal');
//          }
//        });
//      }
//      reveal();
//      $(window).on('scroll', function() {
//        reveal();
//      })  
//    });
//});


// classe active lorsque burger cliqué 

//let myBurger = document.querySelector(".burger");
//let myMenu = document.querySelector(".menu");
//
//myBurger.addEventListener("click", function () {
//    myBurger.classList.toggle("active");
//    myMenu.classList.toggle("active");
//});

//toggle remplace le add pour ajouter OU enlever en fonction si elle est déja presente ou pas
// soit lancé une fonction au clic function (){ soit remplacé par () =>{ 












// text effect

// document.addEventListener('DOMContentLoaded',function(event){
//   // array with texts to type in typewriter
//   var dataText = [ "Front-end developer and graphic designer based in Brussels."];
  
//   // type one text in the typwriter
//   // keeps calling itself until the text is finished
//   function typeWriter(text, i, fnCallback) {
//     // chekc if text isn't finished yet
//     if (i < (text.length)) {
//       // add next character to h1
//      document.querySelector(".title-effect").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

//       // wait for a while and call this function again for next character
//       setTimeout(function() {
//         typeWriter(text, i + 1, fnCallback)
//       }, 60);
//     }
//     // text finished, call callback if there is a callback function
//     else if (typeof fnCallback == 'function') {
//       // call callback after timeout
//       setTimeout(fnCallback, 1000);
//     }
//   }
//   // start a typewriter animation for a text in the dataText array
//    function StartTextAnimation(i) {
//      if (typeof dataText[i] == 'undefined'){
//         setTimeout(function() {
//           StartTextAnimation(0);
//         }, 10000);
//      }
//      // check if dataText[i] exists
//     if (i < dataText[i].length) {
//       // text exists! start typewriter animation
//      typeWriter(dataText[i], 0, function(){
//        // after callback (and whole text has been animated), start next text
//        StartTextAnimation(i + 1);
//      });
//     }
//   }
//   // start the text animation
//   StartTextAnimation(0);
// });