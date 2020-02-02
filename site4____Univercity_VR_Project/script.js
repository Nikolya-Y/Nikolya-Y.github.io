$(document).ready(function(){
     $('.owl-carousel').owlCarousel({
          items:2,
          merge:true,
          loop:true,
          margin:10,
          video:true,
          center:true
      });
});


var pltime = player.getCurrentTime();

console.log(pltime);