// Hide all news feed items with pictures of babies or children.
// filterStoriesWithTags() is defined in filterStories.js

const BABY_TAGS = ['baby', 'child']
const hideBabies = () => filterStoriesWithTags(BABY_TAGS)

const observer = new MutationObserver(mutations => mutations.forEach(mutation => hideBabies()))

const OBSERVER_CONFIG = { attributes: true, childList: true, characterData: false }
observer.observe(document.body, OBSERVER_CONFIG)

hideBabies()