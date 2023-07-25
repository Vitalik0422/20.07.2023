const logoutBtn = document.querySelector('.logout')

const logoutFn = async () => {
    await axios.get('/auth/local/logout')
}


logoutBtn.addEventListener('click', logoutFn)

