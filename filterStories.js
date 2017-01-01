const TAG_PREFIX = 'Image may contain: '

// Returns true if the two arrays contain the same item
const hasIntersection = (arrayA, arrayB) => {
  return arrayA.reduce((total, curr) => total || arrayB.includes(curr), false)
}

// Returns true if an image's alt text contains any of the specified tags
const containsTags = (image, filterTags) => {
  const altText = image.alt
  const isCVTag = altText.startsWith(TAG_PREFIX)
  if (!isCVTag) return false
  const tags = altText.slice(TAG_PREFIX.length).split(/, | and /)
  return hasIntersection(tags, filterTags)
}

// Gets all available news feed stories
// A story is defined as a non-hidden div where the 'data-testid' attr is 'fbfeed_story'
const getFeedStories = () => {
  const stories = [...document.querySelectorAll('[data-testid]')]
  return stories.filter(story => (story.getAttribute('data-testid') === 'fbfeed_story' && !story.getAttribute('hidden')))
}

// Gets all images contained in a story
const getStoryImages = story => [...story.getElementsByTagName('img')]

// Hides a story on the news feed
const hideStory = story => {
  console.log('A story was hidden!')
  story.setAttribute('hidden', true)
}

// Hides all stories containing images with specified image tags
const filterStoriesWithTags = tags => {
  getFeedStories().forEach(story => {
    getStoryImages(story).forEach(image => {
      if (containsTags(image, tags)) hideStory(story)
    })
  })
}