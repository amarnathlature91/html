/* owl*/

var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 4,
  loop: true,
  dots: true,
  margin: 50,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});