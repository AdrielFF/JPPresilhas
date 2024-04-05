document.addEventListener( 'DOMContentLoaded', function () { 
  function changeAboutCardsSectionAnimation() {
    const aboutCards = document.querySelectorAll(".about__float-cards")
    if ($(window).width() <= 664) {
      aboutCards.forEach(function(el, index) {
        if(index % 2 === 0) {
          $(el).removeClass("right")
          if(!el.classList.contains("left")) {
            $(el).addClass("left")
          }
        } else {
          $(el).removeClass("left")
          if(!el.classList.contains("right")) {
            $(el).addClass("right")
          }
        }
      })

      document.querySelectorAll(".hero__content-images").forEach(function(el) {
        let parent = el.parentNode
        let wrapper = document.createElement("a")
        wrapper.href = "https://deppresilhas.com.br/#about"
        parent.replaceChild(wrapper, el)
        wrapper.appendChild(el)
      })
    } else {
      aboutCards.forEach(function(el, index) {
        const cardNumber = index + 1
        if(cardNumber === 1 || cardNumber === 2) {
          $(el).removeClass("right")
          if(!el.classList.contains("left")) {
            $(el).addClass("left")
          }
        } else {
          $(el).removeClass("left")
          if(!el.classList.contains("right")) {
            $(el).addClass("right")
          }
        }
      })
    }
  }
  
  addEventListener("resize", (_) => { changeAboutCardsSectionAnimation() });
  changeAboutCardsSectionAnimation()
})