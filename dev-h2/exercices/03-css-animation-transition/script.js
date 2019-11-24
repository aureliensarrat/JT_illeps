const menuButtonElement = document.querySelector('.js-menu-button')
const menuElement = document.querySelector('.js-menu')

menuButtonElement.addEventListener('click', () => {
  menuElement.classList.toggle('is-active')
})
