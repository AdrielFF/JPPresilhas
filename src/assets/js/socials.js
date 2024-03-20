document.addEventListener( 'DOMContentLoaded', function () {
  const shareBtnEl = document.querySelector(".share-btn")

  shareBtnEl.addEventListener('click', function(e) {
    if(!e.target.classList.contains("share-btn__socials")){
      shareBtnEl.classList.toggle("open")
    }
  })

  document.body.addEventListener('click', function(e) {
    if (!e.target.classList.contains('share-btn') 
      && shareBtnEl.classList.contains("open")
      && !e.target.classList.contains("share-btn__socials")
    ) {
      shareBtnEl.classList.remove("open")
    }
  })

})