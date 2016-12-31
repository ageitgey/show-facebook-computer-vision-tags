const OBSERVER_CONFIG = { attributes: true, childList: true, characterData: false }
const TAG_PREFIX = 'Image may contain: '
const BABY_TAGS = ['baby', 'child']

const hasIntersection = (arrayA, arrayB) => {
  return arrayA.reduce((total, curr) => total || arrayB.includes(curr), false)
}

const containsTags = (image, filterTags) => {
  const altText = image.alt
  image.setAttribute('data-prev-alt', altText)
  const isCVTag = altText.startsWith(TAG_PREFIX)
  if (!isCVTag) return false
  const tags = altText.slice(TAG_PREFIX.length).split(/, | and /)
  return hasIntersection(tags, filterTags)
}

const getFeedStories = () => {
  const stories = [...document.querySelectorAll('[data-testid]')]
  return stories.filter(story => (story.getAttribute('data-testid') === 'fbfeed_story' && !story.getAttribute('hidden')))
}

const getStoryImages = story => [...story.getElementsByTagName('img')]

const hideStory = story => {
  console.log('A story was hidden!')
  story.setAttribute('hidden', true)
}

const hideStoriesWithTags = tags => {
  getFeedStories().forEach(story => {
    getStoryImages(story).forEach(image => if (containsTags(image, tags)) hideStory(story))
  })
}

const hideBabies = () => hideStoriesWithTags(BABY_TAGS)

const observer = new MutationObserver(mutations => mutations.forEach(mutation => hideBabies()))
observer.observe(document.body, OBSERVER_CONFIG)

hideBabies()

