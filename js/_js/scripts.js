//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend owl.carousel.min.js
//@prepros-prepend jquery.fancybox.min.js


$(document).ready(function () {
    /* Сертификаты */
    $('#certs_container').owlCarousel({
        loop:true,
        margin: 20,
        nav: true,
        navText: ["<", ">"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    /*Fancybox*/
    $(function () {
        $("[data-fancybox]").fancybox({
            speed: 330,
            opacity: "auto",
            closeBtn: !0
        });
    });
    $(function () {
        $('#text_revs').owlCarousel({
            // loop: true,
            margin: 20,
            nav: true,
            navText: ["<", ">"],
            dots: false,
            items: 1
        });
    });
    $(function () {
        $('#video_revs').owlCarousel({
            // loop: true,
            margin: 20,
            nav: true,
            navText: ["<", ">"],
            dots: false,
            items: 2,
            responsive: {
                0: {
                    items: 1
                },
                481: {
                    items: 2
                }
            }
        });
    });
    $(function () {
        /* Видео */
        $(".video_wrapper img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>')
        });
    });
    /*Конец документа*/
});