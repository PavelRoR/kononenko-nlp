//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend owl.carousel.min.js
//@prepros-prepend jquery.fancybox.min.js


$(document).ready(function () {
    /* Работа формы */
    $(function () {
        var check = $('.check', this),
            email = $('.mail', this),
            message = $('.alert_message', this);
        $(".form_newsletter").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert_message', this),
                reNone = /.+/,
                button = $('.button_mail', this);
            if (!email.val().match(reNone)) {
                email.css('borderColor', 'red');
                message.text('Введите email').slideDown(500);
                email.css("borderColor", "red");
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css("color", "red");
                check.next().children().css("color", "red");
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                // button.text('Отправляем...');
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
            }
        });
        email.click(function () {
            email.css("borderColor", "rgb(255, 255, 255)");
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css("color", "rgba(0,0,0, 1)");
            check.next().children().css("color", "rgba(0,0,0, 1)");
            message.slideUp(500);
        });
    });
    /* Сертификаты */
    $('#certs_container').owlCarousel({
        // loop: true,
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