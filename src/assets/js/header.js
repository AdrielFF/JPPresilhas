document.addEventListener( 'DOMContentLoaded', function () { 
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header").classList.add("scrolled")
  } else {
    document.querySelector(".header").classList.remove("scrolled")
  }

  window.onscroll = function() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector(".header").classList.add("scrolled")
    } else {
      document.querySelector(".header").classList.remove("scrolled")
    }
  }

  const sections = document.querySelectorAll(".observer-section")

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === "home" ) {
          $('.home-link').addClass('active')

          $('.about-link').removeClass('active')
          $('.works-link').removeClass('active')
          $('.faq-link').removeClass('active')
          $('.contact-link').removeClass('active')
        }

        if (entry.isIntersecting && entry.target.id === "about" ) {
          $('.about-link').addClass('active')

          $('.home-link').removeClass('active')
          $('.works-link').removeClass('active')
          $('.faq-link').removeClass('active')
          $('.contact-link').removeClass('active')
        }

        if (entry.isIntersecting && entry.target.id === "works" ) {
          $('.works-link').addClass('active')

          $('.home-link').removeClass('active')
          $('.about-link').removeClass('active')
          $('.faq-link').removeClass('active')
          $('.contact-link').removeClass('active')
        }

        if (entry.isIntersecting && entry.target.id === "faq" ) {
          $('.faq-link').addClass('active')

          $('.home-link').removeClass('active')
          $('.about-link').removeClass('active')
          $('.works-link').removeClass('active')
          $('.contact-link').removeClass('active')
        }
        
        if (entry.isIntersecting && entry.target.id === "contact") {
          $('.contact-link').addClass('active')

          $('.home-link').removeClass('active')
          $('.about-link').removeClass('active')
          $('.works-link').removeClass('active')
          $('.faq-link').removeClass('active')
        }
      })
    },
    {
      threshold: 0.5,
    }
  )

  sections.forEach(el =>  {
    observer.observe(el)
  })

})