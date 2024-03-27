import { clipCarousel } from './slider.js'

document.addEventListener( 'DOMContentLoaded', function () { 

  const animatedEl = document.querySelectorAll(".animate__animated")

  let observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.target.classList.contains("title")) {
          entry.target.classList.toggle("animate__fadeInDown", entry.isIntersecting)
        }
        if (entry.target.classList.contains("about-carousel")) {
          entry.target.classList.toggle("animate__zoomIn", entry.isIntersecting)
          if(entry.isIntersecting) { 
            clipCarousel.mount()
          }
        }
        if (entry.target.classList.contains("left")) {
          entry.target.classList.toggle("animate__slideInLeft", entry.isIntersecting)
          entry.target.classList.toggle("show-arrow", entry.isIntersecting)
        }
        if (entry.target.classList.contains("right")) {
          entry.target.classList.toggle("animate__slideInRight", entry.isIntersecting)
          entry.target.classList.toggle("show-arrow", entry.isIntersecting)
        }
        if (entry.target.classList.contains("main-carousel")) {
          entry.target.classList.toggle("animate__slideInLeft", entry.isIntersecting)
        }
        if (entry.target.classList.contains("thumbnail-wrapper")) {
          entry.target.classList.toggle("animate__fadeIn", entry.isIntersecting)
        }
        if (entry.target.classList.contains("secondary-carousel__image")) {
          entry.target.classList.toggle("animate__slideInLeft",  entry.isIntersecting)
          if(entry.isIntersecting) {
            setTimeout(function() {
              document.querySelectorAll('.secondary-carousel__image').forEach(function(el) {
                $(el).removeClass("animate__animated")
              })
              $('#thumbnail-carousel ').css('pointer-events', 'all')
              $('.thumbnail-wrapper ').css('cursor', 'initial')
            }, 2000)
          }
        }
        if (entry.target.classList.contains("contact__card")) {
          entry.target.classList.toggle("animate__zoomIn", entry.isIntersecting)
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
