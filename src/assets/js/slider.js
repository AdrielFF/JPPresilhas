let clipCarousel

document.addEventListener( 'DOMContentLoaded', function () {

  clipCarousel = new Splide( '#clip-carousel', {
    type      : 'fade',
    rewind    : true,
    pagination: true,
    arrows    : false,
    autoplay: true,
    speed: 1000,
    interval: 3000,
    lazyLoad: "nearby",
  } )

  const mainCarousel = new Splide( '#main-carousel', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
    autoplay: true,
    speed: 1000,
    drag: false,
    lazyLoad: "nearby",
    breakpoints: {
      664: {
        drag: true,
      }
    },
  } )

  const thumbnailsCarousel = new Splide( '#thumbnail-carousel', {
    type: 'loop',
    perPage: 5,
		gap: 8,
		rewind: true,
		pagination: false,
    isNavigation: true,
    drag: false,
    lazyLoad: "nearby",
    breakpoints: {
      664: {
        drag: true,
        perPage: 4
      }
    },
  } )

  mainCarousel.sync( thumbnailsCarousel )
  mainCarousel.mount()
  thumbnailsCarousel.mount()
} );

export { clipCarousel }