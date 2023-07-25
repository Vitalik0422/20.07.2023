const loginForm = document.querySelector('.loginForm')
    
loginForm.addEventListener('submit',(ev) => {
        ev.preventDefault()
        const data = new FormData(ev.target)
        loginData(data)
    })


const loginData = async(data) => {
    const res = await axios.post('/auth/local/login', data)
}
