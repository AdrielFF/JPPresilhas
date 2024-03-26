"use strict";!function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);throw(f=new Error("Cannot find module '"+i+"'")).code="MODULE_NOT_FOUND",f}c=n[i]={exports:{}},e[i][0].call(c.exports,function(r){return o(e[i][1][r]||r)},c,c.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(require,module,exports){document.addEventListener("DOMContentLoaded",function(){var animatedEl=document.querySelectorAll(".animate__animated"),observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){entry.target.classList.contains("title")&&entry.target.classList.toggle("animate__fadeInDown",entry.isIntersecting),entry.target.classList.contains("about__img")&&entry.target.classList.toggle("animate__zoomIn",entry.isIntersecting),entry.target.classList.contains("left")&&(entry.target.classList.toggle("animate__slideInLeft",entry.isIntersecting),entry.target.classList.toggle("show-arrow",entry.isIntersecting)),entry.target.classList.contains("right")&&(entry.target.classList.toggle("animate__slideInRight",entry.isIntersecting),entry.target.classList.toggle("show-arrow",entry.isIntersecting)),entry.target.classList.contains("main-carousel")&&entry.target.classList.toggle("animate__slideInLeft",entry.isIntersecting),entry.target.classList.contains("thumbnail-wrapper")&&entry.target.classList.toggle("animate__fadeIn",entry.isIntersecting),entry.target.classList.contains("secondary-carousel__image")&&entry.target.classList.toggle("animate__slideInLeft",entry.isIntersecting),entry.target.classList.contains("contact__card")&&entry.target.classList.toggle("animate__zoomIn",entry.isIntersecting),entry.isIntersecting&&observer.unobserve(entry.target)})},{threshold:0});animatedEl.forEach(function(el){observer.observe(el)})})},{}],2:[function(require,module,exports){require("./header.js"),require("./slider.js"),require("./animations.js"),require("./socials.js"),require("./exitModal.js"),require("./mediaQueries.js")},{"./animations.js":1,"./exitModal.js":3,"./header.js":4,"./mediaQueries.js":5,"./slider.js":6,"./socials.js":7}],3:[function(require,module,exports){var scrollDiv=document.createElement("div"),scrollbarWidth=(scrollDiv.className="scrollbar-measure",document.body.appendChild(scrollDiv),scrollDiv.offsetWidth-scrollDiv.clientWidth),isFirstTime=(document.body.removeChild(scrollDiv),!0);setTimeout(function(){$("#modalTrigger").on("mouseenter",function(){isFirstTime&&($("#exitPreventModal").modal("show"),$(".header").css("padding-right","".concat(scrollbarWidth,"px")),$(".share-btn").css("padding-right","".concat(scrollbarWidth,"px")),isFirstTime=!1)}),$("#exitPreventModal").on("hidden.bs.modal",function(){$(".header").css("padding-right","0"),$(".share-btn").css("padding-right","0")})},1e3)},{}],4:[function(require,module,exports){document.addEventListener("DOMContentLoaded",function(){50<document.body.scrollTop||50<document.documentElement.scrollTop?document.querySelector(".header").classList.add("scrolled"):document.querySelector(".header").classList.remove("scrolled"),window.onscroll=function(){50<document.body.scrollTop||50<document.documentElement.scrollTop?document.querySelector(".header").classList.add("scrolled"):document.querySelector(".header").classList.remove("scrolled")};var sections=document.querySelectorAll(".observer-section"),observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){entry.isIntersecting&&"home"===entry.target.id&&($(".about-link").removeClass("active"),$(".works-link").removeClass("active"),$(".faq-link").removeClass("active"),$(".contact-link").removeClass("active")),entry.isIntersecting&&"about"===entry.target.id&&($(".about-link").addClass("active"),$(".works-link").removeClass("active"),$(".faq-link").removeClass("active"),$(".contact-link").removeClass("active")),entry.isIntersecting&&"works"===entry.target.id&&($(".works-link").addClass("active"),$(".about-link").removeClass("active"),$(".faq-link").removeClass("active"),$(".contact-link").removeClass("active")),entry.isIntersecting&&"faq"===entry.target.id&&($(".faq-link").addClass("active"),$(".about-link").removeClass("active"),$(".works-link").removeClass("active"),$(".contact-link").removeClass("active")),entry.isIntersecting&&"contact"===entry.target.id&&($(".contact-link").addClass("active"),$(".about-link").removeClass("active"),$(".works-link").removeClass("active"),$(".faq-link").removeClass("active"))})},{threshold:.5});sections.forEach(function(el){observer.observe(el)})})},{}],5:[function(require,module,exports){document.addEventListener("DOMContentLoaded",function(){function changeAboutCardsSectionAnimation(){var aboutCards=document.querySelectorAll(".about__float-cards");$(window).width()<=664?aboutCards.forEach(function(el,index){index%2==0?($(el).removeClass("left"),el.classList.contains("right")||$(el).addClass("right")):($(el).removeClass("right"),el.classList.contains("left")||$(el).addClass("left"))}):aboutCards.forEach(function(el,index){index+=1;1===index||2===index?($(el).removeClass("right"),el.classList.contains("left")||$(el).addClass("left")):($(el).removeClass("left"),el.classList.contains("right")||$(el).addClass("right"))})}addEventListener("resize",function(_){changeAboutCardsSectionAnimation()}),changeAboutCardsSectionAnimation()})},{}],6:[function(require,module,exports){document.addEventListener("DOMContentLoaded",function(){var mainCarousel=new Splide("#main-carousel",{type:"fade",rewind:!0,pagination:!1,arrows:!1,autoplay:!0,speed:1e3,drag:!1,breakpoints:{664:{drag:!0}}}),thumbnailsCarousel=new Splide("#thumbnail-carousel",{type:"loop",perPage:5,gap:8,rewind:!0,pagination:!1,isNavigation:!0,drag:!1,breakpoints:{664:{drag:!0,perPage:4}}});mainCarousel.sync(thumbnailsCarousel),mainCarousel.mount(),thumbnailsCarousel.mount()})},{}],7:[function(require,module,exports){document.addEventListener("DOMContentLoaded",function(){var shareBtnEl=document.querySelector(".share-btn");shareBtnEl.addEventListener("click",function(e){e.target.classList.contains("share-btn__socials")||shareBtnEl.classList.toggle("open")}),document.body.addEventListener("click",function(e){e.target.classList.contains("share-btn")||!shareBtnEl.classList.contains("open")||e.target.classList.contains("share-btn__socials")||shareBtnEl.classList.remove("open")})})},{}]},{},[2]);