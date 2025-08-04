let button = document.querySelector('button[type=submit]')
let inputs = document.querySelectorAll('input')
let inputLogin = inputs[0]
let inputPasword = inputs[1]
let inputTel = inputs[2]
let inputShowPass = document.querySelector('#showpass')
let TextShowPass = document.querySelector('label')
console.log(button)

inputs.forEach(input=>input.addEventListener('input', ()=>{
  if (inputLogin.value.length >= 4 && inputPasword.value.length >= 4 && inputTel.value.length === 12){
    button.disabled = false
  }
  if (inputLogin.value.length < 4 || inputPasword.value.length < 4 || inputTel.value.length !== 12){
    button.disabled = true
  }

}))
inputShowPass.addEventListener('click',()=>{
  if (inputShowPass.checked){
    inputPasword.type = 'text'
    TextShowPass.textContent = 'Скрыть пароль'
    return
  }
  inputPasword.type = 'password'
  TextShowPass.textContent = 'Показать пароль'
})


