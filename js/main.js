 
$(document).ready(function(){

    $(".gaa_slider_aree").owlCarousel({
      autoplay: true,
      //   slideSpeed: 3000,
      loop: true,
      autoplayTimeout: 2000,
      autoplaySpeed: 1500,
      smartSpeed: 1500,
      lazyLoad: true,
      margin: 20,
      dots: false,
      nav: true,
      rtl: true,
      center: true,
      items: 1,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
      responsive: {
        320: {
          items: 1,
        },
        767: {
          items: 2,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
})
$(document).ready(function(){

    $(".tes_slider_aree").owlCarousel({
      autoplay: true,
      //   slideSpeed: 3000,
      loop: true,
      autoplayTimeout: 2000,
      autoplaySpeed: 1500,
      smartSpeed: 1500,
      lazyLoad: true,
      margin: 15,
      dots: false,
      nav: true,
      rtl: true,
      center: true,
      items: 3,
      navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
      ],
      responsive: {
        320: {
          items: 1,
        },
        767: {
          items: 2,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 1,
        },
      },
    });
})

//ratyo
$(function () {
  $(".rateYo").rateYo({
    numStars: 5,
    rating: 2,
    spacing: "10px",
    starWidth: "15px",
    multiColor: {
      startColor: "#F77c03", //RED
      endColor: "#FF0000", //GREEN
    },
  });
});
$(function () {
  $(".rateYo-form").rateYo({
    numStars: 5,
    rating: 2,
    spacing: "10px",
    starWidth: "15px",
    multiColor: {
      startColor: "#F77c03", //RED
      endColor: "#FF0000", //GREEN
    },
  });
});
    
let lod = document.querySelector(".loader");
window.onload=function () {
  $(".loader"). fadeOut(4000);
}