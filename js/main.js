function applyScrollRevealEffectOpposites(claseLeft, claseRight) {
  if(window.innerWidth >= 992){
    ScrollReveal().reveal(claseLeft, {duration: 900, delay:400, distance: '100px' , easing: 'ease-in', origin: 'right'});
    ScrollReveal().reveal(claseRight, {duration: 900, delay:400, distance: '100px' , easing: 'ease-in', origin: 'left'});
  }
}

  setTimeout(function(){
    let w_btn = document.querySelector(".whatsapp-btn");
    w_btn.classList.remove("hide-wsp-btn");
   }, 3000);