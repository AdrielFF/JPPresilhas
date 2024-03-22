document.addEventListener( 'DOMContentLoaded', function () { 

  const animatedEl = document.querySelectorAll(".animate__animated")

  let observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.target.classList.contains("title")) {
          entry.target.classList.toggle("animate__fadeInDown", entry.isIntersecting)
        }
        if (entry.target.classList.contains("about__img")) {
          entry.target.classList.toggle("animate__zoomIn", entry.isIntersecting)
        }
        if (entry.target.classList.contains("left")) {
          entry.target.classList.toggle("animate__slideInLeft", entry.isIntersecting)
        }
        if (entry.target.classList.contains("right")) {
          entry.target.classList.toggle("animate__slideInRight", entry.isIntersecting)
        }
        if (entry.target.classList.contains("main-carousel")) {
          entry.target.classList.toggle("animate__slideInLeft", entry.isIntersecting)
        }
        if (entry.target.classList.contains("thumbnail-wrapper")) {
          entry.target.classList.toggle("animate__fadeIn", entry.isIntersecting)
        }
        if (entry.target.classList.contains("secondary-carousel__image")) {
          entry.target.classList.toggle("animate__slideInLeft", entry.isIntersecting)
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
