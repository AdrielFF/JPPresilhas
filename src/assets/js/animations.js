import { clipCarousel } from './slider.js'

document.addEventListener( 'DOMContentLoaded', function () { 

  const animatedEl = document.querySelectorAll(".animated")

  let observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.target.classList.contains("title")) {
          entry.target.classList.toggle("fadeInDown", entry.isIntersecting)
        }
        if (entry.target.classList.contains("about-carousel")) {
          entry.target.classList.toggle("zoomIn", entry.isIntersecting)
          if(entry.isIntersecting) { 
            clipCarousel.mount()
          }
        }
        if (entry.target.classList.contains("left")) {
          entry.target.classList.toggle("slideInLeft", entry.isIntersecting)
          entry.target.classList.toggle("show-arrow", entry.isIntersecting)
        }
        if (entry.target.classList.contains("right")) {
          entry.target.classList.toggle("slideInRight", entry.isIntersecting)
          entry.target.classList.toggle("show-arrow", entry.isIntersecting)
        }
        if (entry.target.classList.contains("main-carousel")) {
          entry.target.classList.toggle("slideInLeft", entry.isIntersecting)
        }
        if (entry.target.classList.contains("thumbnail-wrapper")) {
          entry.target.classList.toggle("fadeIn", entry.isIntersecting)
        }
        if (entry.target.classList.contains("secondary-carousel__image")) {
          entry.target.classList.toggle("slideInLeft",  entry.isIntersecting)
          if(entry.isIntersecting) {
            setTimeout(function() {
              document.querySelectorAll('.secondary-carousel__image').forEach(function(el) {
                $(el).removeClass("animated")
              })
              $('#thumbnail-carousel ').css('pointer-events', 'all')
              $('.thumbnail-wrapper ').css('cursor', 'initial')
            }, 2000)
          }
        }
        if (entry.target.classList.contains("contact__card")) {
          entry.target.classList.toggle("zoomIn", entry.isIntersecting)
        }

        if(entry.isIntersecting) observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0,
    }
  )

  animatedEl.forEach(el =>  {
    observer.observe(el)
  })

})
