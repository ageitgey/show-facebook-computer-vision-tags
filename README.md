# Show Facebook Computer Vision Tags Chrome Extension

*Want to try this? [Install it from the Chrome Web Store](https://chrome.google.com/webstore/detail/show-facebook-computer-vi/elafbihhbfmfihdflghclaclcilcnmie?hl=en-US&gl=US) or the [Firefox Add-ons website](https://addons.mozilla.org/en-US/firefox/addon/show-computer-vision-tags/)*

![](https://cloud.githubusercontent.com/assets/896692/21574672/fa4cecb4-ceab-11e6-896c-101025c68dc3.png)

Since April 2016, Facebook has been [automatically adding `alt` tags](https://code.facebook.com/posts/457605107772545/under-the-hood-building-accessibility-tools-for-the-visually-impaired-on-facebook/) to images
you upload that are populated with keywords representing the content of your images:

```html
<img csrc="https://facebook.com/some-url.jpg"
alt="Image may contain: golf, grass, outdoor and nature"
width="316" height="237">
```

They are labeling your images using a [Deep ConvNet](https://medium.com/@ageitgey/machine-learning-is-fun-part-3-deep-learning-and-convolutional-neural-networks-f40359318721#.luqjma59e)
built by Facebook's
[FAIR team](https://research.fb.com/category/facebook-ai-research-fair/).

On one hand, this is really great. It improves accessibility for blind users
who depend on screen readers which are only capable of processing text.

But I think a lot of internet users don't realize the amount of information that is now routinely extracted from photographs. Facebook (and Google, Apple, Amazon, etc) can easily tell from your photographs if you have a pet dog, if you collect cameras, if you play golf, if you have children, or if you are just really into sunglasses. There's nothing stopping them from using this information to show you relevant ads just based on photos of you - even if another user uploaded the photo and didn't even directly tag you!

This is a very simple Chrome Extension that I hacked together in a few minutes to make it easy to see the tags that Facebook is automatically applying to you and your friends' photos. Once you install it, all the photos you see on your Facebook timeline will automatically be overlaid with their tags, like this:

<img width="524" src="https://cloud.githubusercontent.com/assets/896692/21574687/3443b268-ceac-11e6-85ee-45f59408f9bb.png">

The goal is simply to make everyone aware of the kind of information that is routinely extracted from your own images today. This isn't some technology that is 'coming soon', but this is something in *wide-spread production use now by every major internet company*. You can even [learn how to implement this kind of system yourself](https://medium.com/@ageitgey/machine-learning-is-fun-part-3-deep-learning-and-convolutional-neural-networks-f40359318721) using widely available open-source software.

Here's some examples of the kinds of things that Facebook detects in your photos:

### Objects in your photos

It's possible to tell what kinds of objects are in your photos and identify your interests based on that.

![](https://cloud.githubusercontent.com/assets/896692/21574712/aa1fd34a-ceac-11e6-98b0-b0b7a6a5d9fb.png)

### Activities you are doing

Whether you are eating, running, or playing golf, it's possible for an algorithm to tell what you are doing in your photographs.

<img width="523" alt="" src="https://cloud.githubusercontent.com/assets/896692/21574724/f5055da8-ceac-11e6-9ec0-14629f42deca.png">

### When and where a photo was taken

You can tell if a photo was taken inside or outside, what the time of day was, what physical landmarks (mountains, trees, water, etc) were around, and so on.

<img width="623" alt="screen shot 2016-12-30 at 4 30 36 pm" src="https://cloud.githubusercontent.com/assets/896692/21574743/5de83548-cead-11e6-9211-3e75a588523d.png">

### Events you are attending

It's even possible to tell which kind of sporting event you are attending.

<img width="949" alt="screen shot 2016-12-30 at 4 35 31 pm" src="https://cloud.githubusercontent.com/assets/896692/21574780/24767440-ceae-11e6-9ee1-b5e065f89c93.png">

These are just a few examples. See what kinds of things Facebook has found in your own photos!

# Installing this Chrome Extension

Option 1: From the Chrome Web Store

1. [Click here and choose "+ Add to Chrome"](https://chrome.google.com/webstore/detail/show-facebook-computer-vi/elafbihhbfmfihdflghclaclcilcnmie?hl=en-US&gl=US)

Option 2: From Source

1. Clone this repo so you have a copy in a folder locally.
1. Open `chrome://extensions` in the location or go to `Tools` > `Extensions`
1. Enable `Developer mode` by checking the checkbox in the upper-right corner.
1. Click on the button labelled `Load unpacked extension...`.
1. Select the directory where you cloned this repo to.
1. Visit Facebook!

# Installing in Firefox

From the Add-ons website:

1. [Click here and choose "+ Add to Firefox"](https://addons.mozilla.org/en-US/firefox/addon/show-computer-vision-tags/)

Caveats:

1. This only works for English-speaking Facebook users. I made no attempt to make this work for any other language. Sorry! But you could easily fork this and make it work for a different language. There's not a lot to this.

 - [Álvaro Sarasúa](https://github.com/asarasua) made a Spanish version of this extension [here](https://github.com/asarasua/show-facebook-computer-vision-tags).
 - [Nicolas Raube](https://github.com/nicolasraube) made a German version of this extension [here](https://github.com/nicolasraube/show-facebook-computer-vision-tags).
