const TAG_PREFIX = 'Image may contain: '
const FILTERED_TAGS = [
  'baby',
  'child'
]

const hasIntersection = (arrayA, arrayB) => {
  return arrayA.reduce((total, curr) => total || arrayB.includes(curr), false)
}

const hasBaby = image => {
  const altText = image.alt
  image.setAttribute('data-prev-alt', altText)
  const isCVTag = altText.startsWith(TAG_PREFIX)
  if (!isCVTag) return false
  const tags = altText.slice(TAG_PREFIX.length).split(/, | and /)
  return hasIntersection(tags, FILTERED_TAGS)
}

const getFeedStories = () => {
  const stories = [...document.querySelectorAll('[data-testid]')]
  return stories.filter(story => (story.getAttribute('data-testid') === 'fbfeed_story' && !story.getAttribute('hidden')))
}

const getStoryImages = story => [...story.getElementsByTagName('img')]

const hideStory = story => {
  console.log('A baby was hidden!')
  story.setAttribute('hidden', true)
}

const hideBabies = () => {
  const stories = getFeedStories()
  stories.forEach(story => {
    const images = getStoryImages(story)
    images.forEach(image => {
      if (hasBaby(image)) hideStory(story)
    })
  })
}

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => hideBabies())
})

const config = { attributes: true, childList: true, characterData: false }
observer.observe(document.body, config)

hideBabies()

