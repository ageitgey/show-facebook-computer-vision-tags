const TAG_PREFIX = 'Image may contain: '

const hideBabies = () => {
  const images = [...document.getElementsByTagName('img')]
  images.forEach(el => {
    if (el.hasAttribute('data-prev-alt') && el.getAttribute('data-prev-alt') === el.getAttribute('alt')) return
    el.setAttribute('data-prev-alt', el.alt)
    const altText = el.alt
    const isCVTag = altText.startsWith(TAG_PREFIX)
    if (!isCVTag) return
    const tags = altText.slice(TAG_PREFIX.length).split(/, | and /)
  })
}

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => hideBabies())
})

const config = { attributes: true, childList: true, characterData: false }
observer.observe(document.body, config)

hideBabies()
