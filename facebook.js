var stad = chrome.i18n.getMessage("stand");
var per = chrome.i18n.getMessage("per");
var pers = chrome.i18n.getMessage("pers");
var perso = chrome.i18n.getMessage("perso");
var person = chrome.i18n.getMessage("person");
var person5 = chrome.i18n.getMessage("person5");
var person6 = chrome.i18n.getMessage("person6");
var person7 = chrome.i18n.getMessage("person7");
var baby  = chrome.i18n.getMessage("baby");
var beach  = chrome.i18n.getMessage("beach");
var beard  = chrome.i18n.getMessage("beard");
var bedroom  = chrome.i18n.getMessage("bedroom");
var bicycle  = chrome.i18n.getMessage("bicycle");
var camera  = chrome.i18n.getMessage("camera");
var car  = chrome.i18n.getMessage("car");
var cat  = chrome.i18n.getMessage("cat");
var child  = chrome.i18n.getMessage("child");
var christmas  = chrome.i18n.getMessage("christmas");
var closeup  = chrome.i18n.getMessage("closeup");
var cloud  = chrome.i18n.getMessage("cloud");
var crowd  = chrome.i18n.getMessage("crowd");
var dog  = chrome.i18n.getMessage("dog");
var drink  = chrome.i18n.getMessage("drink");
var eating  = chrome.i18n.getMessage("eating");
var eyeglasses  = chrome.i18n.getMessage("eyeglasses");
var fireworks  = chrome.i18n.getMessage("fireworks");
var flower  = chrome.i18n.getMessage("flower");
var food  = chrome.i18n.getMessage("food");
var golf  = chrome.i18n.getMessage("golf");
var glasses  = chrome.i18n.getMessage("glasses");
var grass  = chrome.i18n.getMessage("grass");
var hat  = chrome.i18n.getMessage("hat");

var indoor  = chrome.i18n.getMessage("indoor");
var livingroom  = chrome.i18n.getMessage("living_room");
var meme  = chrome.i18n.getMessage("meme");
var mountain  = chrome.i18n.getMessage("mountain");
var nature  = chrome.i18n.getMessage("nature");
var night  = chrome.i18n.getMessage("night");
var ocean  = chrome.i18n.getMessage("ocean");
var office  = chrome.i18n.getMessage("office");
var oneormorepeople  = chrome.i18n.getMessage("oneormorepeople");
var outdoor  = chrome.i18n.getMessage("outdoor");
var peopleeating  = chrome.i18n.getMessage("peopleeating");
var peoplesitting  = chrome.i18n.getMessage("peoplesitting");
var peoplesmiling  = chrome.i18n.getMessage("peoplesmiling");
var peoplestanding  = chrome.i18n.getMessage("peoplestanding");
var peopleonstage = chrome.i18n.getMessage("peopleonstage");
var peopleplayingmusicalinstruments = chrome.i18n.getMessage("peopleplayingmusicalinstruments");
var phone  = chrome.i18n.getMessage("phone");
var plant  = chrome.i18n.getMessage("plant");
var selfie  = chrome.i18n.getMessage("selfie");
var shoes  = chrome.i18n.getMessage("shoes");
var sitting  = chrome.i18n.getMessage("sitting");
var sky  = chrome.i18n.getMessage("sky");
var skyscraper  = chrome.i18n.getMessage("skyscraper");

var sleeping  = chrome.i18n.getMessage("sleeping");
var smiling  = chrome.i18n.getMessage("smiling");
var snow  = chrome.i18n.getMessage("snow");
var standing  = chrome.i18n.getMessage("standing");
var stripes  = chrome.i18n.getMessage("stripes");
var suit  = chrome.i18n.getMessage("suit");
var sunglasses  = chrome.i18n.getMessage("sunglasses");
var swimming  = chrome.i18n.getMessage("swimming");
var table  = chrome.i18n.getMessage("table");
var text  = chrome.i18n.getMessage("text");
var tree  = chrome.i18n.getMessage("tree");
var twilight  = chrome.i18n.getMessage("twilight");
var water  = chrome.i18n.getMessage("water");
var wedding  = chrome.i18n.getMessage("wedding");
var playingamusicalinstrument  = chrome.i18n.getMessage("playingamusicalinstrument");
var peopleplayingsport  = chrome.i18n.getMessage("peopleplayingsport");

const emoji_map = {
  [per]: "👤",
  [pers] : "👥",
  [perso]: "👥",
  [person]: "👥",
  [person5]: "👥",
  [person5]: "👥",
  [person7]: "👥",
  [baby]: "🍼",
  [beach]: "🏖",
  [beard]: "👴",
  [bedroom]: "🛏",
  [bicycle]: "🚲",
  [camera]: "📷",
  [car]: "🚗",
  [cat]: "😺",
  [child]: "👦",
  [christmas]: "🎄",
  [closeup]: "👀",
  [cloud]: "☁️",
  [crowd]: "👥",
  [dog]: "🐶",
  [drink]: "🍹",
  [eating]: "🍽",
  [eyeglasses]: "👓",
  [fireworks]: "🎆",
  [flower]: "🌻",
  [food]: "🍎",
  [golf]: "🏌️‍",
  [grass]: "🍃",
  [glasses]: "🕶",
  [hat]: "👒",
  [indoor]: "🏠",
  [livingroom]: "🏠",
  [meme]: "👍",
  [mountain]: "🌋",
  [nature]: "🏞",
  [night]: "🌃",
  [ocean]: "🌊",
  [office]: "💼",
  [oneormorepeople]: "👥",
  [outdoor]: "🚵",
  [peopleeating]: "🍽",
  [peopleplayingsport]: "🏀",
  [peoplesitting]: "⑁",
  [peoplesmiling]: "😂",
  [peoplestanding]: "🕴",
  [peopleonstage]: "🎤",
  [peopleplayingmusicalinstruments]: "🎸",
  [phone]: "📱",
  [plant]: "🌿",
  [playingamusicalinstrument]: "🎸",
  [selfie]: "🤳",
  [shoes]: "👡",
  [sitting]: "⑁",
  [sky]: "☀️",
  [skyscraper]: "🏙",
  [sleeping]: "😴",
  [smiling]: "😋",
  [snow]: "❄️",
  [stad] : "🕴",
  [stripes]: "📶",
  [suit]: "🕴",
  [sunglasses]: "🕶",
  [swimming]: "🏊",
  [table]: "🍽",
  [text]: "🔠",
  [tree]: "🌴",
  [twilight]: "🌃",
  [water]: "💧",
  [wedding]: "💒"
}

const show_facebook_cv_tags = function() {
  const TAG_PREFIX = "Image may contain: ";
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
        show_facebook_cv_tags();
    });
});

const config = { attributes: true, childList: true, characterData: false }

observer.observe(document.body, config);

show_facebook_cv_tags();
