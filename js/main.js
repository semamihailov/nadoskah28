'use strict';
$(function() {
    // play buttons init
    initVideos(".about-video",".about-video-play");
    function initVideos(videoClass, playButtonClass) {
        // Добавляем точки для селекторов классов
        $(videoClass).each(function() {
            let $video = $(this);
            // Находим соответствующую кнопку play для этого видео
            let $playButton = $video.siblings(playButtonClass);

            $playButton.on('click', function(e) {
                e.stopPropagation(); // Предотвращаем всплытие, чтобы не сработал клик по видео
                if ($video[0].paused) {
                    $video[0].play();
                    $playButton.hide();
                } else {
                    $video[0].pause();
                    $playButton.show();
                }
            });

            $video.on('click', function() {
                if ($video[0].paused) {
                    $video[0].play();
                    $playButton.hide();
                } else {
                    $video[0].pause();
                    $playButton.show();
                }
            });

            // Скрываем кнопку при завершении видео
            $video.on('ended', function() {
                $playButton.show();
            });
        });
    }

    // // common scripts
    // $("#current-year").text(new Date().getFullYear());
    //
    // // input masks
    // $("#tel").mask("+7 (999) 999-99-99");
    // $("#tel2").mask("+7 (999) 999-99-99");
    //
    // // scroll
    // $(".menu-item-link").on("click", function() {
    //     let get_id = $(this).attr("data-item");
    //     let target = $("#"+get_id).offset().top - 80;
    //     $(" html, body").animate({scrollTop: target}, 800);
    // });
    // $(".button").on("click", function() {
    //     let get_id = $(this).attr("data-item");
    //     let target = $("#"+get_id).offset().top - 80;
    //     $(" html, body").animate({scrollTop: target}, 800);
    // });
    //
    // // menu burger
    // let menu = $(".menu");
    // $("#open-menu").on("click", function () {
    //     menu.addClass("active");
    // })
    // $(".close-menu").on("click", function () {
    //     menu.removeClass("active");
    // })
    // $("body").on("click", function (e) {
    //     if (!$(e.target).closest(".menu, .open-menu").length) {
    //         menu.removeClass("active");
    //     }
    // });
    //
    // // carousels init
    // let risksCarousel = $('.owl-carousel.risks-carousel');
    // risksCarousel.owlCarousel({
    //     loop:false,
    //     margin: 24,
    //     nav:false,
    //     dots: false,
    //     responsive : {
    //         0: {
    //             items:1,
    //         },
    //         1024: {
    //             items:3,
    //         }
    //     }
    // })
    // let risksCarouselNext = $("#risks-carousel-next")
    // let risksCarouselPrev = $("#risks-carousel-prev")
    //
    // risksCarouselNext.on("click", function () {
    //     risksCarousel.trigger('next.owl.carousel', [600]);
    // });
    // risksCarouselPrev.on("click",function () {
    //     risksCarousel.trigger('prev.owl.carousel', [600]);
    // });
    // contact form 7

    // document.addEventListener( 'wpcf7mailsent', function( event ) {
    //     console.log("Contact form sent. ID:", event.detail.contactFormId);
    //     if(event.detail.contactFormId=="8"){ // основная форма
    //         $(".contacts-form-wrapper .wpcf7-form").hide();
    //         $(".contacts-form-wrapper-text").show();
    //
    //         // Меняем URL, но оставляем пользователя на странице
    //         window.history.pushState({}, '', '/thank-you');
    //     }
    //     if(event.detail.contactFormId=="15"){ // тг телефон форма
    //         $(".tg-form-modal").removeClass("active");
    //         localStorage.setItem('sendPhone', 'true');
    //         window.location.href='https://t.me/Proflipper1';
    //     }
    // }, false );
    //
    // if (localStorage.getItem("sendPhone") === "true"){
    //     $("#open-tg-form").attr("href", "https://t.me/Proflipper1");
    // }else{
    //     $("#open-tg-form").on("click", function () {
    //         $(".tg-form-modal").addClass("active");
    //     })
    //     $(".tg-form-modal-close").on("click", function () {
    //         $(".tg-form-modal").removeClass("active");
    //     })
    // }
})