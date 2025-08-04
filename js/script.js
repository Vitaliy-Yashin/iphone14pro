let checkbox = document.querySelector('input[type=checkbox]');
console.log(checkbox);
let inputPass = document.querySelector('input[type=password]');
let nav = document.querySelector('.nav')

let FlagOfBtn = false
let menuButton = document.querySelector('.menu_btn');
let lines = document.querySelectorAll('.menu_btn-line');


checkbox.addEventListener('click',()=>{
  if (checkbox.checked){
    inputPass.type = 'text';
  }
  else inputPass.type = 'password'; 
})

menuButton.addEventListener('click',()=>{
  nav.classList.toggle('menu_open')
})