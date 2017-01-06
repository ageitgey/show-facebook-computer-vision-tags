const emoji_map = {
  "1 person": "👤",
  "2 people": "👥",
  "3 people": "👥",
  "4 people": "👥",
  "5 people": "👥",
  "6 people": "👥",
  "7 people": "👥",
  "airplane": "✈️",
  "baby": "🍼",
  "beach": "🏖",
  "beard": "👴",
  "bedroom": "🛏",
  "bicycle": "🚲",
  "camera": "📷",
  "car": "🚗",
  "cat": "😺",
  "child": "👦",
  "christmas tree": "🎄",
  "close-up": "👀",
  "closeup": "👀",
  "cloud": "☁️",
  "concert": "🎤",
  "crowd": "👥",
  "dancing": "💃",
  "dessert": "🍰",
  "dog": "🐶",
  "drink": "🍹",
  "eating": "🍽",
  "eyeglasses": "👓",
  "fireworks": "🎆",
  "flower": "🌻",
  "food": "🍎",
  "glasses": "🕶",
  "golf": "🏌️‍",
  "grass": "🍃",
  "hat": "👒",
  "indoor": "🏠",
  "living room": "🏠",
  "meme": "👍",
  "motorcycle": "🏍",
  "mountain": "🌋",
  "nature": "🏞",
  "night": "🌃",
  "ocean": "🌊",
  "office": "💼",
  "one or more people": "👥",
  "outdoor": "🚵",
  "people eating": "🍽",
  "people on stage": "🎤",
  "people playing musical instruments": "🎸",
  "people playing sport": "🏀",
  "people sitting": "⑁",
  "people smiling": "😂",
  "people standing": "🕴",
  "phone": "📱",
  "plant": "🌿",
  "playing a musical instrument": "🎸",
  "screen": "🖥",
  "selfie": "🤳",
  "shoes": "👡",
  "sitting": "⑁",
  "sky": "☀️",
  "skyscraper": "🏙",
  "sleeping": "😴",
  "smiling": "😋",
  "snow": "❄️",
  "standing": "🕴",
  "stripes": "📶",
  "suit": "🕴",
  "sunglasses": "🕶",
  "swimming": "🏊",
  "table": "🍽",
  "text": "🔠",
  "tree": "🌴",
  "twilight": "🌃",
  "water": "💧",
  "wedding": "💒"
}

function show_facebook_cv_tags(obj) {
  const TAG_PREFIX = "Image may contain: ";
  let images = [...obj.querySelectorAll('img.img')];
  images = images.concat([...obj.querySelectorAll('img.spotlight')]);
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

        if (tag in emoji_map)
          prefix = emoji_map[tag];

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
        setTimeout(function(){show_facebook_cv_tags(mutation.target);},1500);
    });
});

const config = { attributes: true, childList: true, characterData: true, attributeFilter: ["src"], subtree: true }

observer.observe(document.body, config);

show_facebook_cv_tags(document);
