let signUp = document.querySelector('#sign-up')
let signIn = document.querySelector('#sign-in')
let container = document.querySelector('.container')

document.querySelectorAll('button').forEach(el => el.addEventListener('click', () => {
    container.classList.toggle('test')
}))