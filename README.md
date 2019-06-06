# Show Facebook Computer Vision Tags Chrome Extension

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

1. Update: Sorry, this is extension not currently available in the Chrome Web Store. Facebook filed a Trademark complaint 
   due to the name of the extension having the word "Facebook" in it, so I had to remove it. 

Option 2: From Source

1. Clone this repo so you have a copy in a folder locally.
1. Open `chrome://extensions` in the location or go to `Tools` > `Extensions`
1. Enable `Developer mode` by checking the checkbox in the upper-right corner.
1. Click on the button labelled `Load unpacked extension...`.
1. Select the directory where you cloned this repo to.
1. Visit Facebook!

# Installing in Firefox

Option 1: From the Add-ons website:

1. [Click here and choose "+ Add to Firefox"](https://addons.mozilla.org/en-US/firefox/addon/show-computer-vision-tags/)

Option 2: From Source

1. Clone this repo so you have a copy in a folder locally.
1. Open `about:debugging` URL
1. Click on the button labelled `Load Temporary Add-on`.
1. Select the directory where you cloned this repo to, and select `facebook.js`
1. Visit Facebook!

# Caveats

1. This only works for English-speaking Facebook users. I made no attempt to make this work for any other language. Sorry! But you could easily fork this and make it work for a different language. There's not a lot to this.

 - [Álvaro Sarasúa](https://github.com/asarasua) made a Spanish version of this extension [here](https://github.com/asarasua/show-facebook-computer-vision-tags).
 - [Nicolas Raube](https://github.com/nicolasraube) made a German version of this extension [here](https://github.com/nicolasraube/show-facebook-computer-vision-tags).

# Press

* [New York Magazine select/all - See What Facebook Thinks Is in Your Photos](http://nymag.com/selectall/2017/01/see-what-facebook-thinks-is-in-your-photos.html)
* [Nylon - You Can Now See What Information Facebook Gathers From Your Photos](http://www.nylon.com/articles/information-facebook-gets-from-photos)
* [Mashable - Curious about what Facebook thinks is in your photos? This extension shows you.](http://mashable.com/2017/01/05/chrome-extension-facebook-photos-tagging/)
* [lifehacker - Show Facebook Computer Vision for Chrome Reveals Facebook's Hidden Photo Tags](http://lifehacker.com/show-facebook-computer-vision-for-chrome-reveals-facebo-1790716574)
* [PetaPixel - This Chrome Add-On Shows You What Facebook ‘Sees’ In Your Photos](http://petapixel.com/2017/01/04/chrome-add-shows-facebook-sees-photos/)
* [DigitalTrends - Browser Extension Unveils the Hidden Tags Facebook Gives Your Photos](http://www.digitaltrends.com/photography/browser-extension-facebook-photo-tags-hidden-shows/)
* [The Daily Dot - This Chrome extension reveals Facebook's hidden image tags](http://www.dailydot.com/debug/chrome-extension-facebook-image-tags/)
* [Metro UK - The amount of data Facebook detects in a single photo upload is terrifying](http://metro.co.uk/2017/01/05/heres-how-much-data-facebook-can-take-from-just-one-of-your-uploaded-photos-6362804/)
* [DailyMail - Facebook's secret picture tags revealed: Plugin lets you see what the firm's AI thinks is in your snaps (and it's scarily accurate)](http://www.dailymail.co.uk/sciencetech/article-4093082/Facebook-s-secret-picture-tags-revealed-Plugin-lets-firm-s-AI-thinks-pictures.html)
* [t3n - Was Facebooks KI auf euren Fotos erkennt: Diese Erweiterung zeigt es euch](http://t3n.de/news/facebook-ki-bilderkennung-chrome-781194/)
* [BFM TV - Découvrez tout ce que Facebook sait de vous en analysant vos photos](http://hightech.bfmtv.com/internet/decouvrez-tout-ce-que-facebook-sait-de-vous-en-analysant-vos-photos-1076938.html)
* [GQ France - Facebook affine son ciblage grâce à vos photos](http://www.gqmagazine.fr/pop-culture/news/articles/facebook-collecte-des-donnees-dans-vos-photos/49175)
* [Meio Bit - Veja os objetos que a IA do Facebook reconhece em suas fotos](http://meiobit.com/357917/facebook-computer-vision-tags-inteligencia-artificial-reconhece-os-objetos-contidos-em-suas-fotos-saiba-o-que-ele-entende/)
* [CodigoFonte - Plugin para Firefox e Chrome exibe o que o Facebook vê em suas fotos](http://codigofonte.uol.com.br/noticias/plugin-para-firefox-e-chrome-exibe-o-que-o-facebook-ve-em-suas-fotos)
* [24h.com.vn - Facebook đang phân tích từng bức ảnh ra sao?](http://us.24h.com.vn/cong-nghe-thong-tin/facebook-dang-phan-tich-tung-buc-anh-ra-sao-c55a845636.html)
* [ZDNet Korea - 브라우저에 페이스북의 눈을 달아보자](http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170105100124)
* [unwire.hk - 表情動作場合都辨認到！加個插件即可看到 Facebook 圖像識別技術到底有幾犀利](https://unwire.hk/2017/01/05/show-facebook-computer-vision-tags/software/)
