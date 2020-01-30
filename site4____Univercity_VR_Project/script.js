// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });


// $('.owl-carousel').owlCarousel({
//     items:1,
//     merge:true,
//     loop:true,
//     margin:10,
//     video:true,
//     lazyLoad:true,
//     center:true,
//     responsive:{
//         480:{
//             items:2
//         },
//         600:{
//             items:4
//         }
//     }
// })



// скрипт управления видео

// // загрузка видео по йди с определённой секунды и в каком-то там качестве
// loadVideoById("bHQqvYy5KYo", 5, "large");
// //запуск видео и уже с секунды указанной выше
// player.playVideo():Void;



//считываение кнопок управления перелистыванимем видео
function myFunc (ev)
{
var e = window.event || ev, K = e.keyCode;
     if (K == 37) alert ('Нажата ЛЕВАЯ стрелка');
else if (K == 39) alert ('Нажата ПРАВАЯ стрелка');
}

