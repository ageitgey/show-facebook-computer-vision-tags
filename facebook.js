const emoji_map = {
  "1 persona": "👤",
  "2 persone": "👥",
  "3 persone": "👥",
  "4 persone": "👥",
  "5 persone": "👥",
  "6 persone": "👥",
  "7 persone": "👥",
  "aereo": "✈️",
  "bambino": "🍼",
  "spiaggia": "🏖",
  "barba": "👴",
  "bedroom": "🛏",
  "bicycle": "🚲",
  "camera": "📷",
  "car": "🚗",
  "gatto": "😺",
  "child": "👦",
  "albero di Natale": "🎄",
  "primopiano": "👀",
  "primo piano": "👀",
  "nuvola": "☁️",
  "concert": "🎤",
  "folla": "👥",
  "dancing": "💃",
  "dessert": "🍰",
  "dog": "🐶",
  "bevanda": "🍹",
  "eating": "🍽",
  "eyeglasses": "👓",
  "fireworks": "🎆",
  "fiore": "🌻",
  "cibo": "🍎",
  "occhiali": "🕶",
  "golf": "🏌️‍",
  "erba": "🍃",
  "cappello": "👒",
  "spazio al chiuso": "🏠",
  "living room": "🏠",
  "meme": "👍",
  "motorcycle": "🏍",
  "montagna": "🌋",
  "natura": "🏞",
  "notte": "🌃",
  "oceano": "🌊",
  "ufficio": "💼",
  "una o più persone": "👥",
  "spazio all\'aperto": "🚵",
  "persone che mangiano": "🍽",
  "persona che mangia": "🍽",
  "people on stage": "🎤",
  "people playing musical instruments": "🎸",
  "people playing sport": "🏀",
  "persone sedute": "⑁",
  "persona seduta": "⑁",
  "persone che sorridono": "😂",
  "persone in piedi": "🕴",
  "persona in piedi": "🕴",
  "persone che camminano": "🚶",
  "persona che cammina": "🚶",
  "telefono": "📱",
  "pianta": "🌿",
  "playing a musical instrument": "🎸",
  "schermo": "🖥",
  "selfie": "🤳",
  "scarpe": "👡",
  "sitting": "⑁",
  "cielo": "☀️",
  "grattacielo": "🏙",
  "sleeping": "😴",
  "con sorriso": "😋",
  "neve": "❄️",
  "in piedi": "🕴",
  "strisce": "📶",
  "suit": "🕴",
  "sunglasses": "🕶",
  "swimming": "🏊",
  "tavolo": "🍽",
  "text": "🔠",
  "sMS": "🔠",
  "albero": "🌴",
  "crepuscolo": "🌃",
  "acqua": "💧",
  "matrimonio": "💒",
  "ponte": "🌁",
  "gioielli":"💎"
}

const show_facebook_cv_tags = function(obj) {
  const TAG_PREFIX = "L\'immagine può contenere: ";
  let images = [...obj.querySelectorAll('img.img')];
  images = images.concat([...obj.querySelectorAll('img.spotlight')]);
  // console.log(images);
  images.forEach(function(el) {
    if (el.hasAttribute("data-prev-alt") && el.getAttribute("data-prev-alt") === el.getAttribute("alt"))
      return;

    el.setAttribute("data-prev-alt", el.alt);

    const altText = el.alt;
    const isCVTag = altText.startsWith(TAG_PREFIX);

    if (isCVTag) {
      const tags = altText.slice(TAG_PREFIX.length).split(/, | e /);
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
