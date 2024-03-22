import  Splide from "./../../../node_modules/@splidejs/splide/dist/js/splide.js"

document.addEventListener( 'DOMContentLoaded', function () {
  const main = new Splide( '#main-carousel', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
    autoplay: true,
    speed: 1000,
  } )

  const thumbnails = new Splide( '#thumbnail-carousel', {
    type: 'loop',
    perPage: 5,
		gap: 8,
		rewind: true,
		pagination: false,
    isNavigation: true,
  } )

  main.sync( thumbnails )
  main.mount()
  thumbnails.mount()
} );