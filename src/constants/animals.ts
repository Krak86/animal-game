import { Animal, GameMode } from "@/types";

// extract animal sound URLs from youtube using yout.com https://yout.com/video/?url=https://www.youtube.com/watch?v=Couu-KZ7O1c

// Background images
const bg1 = require("@assets/imgs/bg/bg1.jpg");
const bg2 = require("@assets/imgs/bg/bg2.jpg");
const bg3 = require("@assets/imgs/bg/bg3.jpg");
const bg4 = require("@assets/imgs/bg/bg4.jpg");
const bg5 = require("@assets/imgs/bg/bg5.jpg");
const bg6 = require("@assets/imgs/bg/bg6.jpg");
const bg7 = require("@assets/imgs/bg/bg7.jpg");
const bg8 = require("@assets/imgs/bg/bg8.jpg");
const bg9 = require("@assets/imgs/bg/bg9.jpg");
const bg10 = require("@assets/imgs/bg/bg10.jpg");

// Background images array for cycling
const BG_IMAGES = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10];

// Animal sound files
const dogSound = require("@assets/music/animals/Dog.mp3");
const catSound = require("@assets/music/animals/Cat.mp3");
const lionSound = require("@assets/music/animals/Lion.mp3");
const elephantSound = require("@assets/music/animals/Elephant.mp3");
const monkeySound = require("@assets/music/animals/Monkey.mp3");
const tigerSound = require("@assets/music/animals/Tiger.mp3");
const roosterSound = require("@assets/music/animals/Rooster.mp3");
const cowSound = require("@assets/music/animals/Cow.mp3");
const horseSound = require("@assets/music/animals/Horse.mp3");
const birdSound = require("@assets/music/animals/Bird.mp3");
const wolfSound = require("@assets/music/animals/Wolf.mp3");
const gooseSound = require("@assets/music/animals/Goose.mp3");
const donkeySound = require("@assets/music/animals/Donkey.mp3");
const bearSound = require("@assets/music/animals/Bear.mp3");
const parrotSound = require("@assets/music/animals/Parrot.mp3");
const buffaloSound = require("@assets/music/animals/Buffalo.mp3");
const turkeySound = require("@assets/music/animals/Turkey.mp3");
const peacockSound = require("@assets/music/animals/Peacock.mp3");
const beeSound = require("@assets/music/animals/Bee.mp3");
const gorillaSound = require("@assets/music/animals/Gorilla.mp3");
const leopardSound = require("@assets/music/animals/Leopard.mp3");
const sheepSound = require("@assets/music/animals/Sheep.mp3");
const chickenSound = require("@assets/music/animals/Chicken.mp3");
const pigSound = require("@assets/music/animals/Pig.mp3");
const goatSound = require("@assets/music/animals/Goat.mp3");
const bullSound = require("@assets/music/animals/Bull.mp3");
const duckSound = require("@assets/music/animals/Duck.mp3");
const snakeSound = require("@assets/music/animals/Snake.mp3");
const ravenSound = require("@assets/music/animals/Raven.mp3");
const owlSound = require("@assets/music/animals/Owl.mp3");
const batSound = require("@assets/music/animals/Bat.mp3");
const boarSound = require("@assets/music/animals/Boar.mp3");
const camelSound = require("@assets/music/animals/Camel.mp3");
const chameleonSound = require("@assets/music/animals/Chameleon.mp3");
const crocodileSound = require("@assets/music/animals/Crocodile.mp3");
const dolphinSound = require("@assets/music/animals/Dolphin.mp3");
const flamingoSound = require("@assets/music/animals/Flamingo.mp3");
const giraffeSound = require("@assets/music/animals/Giraffe.mp3");
const kangarooSound = require("@assets/music/animals/Kangaroo.mp3");
const ladybugSound = require("@assets/music/animals/Ladybug.mp3");
const llamaSound = require("@assets/music/animals/Llama.mp3");
const penguinSound = require("@assets/music/animals/Penguin.mp3");
const rabbitSound = require("@assets/music/animals/Rabbit.mp3");
const raccoonSound = require("@assets/music/animals/Raccoon.mp3");
const sealSound = require("@assets/music/animals/Seal.mp3");
const sharkSound = require("@assets/music/animals/Shark.mp3");
const swanSound = require("@assets/music/animals/Swan.mp3");
const whaleSound = require("@assets/music/animals/Whale.mp3");
const zebraSound = require("@assets/music/animals/Zebra.mp3");
const turtleSound = require("@assets/music/animals/Turtle.mp3");
const octopusSound = require("@assets/music/animals/Octopus.mp3");
const crabSound = require("@assets/music/animals/Crab.mp3");
const mooseSound = require("@assets/music/animals/Moose.mp3");
const caterpillarSound = require("@assets/music/animals/Caterpillar.mp3");
const badgerSound = require("@assets/music/animals/Badger.mp3");
const lobsterSound = require("@assets/music/animals/Lobster.mp3");
const scorpionSound = require("@assets/music/animals/Scorpion.mp3");
const snailSound = require("@assets/music/animals/Snail.mp3");
const antSound = require("@assets/music/animals/Ant.mp3");
const ramSound = require("@assets/music/animals/Ram.mp3");
const foxSound = require("@assets/music/animals/Fox.mp3");
const squirrelSound = require("@assets/music/animals/Squirrel.mp3");
const hedgehogSound = require("@assets/music/animals/Hedgehog.mp3");
const otterSound = require("@assets/music/animals/Otter.mp3");
const pandaSound = require("@assets/music/animals/Panda.mp3");
const koalaSound = require("@assets/music/animals/Koala.mp3");
const hippopotamusSound = require("@assets/music/animals/Hippopotamus.mp3");
const rhinocerosSound = require("@assets/music/animals/Rhinoceros.mp3");
const eagleSound = require("@assets/music/animals/Eagle.mp3");
const seagullSound = require("@assets/music/animals/Seagull.mp3");
const jellyfishSound = require("@assets/music/animals/Jellyfish.mp3");
const clownfishSound = require("@assets/music/animals/Clownfish.mp3");
const frogSound = require("@assets/music/animals/Frog.mp3");
const butterflySound = require("@assets/music/animals/Butterfly.mp3");
const grasshopperSound = require("@assets/music/animals/Grasshopper.mp3");
const spiderSound = require("@assets/music/animals/Spider.mp3");
const mosquitoSound = require("@assets/music/animals/Mosquito.mp3");
const mouseSound = require("@assets/music/animals/Mouse.mp3");
const slothSound = require("@assets/music/animals/Sloth.mp3");
const wormSound = require("@assets/music/animals/Worm.mp3");
const flySound = require("@assets/music/animals/Fly.mp3");
const beetleSound = require("@assets/music/animals/Beetle.mp3");
const skunkSound = require("@assets/music/animals/Skunk.mp3");
const beaverSound = require("@assets/music/animals/Beaver.mp3");
const cockroachSound = require("@assets/music/animals/Cockroach.mp3");

// animal 3d models
// const catGlb = require("@assets/glb/Cat.glb");
// const beeGlb = require("@assets/glb/Bee.glb");

// Animal data with placeholder images and sounds
export const ANIMALS: Animal[] = [
  {
    id: 1,
    name: "Dog",
    emoji: "🐕",
    image: BG_IMAGES[0], // bg1
    soundUrl: dogSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "dogDescription",
    images: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&q=80",
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&q=80",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&q=80",
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=800&q=80",
    ],
    videos: [
      "https://www.youtube.com/watch?v=6v4OgilckIc",
      "https://www.youtube.com/watch?v=MPV2METPeJU",
      "https://www.youtube.com/watch?v=Ip_uVTWfXyI",
    ],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Dog",
      uk: "https://uk.wikipedia.org/wiki/Собака",
      ru: "https://ru.wikipedia.org/wiki/Собака",
    },
  },
  {
    id: 2,
    name: "Cat",
    emoji: "🐈",
    image: BG_IMAGES[1], // bg2
    soundUrl: catSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "catDescription",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&q=80",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80",
      "https://images.unsplash.com/photo-1513451713350-dee890297c4a?w=800&q=80",
      "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: [
      "https://www.youtube.com/watch?v=I0fo6G1bha4",
      "https://www.youtube.com/watch?v=17f_81LcnKM",
      "https://www.youtube.com/watch?v=qeUM1WDoOGY",
    ],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Cat",
      uk: "https://uk.wikipedia.org/wiki/Кіт",
      ru: "https://ru.wikipedia.org/wiki/Кот",
    },
  },
  {
    id: 3,
    name: "Lion",
    emoji: "🦁",
    image: BG_IMAGES[2], // bg3
    soundUrl: lionSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "lionDescription",
    images: [
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80",
      "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80",
      "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1554990772-0bea55d510d5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=OMkEVX23BdM"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Lion",
      uk: "https://uk.wikipedia.org/wiki/Лев",
      ru: "https://ru.wikipedia.org/wiki/Лев",
    },
  },
  {
    id: 4,
    name: "Elephant",
    emoji: "🐘",
    image: BG_IMAGES[3], // bg4
    soundUrl: elephantSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "elephantDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1661810056990-57be781caa2d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544211412-2a32426e7fd5?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1575187105891-be9b5d30cecd?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=Aw6GkiCvcWs"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Elephant",
      uk: "https://uk.wikipedia.org/wiki/Слон",
      ru: "https://ru.wikipedia.org/wiki/Слон",
    },
  },
  {
    id: 5,
    name: "Giraffe",
    emoji: "🦒",
    image: BG_IMAGES[4], // bg5
    soundUrl: giraffeSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "giraffeDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1661813434310-98cca4c9135e?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604336755604-96ee6fa9f3f1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661810398337-1fddd20130c3?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=P_ckAbOr0r4"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Giraffe",
      uk: "https://uk.wikipedia.org/wiki/Жирафа",
      ru: "https://ru.wikipedia.org/wiki/Жираф",
    },
  },
  {
    id: 6,
    name: "Monkey",
    emoji: "🐒",
    image: BG_IMAGES[5], // bg6
    soundUrl: monkeySound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "monkeyDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1664299631876-f143dc691c4d?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605559911160-a3d95d213904?q=80&w=822&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=YfUMeMw1kY4"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Monkey",
      uk: "https://uk.wikipedia.org/wiki/Мавпи",
      ru: "https://ru.wikipedia.org/wiki/Обезьяна",
    },
  },
  {
    id: 7,
    name: "Penguin",
    emoji: "🐧",
    image: BG_IMAGES[6], // bg7
    soundUrl: penguinSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "penguinDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1661816797370-928a8749043c?q=80&w=1146&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1462888210965-cdf193fb74de?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551415923-a2297c7fda79?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664303314018-d59cbbb5b13d?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=woCIpMyyjxw"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Penguin",
      uk: "https://uk.wikipedia.org/wiki/Пінгвін",
      ru: "https://ru.wikipedia.org/wiki/Пингвин",
    },
  },
  {
    id: 8,
    name: "Zebra",
    emoji: "🦓",
    image: BG_IMAGES[7], // bg8
    soundUrl: zebraSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "zebraDescription",
    images: [
      "https://images.unsplash.com/photo-1526319238109-524eecb9b913?q=80&w=1648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1526095179574-86e545346ae6?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664302675980-74391b8023b5?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1220&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=cUh3iSdq8Is"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Zebra",
      uk: "https://uk.wikipedia.org/wiki/Зебра",
      ru: "https://ru.wikipedia.org/wiki/Зебра",
    },
  },
  {
    id: 9,
    name: "Tiger",
    emoji: "🐅",
    image: BG_IMAGES[8], // bg9
    soundUrl: tigerSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "tigerDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1661847643150-4e06569d2ec1?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615824996195-f780bba7cfab?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664302954356-a79b02fe66b8?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=ja4GNdU2vYc"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Tiger",
      uk: "https://uk.wikipedia.org/wiki/Тигр",
      ru: "https://ru.wikipedia.org/wiki/Тигр",
    },
  },
  {
    id: 10,
    name: "Rabbit",
    emoji: "🐰",
    image: BG_IMAGES[9], // bg10
    soundUrl: rabbitSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "rabbitDescription",
    images: [
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1609151354448-c4a53450c6e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1535241749838-299277b6305f?q=80&w=892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661808819761-878bc1a39dee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591561582301-7ce6588cc286?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=WtM4OW2qVjY"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Rabbit",
      uk: "https://uk.wikipedia.org/wiki/Кролик",
      ru: "https://ru.wikipedia.org/wiki/Кролик",
    },
  },
  {
    id: 11,
    name: "Rooster",
    emoji: "🐓",
    image: BG_IMAGES[0], // bg1
    soundUrl: roosterSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "roosterDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1664303893633-1544fcd8baed?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1628820584329-3c2d5dbfca17?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605490552919-bb0a239812c1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583510383754-35fc1d1eb598?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661963371598-060006de7103?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=K3CenN7d30Y"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Rooster",
      uk: "https://uk.wikipedia.org/wiki/Півень",
      ru: "https://ru.wikipedia.org/wiki/Петух",
    },
  },
  {
    id: 12,
    name: "Cow",
    emoji: "🐄",
    image: BG_IMAGES[1], // bg2
    soundUrl: cowSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "cowDescription",
    images: [
      "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1566040924976-f837330d1a5b?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661962510497-9505129083fa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1546552615-f8861d1aa798?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=KjmuBo8xoCU"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Cow",
      uk: "https://uk.wikipedia.org/wiki/Корова",
      ru: "https://ru.wikipedia.org/wiki/Корова",
    },
  },
  {
    id: 13,
    name: "Horse",
    emoji: "🐴",
    image: BG_IMAGES[2], // bg3
    soundUrl: horseSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "horseDescription",
    images: [
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1593179449458-e0d43d512551?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661885945007-e4871c8dec35?q=80&w=1837&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1547581849-38ba650ad0de?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=bHiZjBCnGbM"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Horse",
      uk: "https://uk.wikipedia.org/wiki/Кінь",
      ru: "https://ru.wikipedia.org/wiki/Лошадь",
    },
  },
  {
    id: 14,
    name: "Bird",
    emoji: "🐦",
    image: BG_IMAGES[3], // bg4
    soundUrl: birdSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "birdDescription",
    images: [
      "https://images.unsplash.com/photo-1486365227551-f3f90034a57c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1539664030485-a936c7d29c6e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1480044965905-02098d419e96?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=0AugFrZPP9U"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Bird",
      uk: "https://uk.wikipedia.org/wiki/Птах",
      ru: "https://ru.wikipedia.org/wiki/Птица",
    },
  },
  {
    id: 15,
    name: "Wolf",
    emoji: "🐺",
    image: BG_IMAGES[4], // bg5
    soundUrl: wolfSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "wolfDescription",
    images: [
      "https://images.unsplash.com/photo-1588167056547-c183313da47c?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1590420485404-f86d22b8abf8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564166174574-a9666f590437?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1572363420552-058bd41af8c7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1607350999170-b893fef057ea?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=YXMo5w9aMNs"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Wolf",
      uk: "https://uk.wikipedia.org/wiki/Вовк",
      ru: "https://ru.wikipedia.org/wiki/Волк",
    },
  },
  {
    id: 16,
    name: "Goose",
    emoji: "🪿",
    image: BG_IMAGES[5], // bg6
    soundUrl: gooseSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "gooseDescription",
    images: [
      "https://images.unsplash.com/photo-1564851375740-1052e619dcbc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580560400778-5d9fafd7fe18?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1570586790305-4f115cb439c6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661897340844-3920b9894070?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1484704324500-528d0ae4dc7d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=zkgwmPUak70"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Goose",
      uk: "https://uk.wikipedia.org/wiki/Гуска",
      ru: "https://ru.wikipedia.org/wiki/Гусь",
    },
  },
  {
    id: 17,
    name: "Donkey",
    emoji: "🫏",
    image: BG_IMAGES[6], // bg7
    soundUrl: donkeySound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "donkeyDescription",
    images: [
      "https://images.unsplash.com/photo-1568495732369-3a3f5b5290dd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1602081114407-99c109e945c4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1569506474518-ba135df90c6d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522231796108-23cbe9982a9c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1589604070897-fe1cccceca0d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=D0_fctsOcI0"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Donkey",
      uk: "https://uk.wikipedia.org/wiki/Віслюк",
      ru: "https://ru.wikipedia.org/wiki/Осёл",
    },
  },
  {
    id: 18,
    name: "Bear",
    emoji: "🐻",
    image: BG_IMAGES[7], // bg8
    soundUrl: bearSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "bearDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1661849977833-c18cd1c7e295?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661878515974-9455f7e283de?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=aAfXsxLSblM"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Bear",
      uk: "https://uk.wikipedia.org/wiki/Ведмідь",
      ru: "https://ru.wikipedia.org/wiki/Медведь",
    },
  },
  {
    id: 19,
    name: "Shark",
    emoji: "🦈",
    image: BG_IMAGES[8], // bg9
    soundUrl: sharkSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "sharkDescription",
    images: [
      "https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1531959870249-9f9b729efcf4?q=80&w=1684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1637380781238-9b703b0d2db0?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1704694214588-24f4bae4757b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1586115457457-b3753fe50cf1?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=4HGNqFdaD34"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Shark",
      uk: "https://uk.wikipedia.org/wiki/Акула",
      ru: "https://ru.wikipedia.org/wiki/Акула",
    },
  },
  {
    id: 20,
    name: "Turtle",
    emoji: "🐢",
    image: BG_IMAGES[9], // bg10
    soundUrl: turtleSound,
    modes: ["byName", "showAll", "bySound", "animalPairs", "secret"],
    description: "turtleDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1675432656807-216d786dd468?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591025207163-942350e47db2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1724311824020-d5aa35632c81?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1709483095301-2d1f3e95b1d4?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=5Rmv3nliwCs"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Turtle",
      uk: "https://uk.wikipedia.org/wiki/Черепаха",
      ru: "https://ru.wikipedia.org/wiki/Черепаха",
    },
  },
  {
    id: 21,
    name: "Octopus",
    emoji: "🐙",
    image: BG_IMAGES[0], // bg1
    soundUrl: octopusSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "octopusDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1723733104322-827186b5eb9e?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1547716752-9a0331effbef?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661964453866-1ee129a25078?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1473239683252-44d654a9756f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=EmcdhDUQzik"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Octopus",
      uk: "https://uk.wikipedia.org/wiki/Восьминіг",
      ru: "https://ru.wikipedia.org/wiki/Осьминог",
    },
  },
  {
    id: 22,
    name: "Crab",
    emoji: "🦀",
    image: BG_IMAGES[1], // bg2
    soundUrl: crabSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "crabDescription",
    images: [
      "https://images.unsplash.com/photo-1553659971-f01207815844?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580841129862-bc2a2d113c45?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1484715340216-6e77040b1852?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1561361398-b2bc9f049851?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1634600766237-ccf257a83fa7?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=YlEbg6fEKGI"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Crab",
      uk: "https://uk.wikipedia.org/wiki/Краб",
      ru: "https://ru.wikipedia.org/wiki/Краб",
    },
  },
  {
    id: 23,
    name: "Whale",
    emoji: "🐋",
    image: BG_IMAGES[2], // bg3
    soundUrl: whaleSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "whaleDescription",
    images: [
      "https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1698472505070-6d3b90afb530?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568430328012-21ed450453ea?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1698551007683-7226dc6f4e85?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1697730002225-fcdc0ba16854?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=0guNyC6cEJE"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Whale",
      uk: "https://uk.wikipedia.org/wiki/Кит",
      ru: "https://ru.wikipedia.org/wiki/Кит",
    },
  },
  {
    id: 24,
    name: "Dolphin",
    emoji: "🐬",
    image: BG_IMAGES[3], // bg4
    soundUrl: dolphinSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "dolphinDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1724654643848-ab19f6ec1c79?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1547382442-d17c21625a44?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591706405280-f03acb082051?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591706083700-cf05c6be75e2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=G7L4YzGAvMA"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Dolphin",
      uk: "https://uk.wikipedia.org/wiki/Дельфін",
      ru: "https://ru.wikipedia.org/wiki/Дельфин",
    },
  },
  {
    id: 25,
    name: "Snail",
    emoji: "🐌",
    image: BG_IMAGES[4], // bg5
    soundUrl: snailSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "snailDescription",
    images: [
      "https://images.unsplash.com/photo-1533177243638-dd485701f717?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1567161291513-d8d58620c5ca?q=80&w=1692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579470785623-3d2c229f4fc6?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1695903431964-23ba338ee1e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596708635238-aab8d249a455?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=kKZNdhNyYnc"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Snail",
      uk: "https://uk.wikipedia.org/wiki/Равлик",
      ru: "https://ru.wikipedia.org/wiki/Улитка",
    },
  },
  {
    id: 26,
    name: "Ant",
    emoji: "🐜",
    image: BG_IMAGES[5], // bg6
    soundUrl: antSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "antDescription",
    images: [
      "https://images.unsplash.com/photo-1588470045344-4393b295297c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1562586299-9b3c4a30e99c?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1611748939902-060e1ae99f32?q=80&w=1628&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1592331753290-91e0de78233f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1718465545555-56eb0d1624cf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=qu0HN9rYtIw"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Ant",
      uk: "https://uk.wikipedia.org/wiki/Мураха",
      ru: "https://ru.wikipedia.org/wiki/Муравей",
    },
  },
  {
    id: 27,
    name: "Ladybug",
    emoji: "🐞",
    image: BG_IMAGES[6], // bg7
    soundUrl: ladybugSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "ladybugDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1723013532532-964a36800dcf?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1508232926939-f05374492c7b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574950973508-0685625d0aee?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1526773357673-2d4e8116d497?q=80&w=1246&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1634463111954-df9018cb119e?q=80&w=1754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=ws_D5nXOAJg"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Ladybug",
      uk: "https://uk.wikipedia.org/wiki/Божа_корівка",
      ru: "https://ru.wikipedia.org/wiki/Божья_коровка",
    },
  },
  {
    id: 28,
    name: "Crocodile",
    emoji: "🐊",
    image: BG_IMAGES[7], // bg8
    soundUrl: crocodileSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "crocodileDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1664302983066-8ea0ffd6af05?q=80&w=818&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605649461784-7d5e4df56c97?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1570308514141-48b0e0852591?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595433409683-943ded8e7b1d?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=ycAnNy5cbKo"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Crocodile",
      uk: "https://uk.wikipedia.org/wiki/Крокодил",
      ru: "https://ru.wikipedia.org/wiki/Крокодил",
    },
  },
  {
    id: 29,
    name: "Bat",
    emoji: "🦇",
    image: BG_IMAGES[8], // bg9
    soundUrl: batSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "batDescription",
    images: [
      "https://images.unsplash.com/photo-1629100393327-a3a1550354fd?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1587455989280-1cef2509a39a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1495741770155-e4137dcb83ec?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1538630834610-87751cd747f4?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1658663072432-b1f76adf30af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=p08Y0oRAX3g"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Bat",
      uk: "https://uk.wikipedia.org/wiki/Кажан",
      ru: "https://ru.wikipedia.org/wiki/Летучая_мышь",
    },
  },
  {
    id: 30,
    name: "Parrot",
    emoji: "🦜",
    image: BG_IMAGES[9], // bg10
    soundUrl: parrotSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "parrotDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1673454201378-3867e051dca7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=850&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544923408-75c5cef46f14?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512819432727-dbcb57a06f13?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=m3-lHec4C3g"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Parrot",
      uk: "https://uk.wikipedia.org/wiki/Папуга",
      ru: "https://ru.wikipedia.org/wiki/Попугай",
    },
  },
  {
    id: 31,
    name: "Moose",
    emoji: "🦌",
    image: BG_IMAGES[0], // bg1
    soundUrl: mooseSound,
    modes: ["byName", "showAll", "bySound", "animalPairs", "secret"],
    description: "mooseDescription",
    images: [
      "https://images.unsplash.com/photo-1549471013-3364d7220b75?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1603781194892-78a8e6f8b77f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1602391950852-88bf9be72b24?q=80&w=1654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1582002834723-2256d33da100?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1510992107199-e5224f959d6c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=F3yse7vTWrw"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Moose",
      uk: "https://uk.wikipedia.org/wiki/Лось",
      ru: "https://ru.wikipedia.org/wiki/Лось",
    },
  },
  {
    id: 32,
    name: "Llama",
    emoji: "🦙",
    image: BG_IMAGES[1], // bg2
    soundUrl: llamaSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "llamaDescription",
    images: [
      "https://images.unsplash.com/photo-1589182337358-2cb63099350c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1552474705-dd8183e00901?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617096000801-bd71df8d6d8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1694542947673-9e1c61387343?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511885663737-eea53f6d6187?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=KYHBWkyZnfk"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Llama",
      uk: "https://uk.wikipedia.org/wiki/Лама",
      ru: "https://ru.wikipedia.org/wiki/Лама",
    },
  },
  {
    id: 33,
    name: "Buffalo",
    emoji: "🐃",
    image: BG_IMAGES[2], // bg3
    soundUrl: buffaloSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "buffaloDescription",
    images: [
      "https://images.unsplash.com/photo-1603696861627-db79cf52fecb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1603966474815-85d21585ffb9?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1662610014136-252d33d76b58?q=80&w=1766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/flagged/photo-1575440172687-fdd4ddf4285f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583753728966-92341099e359?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=nxYatPDp8PA"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Buffalo",
      uk: "https://uk.wikipedia.org/wiki/Буйвол",
      ru: "https://ru.wikipedia.org/wiki/Буйвол",
    },
  },
  {
    id: 34,
    name: "Turkey",
    emoji: "🦃",
    image: BG_IMAGES[3], // bg4
    soundUrl: turkeySound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "turkeyDescription",
    images: [
      "https://images.unsplash.com/photo-1610847188112-fda7a87b39a3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574387313309-7c2292978b8c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543069422-15ebb2128804?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1560011961-4ab41261de01?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1585779789236-e07efb099e2b?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=KXhesrnIcCY"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Turkey",
      uk: "https://uk.wikipedia.org/wiki/Індик",
      ru: "https://ru.wikipedia.org/wiki/Индюк",
    },
  },
  {
    id: 35,
    name: "Peacock",
    emoji: "🦚",
    image: BG_IMAGES[4], // bg5
    soundUrl: peacockSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "peacockDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1694270553677-22680efa4d56?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1536514900905-0d5511b9d489?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1572877183903-f6f33bbfa7c5?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1548148491-90655471726c?q=80&w=1253&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1546008523-a2840156b297?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=TTwT1-TpFhE"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Peacock",
      uk: "https://uk.wikipedia.org/wiki/Павич",
      ru: "https://ru.wikipedia.org/wiki/Павлин",
    },
  },
  {
    id: 36,
    name: "Swan",
    emoji: "🦢",
    image: BG_IMAGES[5], // bg6
    soundUrl: swanSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "swanDescription",
    images: [
      "https://images.unsplash.com/photo-1588485256313-f021c74731f1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1608584808621-e8fce62d9318?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1625518413254-f16ceb1ffe7d?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1577897503253-ef34a3a08e6a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1472483160703-a6459053c1a3?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=NcuA3Dd63VY"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Swan",
      uk: "https://uk.wikipedia.org/wiki/Лебідь",
      ru: "https://ru.wikipedia.org/wiki/Лебедь",
    },
  },
  {
    id: 37,
    name: "Bee",
    emoji: "🐝",
    image: BG_IMAGES[6], // bg7
    soundUrl: beeSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "beeDescription",
    images: [
      "https://images.unsplash.com/photo-1568526381923-caf3fd520382?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601039727490-458d3e7f2799?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1584709868343-32cf410d1861?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1481595357459-84468f6eeaac?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1586106901017-b2d588f9c458?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=UNroEwFxh6I"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Bee",
      uk: "https://uk.wikipedia.org/wiki/Бджола",
      ru: "https://ru.wikipedia.org/wiki/Пчела",
    },
  },
  {
    id: 38,
    name: "Caterpillar",
    emoji: "🐛",
    image: BG_IMAGES[7], // bg8
    soundUrl: caterpillarSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "caterpillarDescription",
    images: [
      "https://images.unsplash.com/photo-1598431429388-c561cb614d2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1518648949339-298b03f37f3b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1531347662497-898347caa8be?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618805712380-282512bcaf71?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1611049754721-c5428b272265?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=4JoEWdV7tpQ"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Caterpillar",
      uk: "https://uk.wikipedia.org/wiki/Гусінь",
      ru: "https://ru.wikipedia.org/wiki/Гусеница",
    },
  },
  {
    id: 39,
    name: "Scorpion",
    emoji: "🦂",
    image: BG_IMAGES[8], // bg9
    soundUrl: scorpionSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "scorpionDescription",
    images: [
      "https://images.unsplash.com/photo-1618479995657-6e2fbb7d5480?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1700488217112-5a174f599624?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1722981431714-c9c149a11548?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618752362049-bcc57fb5ddb0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1590732468359-54a275f4273e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=gzszFCxFKNo"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Scorpion",
      uk: "https://uk.wikipedia.org/wiki/Скорпіон",
      ru: "https://ru.wikipedia.org/wiki/Скорпион",
    },
  },
  {
    id: 40,
    name: "Lobster",
    emoji: "🦞",
    image: BG_IMAGES[9], // bg10
    soundUrl: lobsterSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "lobsterDescription",
    images: [
      "https://images.unsplash.com/photo-1655697253644-63c270874bb7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1559814048-149b70765d47?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1530511960699-9d7ccd279040?q=80&w=1694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1707995548175-a7613effbe32?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1707995546403-a8cb996e5932?q=80&w=1822&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=2PGHZDnZ0Mc"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Lobster",
      uk: "https://uk.wikipedia.org/wiki/Омар",
      ru: "https://ru.wikipedia.org/wiki/Омар",
    },
  },
  {
    id: 41,
    name: "Seal",
    emoji: "🦭",
    image: BG_IMAGES[0], // bg1
    soundUrl: sealSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "sealDescription",
    images: [
      "https://images.unsplash.com/photo-1565413294262-fa587c396965?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1493579706121-60161eb06eeb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618075254460-429d47b887c7?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618075254478-850bc1729c17?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1559157693-c34156e0f8c3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=BG_zMQtYB_E"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Seal",
      uk: "https://uk.wikipedia.org/wiki/Тюлень",
      ru: "https://ru.wikipedia.org/wiki/Тюлень",
    },
  },
  {
    id: 42,
    name: "Raccoon",
    emoji: "🦝",
    image: BG_IMAGES[1], // bg2
    soundUrl: raccoonSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "raccoonDescription",
    images: [
      "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615812214207-34e3be6812df?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601247387326-f8bcb5a234d4?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1691874135454-c063836f70dd?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1628044582571-1b2615cc451a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=YGGzNi50Jgs"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Raccoon",
      uk: "https://uk.wikipedia.org/wiki/Єнот",
      ru: "https://ru.wikipedia.org/wiki/Енот",
    },
  },
  {
    id: 43,
    name: "Badger",
    emoji: "🦡",
    image: BG_IMAGES[2], // bg3
    soundUrl: badgerSound,
    modes: ["byName", "showAll", "bySound", "animalPairs", "secret"],
    description: "badgerDescription",
    images: [
      "https://images.unsplash.com/photo-1563016115-85abfc230672?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1563136073-32c6255d1e84?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1590126974110-d8cb66eadbc7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1590695930875-0fcf4a30f4d0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1590683691443-7c562f69f077?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=V-aqiMLlI1Q"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Badger",
      uk: "https://uk.wikipedia.org/wiki/Барсук",
      ru: "https://ru.wikipedia.org/wiki/Барсук",
    },
  },
  {
    id: 44,
    name: "Boar",
    emoji: "🐗",
    image: BG_IMAGES[3], // bg4
    soundUrl: boarSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "boarDescription",
    images: [
      "https://images.unsplash.com/photo-1545426908-a67f44ed0291?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1609264717772-95f51ed8f90c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1721509615486-d0e496d50e9c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1620122504822-a33f06836ff0?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1698720870452-3b411b55d81d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=Oyhk6kRAJW0"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Wild_boar",
      uk: "https://uk.wikipedia.org/wiki/Кабан",
      ru: "https://ru.wikipedia.org/wiki/Кабан",
    },
  },
  {
    id: 45,
    name: "Camel",
    emoji: "🐪",
    image: BG_IMAGES[4], // bg5
    soundUrl: camelSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "camelDescription",
    images: [
      "https://images.unsplash.com/photo-1598113972215-96c018fb1a0b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616599458812-d7c86e0add7e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664301183877-85b1070c12b8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543458104-7d567484d770?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1700299926955-d68c16ba107b?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=_z7kpemfqlg"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Camel",
      uk: "https://uk.wikipedia.org/wiki/Верблюд",
      ru: "https://ru.wikipedia.org/wiki/Верблюд",
    },
  },
  {
    id: 46,
    name: "Chameleon",
    emoji: "🦎",
    image: BG_IMAGES[5], // bg6
    soundUrl: chameleonSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "chameleonDescription",
    images: [
      "https://images.unsplash.com/photo-1617540021016-72023b487e99?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/flagged/photo-1557839389-8512f2e2ab97?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1656428379377-98039ab9695a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1570116908822-ae64583bac19?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621150538602-2351d4f7dc2f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=KJtaIqahi3I"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Chameleon",
      uk: "https://uk.wikipedia.org/wiki/Хамелеон",
      ru: "https://ru.wikipedia.org/wiki/Хамелеон",
    },
  },
  {
    id: 47,
    name: "Flamingo",
    emoji: "🦩",
    image: BG_IMAGES[6], // bg7
    soundUrl: flamingoSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "flamingoDescription",
    images: [
      "https://images.unsplash.com/photo-1543260775-945c562403b3?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1629394661462-13ea8fe156ef?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1539418561314-565804e349c0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661822053999-b704e1019b51?q=80&w=748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595344253433-6baa8e8798f9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=wvmHW5_1jN4"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Flamingo",
      uk: "https://uk.wikipedia.org/wiki/Фламінго",
      ru: "https://ru.wikipedia.org/wiki/Фламинго",
    },
  },
  {
    id: 48,
    name: "Gorilla",
    emoji: "🦍",
    image: BG_IMAGES[7], // bg8
    soundUrl: gorillaSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "gorillaDescription",
    images: [
      "https://images.unsplash.com/photo-1581281863883-2469417a1668?q=80&w=902&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1546146020-c84c6bf355bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581252789066-5110779bda1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1557218825-334e575bcc38?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1509897739002-791fa79aac9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=rHhSCO5-3Pg"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Gorilla",
      uk: "https://uk.wikipedia.org/wiki/Горила",
      ru: "https://ru.wikipedia.org/wiki/Горилла",
    },
  },
  {
    id: 49,
    name: "Kangaroo",
    emoji: "🦘",
    image: BG_IMAGES[8], // bg9
    soundUrl: kangarooSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "kangarooDescription",
    images: [
      "https://images.unsplash.com/photo-1575699914911-0027c7b95fb6?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1529451310546-178d75816ffc?q=80&w=748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551270988-87c5ea57cdfe?q=80&w=1590&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664303213315-aa35bec4c95e?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568198972020-de1dab9ac71a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=WCcLMNcWZOc"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Kangaroo",
      uk: "https://uk.wikipedia.org/wiki/Кенгуру",
      ru: "https://ru.wikipedia.org/wiki/Кенгуру",
    },
  },
  {
    id: 50,
    name: "Leopard",
    emoji: "🐆",
    image: BG_IMAGES[9], // bg10
    soundUrl: leopardSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "leopardDescription",
    images: [
      "https://images.unsplash.com/photo-1544985361-b420d7a77043?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1629820133762-24189e3c2b13?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1566708627877-859df13ae63e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=0OVfjuf-U-E"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Leopard",
      uk: "https://uk.wikipedia.org/wiki/Леопард",
      ru: "https://ru.wikipedia.org/wiki/Леопард",
    },
  },
  {
    id: 51,
    name: "Sheep",
    emoji: "🐑",
    image: BG_IMAGES[0], // bg1
    soundUrl: sheepSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "sheepDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1666777246850-e18916172de7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1575014912260-91c2b5ad7441?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1554755209-85e44182e019?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661811804102-0da6840d7327?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=yelEaTDOO2Q"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Sheep",
      uk: "https://uk.wikipedia.org/wiki/Вівця",
      ru: "https://ru.wikipedia.org/wiki/Овца",
    },
  },
  {
    id: 52,
    name: "Chicken",
    emoji: "🐥",
    image: BG_IMAGES[1], // bg2
    soundUrl: chickenSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "chickenDescription",
    images: [
      "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1556316918-880f9e893822?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1588597989061-b60ad0eefdbf?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664971411530-9d2199405d53?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=R2LYMInJdE8"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Chicken",
      uk: "https://uk.wikipedia.org/wiki/Курка",
      ru: "https://ru.wikipedia.org/wiki/Курица",
    },
  },
  {
    id: 53,
    name: "Pig",
    emoji: "🐖",
    image: BG_IMAGES[2], // bg3
    soundUrl: pigSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "pigDescription",
    images: [
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580682777666-24a7b3024e24?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1587213128862-80345e23a71a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1567201080580-bfcc97dae346?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541689221361-ad95003448dc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=BVAIImxcv4g"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Pig",
      uk: "https://uk.wikipedia.org/wiki/Свиня",
      ru: "https://ru.wikipedia.org/wiki/Свинья",
    },
  },
  {
    id: 54,
    name: "Goat",
    emoji: "🐐",
    image: BG_IMAGES[3], // bg4
    soundUrl: goatSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "goatDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1664304299664-a8e2e2f80290?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1588466585717-f8041aec7875?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604076150017-48b528308aa3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1573578160998-4f4c7b023aec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=RG9TMn1FJzc"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Goat",
      uk: "https://uk.wikipedia.org/wiki/Коза",
      ru: "https://ru.wikipedia.org/wiki/Коза",
    },
  },
  {
    id: 55,
    name: "Bull",
    emoji: "🐂",
    image: BG_IMAGES[4], // bg5
    soundUrl: bullSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "bullDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1661835557655-99a912d26132?q=80&w=748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1439434768192-c60615c1b3c8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551606712-b0341396cc87?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1603966474815-85d21585ffb9?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1562360742-318972306207?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=CImBgOuc7yw"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Bull",
      uk: "https://uk.wikipedia.org/wiki/Бик",
      ru: "https://ru.wikipedia.org/wiki/Бык",
    },
  },
  {
    id: 56,
    name: "Duck",
    emoji: "🦆",
    image: BG_IMAGES[5], // bg6
    soundUrl: duckSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "duckDescription",
    images: [
      "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1563409236302-8442b5e644df?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1585533530535-2f4236949d08?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1459682687441-7761439a709d?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1578956919791-af7615c94b90?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=FIqh1-JuxrU"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Duck",
      uk: "https://uk.wikipedia.org/wiki/Качка",
      ru: "https://ru.wikipedia.org/wiki/Утка",
    },
  },
  {
    id: 57,
    name: "Snake",
    emoji: "🐍",
    image: BG_IMAGES[1], // bg2
    soundUrl: snakeSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "snakeDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1661897154120-5b27cd6a0bd5?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1633081528930-91c8cc07f3d7?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1472645977521-95bbf4f0a748?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568204960342-8612e15f9d1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1638855370496-1ec25682adbe?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=RKTnxc9sfSQ"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Snake",
      uk: "https://uk.wikipedia.org/wiki/Змія",
      ru: "https://ru.wikipedia.org/wiki/Змея",
    },
  },
  {
    id: 58,
    name: "Raven",
    emoji: "🐦‍⬛",
    image: BG_IMAGES[2], // bg3
    soundUrl: ravenSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "ravenDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1673491310188-13caeef2c5cd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1682467612877-f9b5e55ff2af?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1433888376991-1297486ba3f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1610961388965-129b15e46a2c?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1673491310534-ea8af31c93ee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=D6s3u0624P8"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Raven",
      uk: "https://uk.wikipedia.org/wiki/Ворон",
      ru: "https://ru.wikipedia.org/wiki/Ворон",
    },
  },
  {
    id: 59,
    name: "Owl",
    emoji: "🦉",
    image: BG_IMAGES[3], // bg4
    soundUrl: owlSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "owlDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1664304409780-6d31241e9058?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553264701-d138db4fd5d4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516233758813-a38d024919c5?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1558945657-484aa38065ec?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=bt3X8MJgJWo"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Owl",
      uk: "https://uk.wikipedia.org/wiki/Сова",
      ru: "https://ru.wikipedia.org/wiki/Сова",
    },
  },
  {
    id: 60,
    name: "Ram",
    emoji: "🐏",
    image: BG_IMAGES[4],
    soundUrl: ramSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "ramDescription",
    images: [
      "https://images.unsplash.com/photo-1517217759187-c28c5cbb51e3?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664304299664-a8e2e2f80290?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1490739043913-239b6cdf4084?q=80&w=1839&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1561049958-dfec7585efeb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1507668534048-612633783b70?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=V__T34iqNOA"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Ram_(sheep)",
      uk: "https://uk.wikipedia.org/wiki/Баран",
      ru: "https://ru.wikipedia.org/wiki/Баран",
    },
  },
  {
    id: 61,
    name: "Fox",
    emoji: "🦊",
    image: BG_IMAGES[6],
    soundUrl: foxSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "foxDescription",
    images: [
      "https://images.unsplash.com/photo-1644125003076-ce465d331769?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621206593424-6e4e8f6336e9?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=D2SoGHFM18I"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Fox",
      uk: "https://uk.wikipedia.org/wiki/Лисиця",
      ru: "https://ru.wikipedia.org/wiki/Лисица",
    },
  },
  {
    id: 62,
    name: "Squirrel",
    emoji: "🐿️",
    image: BG_IMAGES[7],
    soundUrl: squirrelSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "squirrelDescription",
    images: [
      "https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1590079015089-875baa76cc8d?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1507666405895-422eee7d517f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542382689-217623cad37c?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1470130623320-9583a8d06241?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=xrjBD-PpecM"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Squirrel",
      uk: "https://uk.wikipedia.org/wiki/Білка",
      ru: "https://ru.wikipedia.org/wiki/Белка",
    },
  },
  {
    id: 63,
    name: "Hedgehog",
    emoji: "🦔",
    image: BG_IMAGES[8],
    soundUrl: hedgehogSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "hedgehogDescription",
    images: [
      "https://plus.unsplash.com/premium_photo-1723874396899-681323b389e1?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568431477192-52bb13a55088?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605369179729-4036b4d829cb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605369179814-cfc635981c03?q=80&w=1676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1594546927369-f4f587649acc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=LHXwo16i5mA"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Hedgehog",
      uk: "https://uk.wikipedia.org/wiki/Їжак",
      ru: "https://ru.wikipedia.org/wiki/Ёж",
    },
  },
  {
    id: 64,
    name: "Otter",
    emoji: "🦦",
    image: BG_IMAGES[9],
    soundUrl: otterSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "otterDescription",
    images: [
      "https://images.unsplash.com/photo-1633967920376-33b2d94f091f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1720198270654-dbe3ca4b838f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595854443827-9d1a1ae30f0d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632755588732-6797a85f6d4b?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553112295-4e7646a96859?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=SIWbjgPYcJY"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Otter",
      uk: "https://uk.wikipedia.org/wiki/Видра",
      ru: "https://ru.wikipedia.org/wiki/Выдра",
    },
  },
  {
    id: 65,
    name: "Panda",
    emoji: "🐼",
    image: BG_IMAGES[0],
    soundUrl: pandaSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "pandaDescription",
    images: [
      "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1625859043880-56acbcb6a6ac?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1560343787-b90cb337028e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1570288685369-f7305163d0e3?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=dqT-UlYlg1s"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Giant_panda",
      uk: "https://uk.wikipedia.org/wiki/Велика_панда",
      ru: "https://ru.wikipedia.org/wiki/Большая_панда",
    },
  },
  {
    id: 66,
    name: "Koala",
    emoji: "🐨",
    image: BG_IMAGES[1],
    soundUrl: koalaSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "koalaDescription",
    images: [
      "https://images.unsplash.com/photo-1579972383667-4894c883d674?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579649554660-463ed1d72831?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591083896596-6b9f15f05a71?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1519562990232-845beca99938?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=oI3ADcDH0Uc"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Koala",
      uk: "https://uk.wikipedia.org/wiki/Коала",
      ru: "https://ru.wikipedia.org/wiki/Коала",
    },
  },
  {
    id: 67,
    name: "Hippopotamus",
    emoji: "🦛",
    image: BG_IMAGES[2],
    soundUrl: hippopotamusSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "hippopotamusDescription",
    images: [
      "https://images.unsplash.com/photo-1608573755719-bf29c3a964c9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1619535211143-8e209a7b662c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499842340257-55ccb7a02645?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1562426772-f7b1d159764b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1712642421888-b3de5073231f?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=hGpItpIlLkc"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Hippopotamus",
      uk: "https://uk.wikipedia.org/wiki/Бегемот",
      ru: "https://ru.wikipedia.org/wiki/Бегемот",
    },
  },
  {
    id: 68,
    name: "Rhinoceros",
    emoji: "🦏",
    image: BG_IMAGES[3],
    soundUrl: rhinocerosSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "rhinocerosDescription",
    images: [
      "https://images.unsplash.com/photo-1598894000396-bc30e0996899?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624098826104-6c617638c794?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1672586658825-e653341241fc?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661849675370-3852cfa61f1a?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=NOgl1nW0NtA"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Rhinoceros",
      uk: "https://uk.wikipedia.org/wiki/Носоріг",
      ru: "https://ru.wikipedia.org/wiki/Носорог",
    },
  },
  {
    id: 69,
    name: "Eagle",
    emoji: "🦅",
    image: BG_IMAGES[5],
    soundUrl: eagleSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "eagleDescription",
    images: [
      "https://images.unsplash.com/photo-1531884070720-875c7622d4c6?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1557401622-cfc0aa5d146c?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515865644861-8bedc4fb8344?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1628703117067-fb7c9c20946e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=2P0VCMYZenw"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Eagle",
      uk: "https://uk.wikipedia.org/wiki/Орел",
      ru: "https://ru.wikipedia.org/wiki/Орёл",
    },
  },
  {
    id: 70,
    name: "Seagull",
    emoji: "🕊️",
    image: BG_IMAGES[7],
    soundUrl: seagullSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "seagullDescription",
    images: [
      "https://images.unsplash.com/photo-1567413010197-7b436a170e8d?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/reserve/u3x7cekkS16ajjtJcb5L_DSC_5869.jpg?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675403509143-8e567e28f1ea?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574105079640-5b3ebd6fb7a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617706146619-7f6fb9b79ff3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=sr7G3E_aTsE"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Gull",
      uk: "https://uk.wikipedia.org/wiki/Мартинові",
      ru: "https://ru.wikipedia.org/wiki/Чайка",
    },
  },
  {
    id: 71,
    name: "Jellyfish",
    emoji: "🪼",
    image: BG_IMAGES[2],
    soundUrl: jellyfishSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "jellyfishDescription",
    images: [
      "https://images.unsplash.com/photo-1495012379376-194a416fcc5f?q=80&w=850&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1508311603478-ce574376c3cf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1684992858411-3e3ddf37c4c9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543007168-5fa9b3c5f5fb?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=9z8ujpPgUjI"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Jellyfish",
      uk: "https://uk.wikipedia.org/wiki/Медуза",
      ru: "https://ru.wikipedia.org/wiki/Медуза",
    },
  },
  {
    id: 72,
    name: "Clownfish",
    emoji: "🐠",
    image: BG_IMAGES[3],
    soundUrl: clownfishSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "clownfishDescription",
    images: [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595503240812-7286dafaddc1?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1656410454147-9ec7b1262942?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1679510995006-d3eac6669c82?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722482312877-dda06fc3c23d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=rn6R4ncd2OU"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Amphiprioninae",
      uk: "https://uk.wikipedia.org/wiki/Амфіпріони",
      ru: "https://ru.wikipedia.org/wiki/Амфиприоны",
    },
  },
  {
    id: 73,
    name: "Frog",
    emoji: "🐸",
    image: BG_IMAGES[4],
    soundUrl: frogSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "frogDescription",
    images: [
      "https://images.unsplash.com/photo-1496070242169-b672c576566b?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1559253664-ca249d4608c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1545006398-2cf47cd87b90?q=80&w=730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1598537179958-687e6cc625fb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1518737496070-5bab26f59b3f?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=z20WyucV9hk"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Frog",
      uk: "https://uk.wikipedia.org/wiki/Жаба",
      ru: "https://ru.wikipedia.org/wiki/Лягушка",
    },
  },
  {
    id: 74,
    name: "Butterfly",
    emoji: "🦋",
    image: BG_IMAGES[5],
    soundUrl: butterflySound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "butterflyDescription",
    images: [
      "https://images.unsplash.com/photo-1560263816-d704d83cce0f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599631438215-75bc2640feb8?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533048324814-79b0a31982f1?q=80&w=936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564514476902-542f8c30121e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678483692858-d9ca6e9c67f9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=kVm5k99PnBk"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Butterfly",
      uk: "https://uk.wikipedia.org/wiki/Метелик",
      ru: "https://ru.wikipedia.org/wiki/Бабочка",
    },
  },
  {
    id: 75,
    name: "Grasshopper",
    emoji: "🦗",
    image: BG_IMAGES[6],
    soundUrl: grasshopperSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "grasshopperDescription",
    images: [
      "https://images.unsplash.com/photo-1509967733342-437077d8e41a?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1585385697895-ec4603b691cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1620191309281-ef74ff4d6ede?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1546032571-e11bc2607b92?q=80&w=1710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1722925460512-8d7abeba8ab5?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=YBt6s7CHFQA"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Grasshopper",
      uk: "https://uk.wikipedia.org/wiki/Коник_(комаха)",
      ru: "https://ru.wikipedia.org/wiki/Кузнечик",
    },
  },
  {
    id: 76,
    name: "Spider",
    emoji: "🕷️",
    image: BG_IMAGES[7],
    soundUrl: spiderSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "spiderDescription",
    images: [
      "https://images.unsplash.com/photo-1659639620341-8f3a5134e8c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1728056952132-9c0f9a58b7f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1687358645329-b757762de781?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599049883502-2067f1d23ac4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565752886107-78e1cb83a562?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=uHyYtcMZYGs"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Spider",
      uk: "https://uk.wikipedia.org/wiki/Павуки",
      ru: "https://ru.wikipedia.org/wiki/Паук",
    },
  },
  {
    id: 77,
    name: "Mosquito",
    emoji: "🦟",
    image: BG_IMAGES[8],
    soundUrl: mosquitoSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "mosquitoDescription",
    images: [
      "https://images.unsplash.com/photo-1707943768453-7850f916ebde?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1698566445612-b6e552371334?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1647071106724-3b5efb6a22f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1635496471665-4e67e0e87399?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1707943768493-70241590b0e1?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=sjV0JpIAH78"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Mosquito",
      uk: "https://uk.wikipedia.org/wiki/Комар",
      ru: "https://ru.wikipedia.org/wiki/Комар",
    },
  },
  {
    id: 78,
    name: "Mouse",
    emoji: "🐭",
    image: BG_IMAGES[9],
    soundUrl: mouseSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "mouseDescription",
    images: [
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624116518496-993146f67f4a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1606118858477-9a8f9dfb257a?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1626456246585-13acf937be12?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=l70UhhNalqA"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Mouse",
      uk: "https://uk.wikipedia.org/wiki/Миша",
      ru: "https://ru.wikipedia.org/wiki/Мышь",
    },
  },
  {
    id: 79,
    name: "Sloth",
    emoji: "🦥",
    image: BG_IMAGES[0],
    soundUrl: slothSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "slothDescription",
    images: [
      "https://images.unsplash.com/photo-1509243271451-2b84555736ad?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1718122259770-ebbe7d7f9f7f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604165645922-eb8fdc7d84ee?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1449027627419-e46b1154169d?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1728847267854-7c7c9f95a281?q=80&w=970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=DpV4k3Edr-I"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Sloth",
      uk: "https://uk.wikipedia.org/wiki/Лінивець",
      ru: "https://ru.wikipedia.org/wiki/Ленивец",
    },
  },
  {
    id: 80,
    name: "Worm",
    emoji: "🪱",
    image: BG_IMAGES[1],
    soundUrl: wormSound,
    modes: ["byName", "showAll", "animalPairs", "secret"],
    description: "wormDescription",
    images: [
      "https://images.unsplash.com/photo-1708191225844-44ba7ab8b71f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580974563942-76580268810f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1589064388904-d2c95a4d0e76?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1612960841830-7958134b3655?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664304479796-f8518e45409d?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=c9Gx1-xRXuM"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Worm",
      uk: "https://uk.wikipedia.org/wiki/Черв%27як",
      ru: "https://ru.wikipedia.org/wiki/Червь",
    },
  },
  {
    id: 81,
    name: "Fly",
    emoji: "🪰",
    image: BG_IMAGES[2],
    soundUrl: flySound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "flyDescription",
    images: [
      "https://images.unsplash.com/photo-1596296455028-bb216ae02ff7?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568689341045-c58407fee7a8?q=80&w=1594&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1641736277334-334d815db8c3?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516793985388-6155f13d54ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1665658962855-8f72cf18e80f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=jBPFCvEhv9Y"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Fly",
      uk: "https://uk.wikipedia.org/wiki/Муха",
      ru: "https://ru.wikipedia.org/wiki/Муха",
    },
  },
  {
    id: 82,
    name: "Beetle",
    emoji: "🪲",
    image: BG_IMAGES[3],
    soundUrl: beetleSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "beetleDescription",
    images: [
      "https://images.unsplash.com/photo-1581859680484-a9fb0180a858?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1518737743670-3f217c4def4a?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511954766786-1f88f53fb528?q=80&w=1851&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1557052426-3f754e02f5a9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591893008814-a8e12aa1f379?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=EjvLOAIxbNQ"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Beetle",
      uk: "https://uk.wikipedia.org/wiki/Жук",
      ru: "https://ru.wikipedia.org/wiki/Жесткокрылые",
    },
  },
  {
    id: 83,
    name: "Skunk",
    emoji: "🦨",
    image: BG_IMAGES[4],
    soundUrl: skunkSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "skunkDescription",
    images: [
      "https://images.unsplash.com/photo-1561493642-645a773b12a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1561493642-b808bc5a81de?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1561493668-add2554f719b?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1561493668-d4a914593d45?q=80&w=2194&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1716506514654-17ad836775ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=6kKP6p_HAK4"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Skunk",
      uk: "https://uk.wikipedia.org/wiki/Скунс",
      ru: "https://ru.wikipedia.org/wiki/Скунсовые",
    },
  },
  {
    id: 84,
    name: "Beaver",
    emoji: "🦫",
    image: BG_IMAGES[5],
    soundUrl: beaverSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "beaverDescription",
    images: [
      "https://images.unsplash.com/photo-1608030742786-d613a3c99936?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600899742232-7d2c89b2d85c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1620193826616-e826ac2c33da?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1586439587716-1cc4c88ce130?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1727883760212-655dc564a99c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=eAPqQFWEoKg"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Beaver",
      uk: "https://uk.wikipedia.org/wiki/Бобер",
      ru: "https://ru.wikipedia.org/wiki/Бобр",
    },
  },
  {
    id: 85,
    name: "Cockroach",
    emoji: "🪳",
    image: BG_IMAGES[6],
    soundUrl: cockroachSound,
    modes: ["byName", "bySound", "showAll", "animalPairs", "secret"],
    description: "cockroachDescription",
    images: [
      "https://images.unsplash.com/photo-1727198634627-645ef5356455?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1657785006298-c747b0b88a8f?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1723455871512-b0273a3b0349?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1707093981828-e0ff92ec9797?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1764886773965-1f3b3a008632?q=80&w=1819&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    videos: ["https://www.youtube.com/watch?v=Pby_XgXF0EI"],
    glbUrl: "",
    wikipediaUrls: {
      en: "https://en.wikipedia.org/wiki/Cockroach",
      uk: "https://uk.wikipedia.org/wiki/Таргани",
      ru: "https://ru.wikipedia.org/wiki/Таракановые",
    },
  },
];

// Helper function to filter animals by game mode
export const getAnimalsByMode = (mode: GameMode): Animal[] => {
  return ANIMALS.filter((animal) => animal.modes.includes(mode));
};
