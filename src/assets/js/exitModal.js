const scrollDiv = document.createElement("div");

scrollDiv.className = "scrollbar-measure";

document.body.appendChild(scrollDiv);
const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

document.body.removeChild(scrollDiv);

let isFirstTime = true

setTimeout(function(){
  $("#modalTrigger").on("mouseenter", function() {
    if(isFirstTime) {
      $('#exitPreventModal').modal('show')
    
      $('.header').css('padding-right', `${scrollbarWidth}px`)
      $('.share-btn').css('padding-right', `${scrollbarWidth}px`)
  
      isFirstTime = false
    }
  })
  
  $("#exitPreventModal").on("hidden.bs.modal", function () {
    $('.header').css('padding-right', '0')
    $('.share-btn').css('padding-right', '0')
  });
}, 1000)
