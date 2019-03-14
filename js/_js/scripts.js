//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend owl.carousel.min.js
//@prepros-prepend jquery.fancybox.min.js


$(document).ready(function() {
    /* Сертификаты */
	$('#certs_container').owlCarousel({
        // loop:true,
        margin:20,
        nav:true,
        navText: ["<", ">"],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
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
/*Конец документа*/
});