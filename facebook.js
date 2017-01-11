var locale = (Array.from(document.body.classList).find(cls => cls.match(/^Locale_/)));
let emoji_map = {};
var TAG_PREFIX;
  var xhr = new XMLHttpRequest();
if (locale == 'Locale_es_LA') {
 TAG_PREFIX = "La imagen puede contener: ";
xhr.open('GET', chrome.extension.getURL('/locales/es/messages.txt'), true);
xhr.onreadystatechange = function()
{
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
    {
      emoji_map = JSON.parse(xhr.responseText);
    }
};
xhr.send();
}
 else if (locale == 'Locale_de_DE') {
  TAG_PREFIX = "Bild könnte enthalten: ";
  xhr.open('GET', chrome.extension.getURL('/locales/de/messages.txt'), true);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
    {
      emoji_map = JSON.parse(xhr.responseText);
    }
  };
  xhr.send();
} else if(locale == 'Locale_en_US') {
   TAG_PREFIX = "Image may contain: ";
xhr.open('GET', chrome.extension.getURL('/locales/en_US/messages.txt'), true);
xhr.onreadystatechange = function()
{
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
    {
      emoji_map = JSON.parse(xhr.responseText);
    }
};
xhr.send();
}

const show_facebook_cv_tags = function() {

  const images = [...document.getElementsByTagName('img')];

  images.forEach(function(el) {
    if (el.hasAttribute("data-prev-alt") && el.getAttribute("data-prev-alt") === el.getAttribute("alt"))
      return;

    el.setAttribute("data-prev-alt", el.alt);

    const altText = el.alt;
    const isCVTag = altText.startsWith(TAG_PREFIX);

    if (isCVTag) {
      const tags = altText.slice(TAG_PREFIX.length).split(/, | and /);
      let html = "<ul style='position:absolute;top:10px;right:10px;padding:5px;font-size:12px;line-height:1.8;background-color:rgba(0,0,0,0.7);color:#fff;border-radius:5px'>";

      tags.forEach(function(tag){
        let prefix = "∙";

        if (tag in emoji_map) {
          prefix = emoji_map[tag];
        } else if (tag.endsWith('people')) {
          prefix = emoji_map['2 people'];
        }

        html += `<li>${prefix} ${tag}</li>`;
      });

      html += "</ul>";

      el.style.position = 'relative';
      el.insertAdjacentHTML('afterend', html);
    }
  });
};

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        show_facebook_cv_tags();
    });
});

const config = { attributes: true, childList: true, characterData: false }

observer.observe(document.body, config);

show_facebook_cv_tags();
