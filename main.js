'use strict'

matchMedia('(prefers-color-scheme: dark)').matches
  ? document.documentElement.classList.add('dark')
  : document.documentElement.classList.add('light')

observeWorksImages()

document.addEventListener('click', (e) => {
  if (e.target.matches('.works__img')) {
    const modal = document.querySelector('.modal')
    const modalImage = document.querySelector('.modal__img')
    const imageSrc = e.target.src

    modalImage.src = imageSrc
    modal.classList.add('modal--active')
  }

  const closeModal = e.target.matches('.modal') || e.target.matches('.modal__close') || e.target.matches('.modal__span')
  if (closeModal) {
    const modal = document.querySelector('.modal')
    modal.classList.remove('modal--active')
  }

  if (e.target.matches('.theme__circle')) {
    const root = document.documentElement
    e.target.classList.toggle('theme__circle--right')

    if (root.matches('.dark')) {
      root.classList.remove('dark')
      root.classList.add('light')
      return
    }

    if (root.matches('.light')) {
      root.classList.remove('light')
      root.classList.add('dark')
      return
    }
  }
})

function observeWorksImages() {
  const $workImages = document.querySelectorAll('.works__article')
  const observer = new IntersectionObserver(intersectionHandler, { threshold: 0.25 })
  $workImages.forEach((image) => observer.observe(image))

  function intersectionHandler(entries, observer) {
    entries.forEach((entry) => {
      entry.target.classList.toggle('works__article--active', entry.isIntersecting)
    })
  }
}