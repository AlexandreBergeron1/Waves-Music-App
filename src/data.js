import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Adorable",
      cover: process.env.PUBLIC_URL + "/adorable.jpg",
      artist: "Jahy-Sama",
      audio: process.env.PUBLIC_URL + "/jahy-sama-adorable.mp3",
      color: ["#4f73fb", "#682c8c"],
      id: uuidv4(),
      active: true,
      favorite: true,
    },
    {
      name: "Alone",
      cover: process.env.PUBLIC_URL + "/alone.jpg",
      artist: "Alan Walker & Ava Max",
      audio:
        process.env.PUBLIC_URL +
        "/nightcore-alone-pt-ii-alan-walker-ava-max-lyrics.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Butterflies",
      cover: "http://www.alexandrebergeron1.com/images/butterflies.jpg",
      artist: "Zendaya",
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-butterflies.mp3",
      color: ["#f8f2fa", "#aa9ebe"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Do Me",
      cover: "http://www.alexandrebergeron1.com/images/do-me.jpg",
      artist: "Kim Petras",
      audio: "http://www.alexandrebergeron1.com/musique/nightcore-do-me.mp3",
      color: ["#d992b4", "#502f4c"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Everytime we touch",
      cover: "http://www.alexandrebergeron1.com/images/everytime-we-touch.jpg",
      artist: "Cascada",
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-everytime-we-touch-remix.mp3",
      color: ["#fa985b", "#aa3931"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "How do you do",
      cover: "http://www.alexandrebergeron1.com/images/how-do-you-do.jpg",
      artist: "Boom",
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-how-do-you-do-remix.mp3",
      color: ["#92849d", "#41455e"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "I Scare Myself",
      cover: "http://www.alexandrebergeron1.com/images/i-scare-myself.jpg",
      artist: "Beth Crowley",
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-i-scare-myself-beth-crowleylyrics.mp3",
      color: ["#c34225", "#a60c0a"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Let It Die",
      cover: "http://www.alexandrebergeron1.com/images/let-it-die.jpg",
      artist: "Rival",
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-let-it-die-lyrics.mp3",
      color: ["#504f54", "#0d1313"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Live A Lie",
      cover: "http://www.alexandrebergeron1.com/images/live-a-lie.jpg",
      artist: "Rival x Egzod (ft. Andreas Stone)",
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-live-a-lie-lyrics.mp3",
      color: ["#b3c7df", "#5f648a"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Lost In Japan",
      cover: "http://www.alexandrebergeron1.com/images/lost-in-japan.jpg",
      artist: "Shawn Mendes",
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-lost-in-japan.mp3",
      color: ["#edc9a5", "#9e2e54"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Love Like Mine",
      cover: "http://www.alexandrebergeron1.com/images/love-like-mine-2.jpg",
      artist: "Stela Cole",
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-love-like-mine-lyrics-stela-cole.mp3",
      color: ["#fb9ed5", "#d13f8a"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Mad At Disney",
      cover: "http://www.alexandrebergeron1.com/images/mad-at-disney.jpg",
      artist: "Avocuddle",
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-mad-at-disney-lyrics.mp3",
      color: ["#76899a", "#2c3532"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Naughty Naughty",
      cover: "http://www.alexandrebergeron1.com/images/naughty-naughty.jpg",
      artist: "Porcelain Black",
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-naughty-naughty-lyrics.mp3",
      color: ["#d7c4c6", "#a4264c"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "No Friends",
      artist: "Cadmium (ft. Rosendale)",
      cover: "http://www.alexandrebergeron1.com/images/no-friends.jpg",
      id: uuidv4(),
      active: false,
      favorite: false,
      color: ["#f1bd6a", "#b35242"],
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-no-friends-lyrics.mp3",
    },
    {
      name: "Oops, I Did It Again",
      artist: "Why Mona (Unlike Pluto x Joanna Jones",
      cover: "http://www.alexandrebergeron1.com/images/oups-i-did-it-again.jpg",
      id: uuidv4(),
      active: false,
      favorite: false,
      color: ["#c14194", "#3b3e47"],
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-oops-i-did-it-again-nv.mp3",
    },
    {
      name: "People I Don't Like",
      artist: "Upsahl",
      cover: "http://www.alexandrebergeron1.com/images/people-i-dont-like.jpg",
      id: uuidv4(),
      active: false,
      favorite: false,
      color: ["#cc747b", "#6d4d47"],
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-people-i-dont-like-upsahl.mp3",
    },
    {
      name: "Play Date",
      artist: "Melanie Martinez",
      cover: "http://www.alexandrebergeron1.com/images/play-date.jpg",
      id: uuidv4(),
      active: false,
      favorite: false,
      color: ["#fc7c3d", "#da2e20"],
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-play-date-lyrics.mp3",
    },
    {
      name: "Pretty Girl",
      artist: "Maggie Lindemann",
      cover: "http://www.alexandrebergeron1.com/images/pretty-girl.jpg",
      id: uuidv4(),
      active: false,
      favorite: false,
      color: ["#edc1b4", "#995f5d"],
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-pretty-girl.mp3",
    },
    {
      name: "Rumors",
      artist: "Neffex",
      cover: "http://www.alexandrebergeron1.com/images/rumors.jpg",
      id: uuidv4(),
      active: false,
      favorite: false,
      color: ["#aa9ef0", "#62ee51"],
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-neffex-rumors-lyrics.mp3",
    },
    {
      name: "Who's Laughing Now?",
      artist: "Ava Max",
      cover: "http://www.alexandrebergeron1.com/images/whos-laughing-now.jpg",
      id: uuidv4(),
      active: false,
      favorite: false,
      color: ["#e1c8b4", "#7951c3"],
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-whos-laughing-now.mp3",
    },
    {
      name: "Wrap Me In Plastic",
      artist: "Chromance",
      cover: "http://www.alexandrebergeron1.com/images/wrap-me-in-plastic.jpg",
      id: uuidv4(),
      active: false,
      favorite: false,
      color: ["#b86a94", "#b04e81"],
      audio:
        "http://www.alexandrebergeron1.com/musique/nightcore-wrap-me-in-plastic-lyrics.mp3",
    },
  ];
}

export default chillHop;
