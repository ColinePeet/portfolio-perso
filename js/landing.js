// landing
$( document ).ready(function() {
    $(".landing-bg").addClass("landing-scale");
  });
  
  
  
  
  // Wrap every letter in a span
  $('.ml13').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: false})
    .add({
      targets: '.ml13 .letter',
      translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 800,
      delay: function(el, i) {
        return 300 + 30 * i;
      }
    }).add({
      targets: '.ml13 .letter',
      translateY: [0,-100],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 600,
      delay: function(el, i) {
        return 100 + 30 * i;
      }
    });