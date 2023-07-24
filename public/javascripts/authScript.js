const loginForm = document.querySelector('.loginForm')
import { UI } from './modules/UI.js'
import { registerData } from './modules/regDataSend.js'
    loginForm.addEventListener('submit',(ev)=>{
        ev.preventDefault()
        const data = new FormData(e)
        loginData(data)
    })


const loginData = async(data) => {
    const res = await axios.post('/login', data)
}
