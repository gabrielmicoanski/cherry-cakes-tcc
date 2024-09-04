const btnOpen = document.querySelector('#link1')
const btnClose = document.querySelector('.btn-close-popup')
const popup = document.querySelector(".login-area")

btnOpen.addEventListener('click', () => {
    popup.style.display = 'block'
})

btnClose.addEventListener('click', () => {
    popup.style.display = 'none'
})