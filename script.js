const buttonBurger = document.querySelector('.ham');
const popupNav = document.querySelector('.nav-mobile')

function pressBurger(event) { 
  event.target.classList.toggle('active'); 
  popupNav.classList.toggle('nav-mobile_open');
}; 


buttonBurger.addEventListener('click', pressBurger);