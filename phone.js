burger = document.querySelector('.burger');
navgation = document.querySelector('.navgation');
navbar = document.querySelector('.navbar');
right = document.querySelector('.right');
left = document.querySelector('.left');


 burger.addEventListener('click',()=>{
right.classList.toggle('v-nav-rsp')
left.classList.toggle('v-nav-rsp')
navbar.classList.toggle('v-nav-rsp')
navgation.classList.toggle('h-nav-rsp')
});