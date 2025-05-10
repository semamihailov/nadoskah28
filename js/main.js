'use strict';
$(function() {
    // // input masks
    $("#phone").mask("+7 (999) 999-99-99");

    // play buttons init
    initVideos(".about-video", ".about-video-play");

    function initVideos(videoClass, playButtonClass) {
        // Добавляем точки для селекторов классов
        $(videoClass).each(function () {
            let $video = $(this);
            // Находим соответствующую кнопку play для этого видео
            let $playButton = $video.siblings(playButtonClass);

            $playButton.on('click', function (e) {
                e.stopPropagation(); // Предотвращаем всплытие, чтобы не сработал клик по видео
                if ($video[0].paused) {
                    $video[0].play();
                    $playButton.hide();
                } else {
                    $video[0].pause();
                    $playButton.show();
                }
            });

            $video.on('click', function () {
                if ($video[0].paused) {
                    $video[0].play();
                    $playButton.hide();
                } else {
                    $video[0].pause();
                    $playButton.show();
                }
            });

            // Скрываем кнопку при завершении видео
            $video.on('ended', function () {
                $playButton.show();
            });
        });
    }

    // scroll
    $(".menu-item-link").on("click", function () {
        let get_id = $(this).attr("data-item");
        let target = $("#" + get_id).offset().top;
        $(" html, body").animate({scrollTop: target}, 800);
    });

    // carousels init
    let worksCarousel = $('.owl-carousel.works-carousel');
    worksCarousel.owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1.2,
                margin: 10,
                center: true,
            },
            480: {
                items: 2,
            },
            1024: {
                items: 4,
            }
        }
    })
    $(".works-carousel-next").on("click", function () {
        worksCarousel.trigger('next.owl.carousel', [600]);
    });
    $(".works-carousel-prev").on("click", function () {
        worksCarousel.trigger('prev.owl.carousel', [600]);
    });

    let commentsCarousel = $('.owl-carousel.comments-carousel');
    commentsCarousel.owlCarousel({
        loop: true,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 2000,
        // autoplayHoverPause: true,
        autoplaySpeed: 600,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1.2,
                margin: 10,
                center: true,
            },
            480: {
                items: 2,
            },
            1024: {
                items: 3,
            }
        }
    })

    // // common scripts
    // $("#current-year").text(new Date().getFullYear());

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
    // let worksCarousel = $('.owl-carousel.works-carousel');
    // worksCarousel.owlCarousel({
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
    // let worksCarouselNext = $("#works-carousel-next")
    // let worksCarouselPrev = $("#works-carousel-prev")
    //
    // worksCarouselNext.on("click", function () {
    //     worksCarousel.trigger('next.owl.carousel', [600]);
    // });
    // worksCarouselPrev.on("click",function () {
    //     worksCarousel.trigger('prev.owl.carousel', [600]);
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