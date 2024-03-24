document.addEventListener( 'DOMContentLoaded', function () {
  const mainCarousel = new Splide( '#main-carousel', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
    autoplay: true,
    speed: 1000,
    drag: false,
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