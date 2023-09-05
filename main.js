'use strict'

document.addEventListener('click', (e) => {
  if (e.target.matches('.works__img')) {
    const modal = document.querySelector('.modal')
    const modalImage = document.querySelector('.modal__img')
    const imageSrc = e.target.src

    modalImage.src = imageSrc
    modal.classList.add('modal--active')
  }

  if (e.target.matches('.modal__close')) {
    const modal = document.querySelector('.modal')
    modal.classList.remove('modal--active')
  }

  if (e.target.matches('.modal')) {
    const modal = document.querySelector('.modal')
    modal.classList.remove('modal--active')
  }
})