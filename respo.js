burger = document.querySelector('.burger');
navgation = document.querySelector('.navgation');
navbar = document.querySelector('.navbar');
right = document.querySelector('.right');


 burger.addEventListener('click',()=>{
 right.classList.toggle('v-nav-rsp')
navbar.classList.toggle('v-nav-rsp')
navgation.classList.toggle('h-nav-rsp')
})


//function dropdown(){
//    right.classList.toggle('v-nav-rsp')
//navbar.classList.toggle('v-nav-rsp')
//container.classList.toggle('h-nav-rsp')
//}
//
//
//
//
//
//
//
//
//burger.addEventListener('click',dropdown);
