import {UI} from './UI.js'

export const registerData = async (ev) => {
    
    const res = await axios.post('/register/userData', ev)
}