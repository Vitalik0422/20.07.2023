import { UI } from './modules/UI.js'
import { registerData } from './modules/regDataSend.js'
const registerForm = document.querySelector('.registerForm')

registerForm.addEventListener('submit', (ev) =>{ 
    ev.preventDefault()
    const data = new FormData(ev.target)
    registerData(data)
})