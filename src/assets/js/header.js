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

})