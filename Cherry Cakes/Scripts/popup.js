const btnOpen = document.querySelector('#link1')
const btnClose = document.querySelector('.btn-close-popup')
const login = document.querySelector(".form-area")

btnOpen.addEventListener('click', () => {
    login.style.display = 'flex'
})

btnClose.addEventListener('click', () => {
    login.style.display = 'none'
})







