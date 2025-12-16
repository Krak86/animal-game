import { Animal, GameMode } from "@/types";

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

// Animal data with placeholder images and sounds
export const ANIMALS: Animal[] = [
  {
    id: 1,
    name: "Dog",
    emoji: "🐕",
    image: BG_IMAGES[0], // bg1
    soundUrl: dogSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 2,
    name: "Cat",
    emoji: "🐈",
    image: BG_IMAGES[1], // bg2
    soundUrl: catSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 3,
    name: "Lion",
    emoji: "🦁",
    image: BG_IMAGES[2], // bg3
    soundUrl: lionSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 4,
    name: "Elephant",
    emoji: "🐘",
    image: BG_IMAGES[3], // bg4
    soundUrl: elephantSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 5,
    name: "Giraffe",
    emoji: "🦒",
    image: BG_IMAGES[4], // bg5
    modes: ["byName", "showAll"],
  },
  {
    id: 6,
    name: "Monkey",
    emoji: "🐒",
    image: BG_IMAGES[5], // bg6
    soundUrl: monkeySound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 7,
    name: "Penguin",
    emoji: "🐧",
    image: BG_IMAGES[6], // bg7
    modes: ["byName", "showAll"],
  },
  {
    id: 8,
    name: "Zebra",
    emoji: "🦓",
    image: BG_IMAGES[7], // bg8
    modes: ["byName", "showAll"],
  },
  {
    id: 9,
    name: "Tiger",
    emoji: "🐅",
    image: BG_IMAGES[8], // bg9
    soundUrl: tigerSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 10,
    name: "Rabbit",
    emoji: "🐰",
    image: BG_IMAGES[9], // bg10
    modes: ["byName", "showAll"],
  },
  {
    id: 11,
    name: "Rooster",
    emoji: "🐓",
    image: BG_IMAGES[0], // bg1
    soundUrl: roosterSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 12,
    name: "Cow",
    emoji: "🐄",
    image: BG_IMAGES[1], // bg2
    soundUrl: cowSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 13,
    name: "Horse",
    emoji: "🐴",
    image: BG_IMAGES[2], // bg3
    soundUrl: horseSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 14,
    name: "Bird",
    emoji: "🐦",
    image: BG_IMAGES[3], // bg4
    soundUrl: birdSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 15,
    name: "Wolf",
    emoji: "🐺",
    image: BG_IMAGES[4], // bg5
    soundUrl: wolfSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 16,
    name: "Goose",
    emoji: "🪿",
    image: BG_IMAGES[5], // bg6
    soundUrl: gooseSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 17,
    name: "Donkey",
    emoji: "🫏",
    image: BG_IMAGES[6], // bg7
    soundUrl: donkeySound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 18,
    name: "Bear",
    emoji: "🐻",
    image: BG_IMAGES[7], // bg8
    soundUrl: bearSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 19,
    name: "Shark",
    emoji: "🦈",
    image: BG_IMAGES[8], // bg9
    modes: ["byName", "showAll"],
  },
  {
    id: 20,
    name: "Turtle",
    emoji: "🐢",
    image: BG_IMAGES[9], // bg10
    modes: ["byName", "showAll"],
  },
  {
    id: 21,
    name: "Octopus",
    emoji: "🐙",
    image: BG_IMAGES[0], // bg1
    modes: ["byName", "showAll"],
  },
  {
    id: 22,
    name: "Crab",
    emoji: "🦀",
    image: BG_IMAGES[1], // bg2
    modes: ["byName", "showAll"],
  },
  {
    id: 23,
    name: "Whale",
    emoji: "🐋",
    image: BG_IMAGES[2], // bg3
    modes: ["byName", "showAll"],
  },
  {
    id: 24,
    name: "Dolphin",
    emoji: "🐬",
    image: BG_IMAGES[3], // bg4
    modes: ["byName", "showAll"],
  },
  {
    id: 25,
    name: "Snail",
    emoji: "🐌",
    image: BG_IMAGES[4], // bg5
    modes: ["byName", "showAll"],
  },
  {
    id: 26,
    name: "Ant",
    emoji: "🐜",
    image: BG_IMAGES[5], // bg6
    modes: ["byName", "showAll"],
  },
  {
    id: 27,
    name: "Ladybug",
    emoji: "🐞",
    image: BG_IMAGES[6], // bg7
    modes: ["byName", "showAll"],
  },
  {
    id: 28,
    name: "Crocodile",
    emoji: "🐊",
    image: BG_IMAGES[7], // bg8
    modes: ["byName", "showAll"],
  },
  {
    id: 29,
    name: "Bat",
    emoji: "🦇",
    image: BG_IMAGES[8], // bg9
    modes: ["byName", "showAll"],
  },
  {
    id: 30,
    name: "Parrot",
    emoji: "🦜",
    image: BG_IMAGES[9], // bg10
    soundUrl: parrotSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 31,
    name: "Moose",
    emoji: "🦌",
    image: BG_IMAGES[0], // bg1
    modes: ["byName", "showAll"],
  },
  {
    id: 32,
    name: "Llama",
    emoji: "🦙",
    image: BG_IMAGES[1], // bg2
    modes: ["byName", "showAll"],
  },
  {
    id: 33,
    name: "Buffalo",
    emoji: "🐃",
    image: BG_IMAGES[2], // bg3
    soundUrl: buffaloSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 34,
    name: "Turkey",
    emoji: "🦃",
    image: BG_IMAGES[3], // bg4
    soundUrl: turkeySound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 35,
    name: "Peacock",
    emoji: "🦚",
    image: BG_IMAGES[4], // bg5
    soundUrl: peacockSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 36,
    name: "Swan",
    emoji: "🦢",
    image: BG_IMAGES[5], // bg6
    modes: ["byName", "showAll"],
  },
  {
    id: 37,
    name: "Bee",
    emoji: "🐝",
    image: BG_IMAGES[6], // bg7
    soundUrl: beeSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 38,
    name: "Caterpillar",
    emoji: "🐛",
    image: BG_IMAGES[7], // bg8
    modes: ["byName", "showAll"],
  },
  {
    id: 39,
    name: "Scorpion",
    emoji: "🦂",
    image: BG_IMAGES[8], // bg9
    modes: ["byName", "showAll"],
  },
  {
    id: 40,
    name: "Lobster",
    emoji: "🦞",
    image: BG_IMAGES[9], // bg10
    modes: ["byName", "showAll"],
  },
  {
    id: 41,
    name: "Seal",
    emoji: "🦭",
    image: BG_IMAGES[0], // bg1
    modes: ["byName", "showAll"],
  },
  {
    id: 42,
    name: "Raccoon",
    emoji: "🦝",
    image: BG_IMAGES[1], // bg2
    modes: ["byName", "showAll"],
  },
  {
    id: 43,
    name: "Badger",
    emoji: "🦡",
    image: BG_IMAGES[2], // bg3
    modes: ["byName", "showAll"],
  },
  {
    id: 44,
    name: "Boar",
    emoji: "🐗",
    image: BG_IMAGES[3], // bg4
    modes: ["byName", "showAll"],
  },
  {
    id: 45,
    name: "Camel",
    emoji: "🐪",
    image: BG_IMAGES[4], // bg5
    modes: ["byName", "showAll"],
  },
  {
    id: 46,
    name: "Chameleon",
    emoji: "🦎",
    image: BG_IMAGES[5], // bg6
    modes: ["byName", "showAll"],
  },
  {
    id: 47,
    name: "Flamingo",
    emoji: "🦩",
    image: BG_IMAGES[6], // bg7
    modes: ["byName", "showAll"],
  },
  {
    id: 48,
    name: "Gorilla",
    emoji: "🦍",
    image: BG_IMAGES[7], // bg8
    soundUrl: gorillaSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 49,
    name: "Kangaroo",
    emoji: "🦘",
    image: BG_IMAGES[8], // bg9
    modes: ["byName", "showAll"],
  },
  {
    id: 50,
    name: "Leopard",
    emoji: "🐆",
    image: BG_IMAGES[9], // bg10
    soundUrl: leopardSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 51,
    name: "Sheep",
    emoji: "🐑",
    image: BG_IMAGES[0], // bg1
    soundUrl: sheepSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 52,
    name: "Chicken",
    emoji: "🐥",
    image: BG_IMAGES[1], // bg2
    soundUrl: chickenSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 53,
    name: "Pig",
    emoji: "🐖",
    image: BG_IMAGES[2], // bg3
    soundUrl: pigSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 54,
    name: "Goat",
    emoji: "🐐",
    image: BG_IMAGES[3], // bg4
    soundUrl: goatSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 55,
    name: "Bull",
    emoji: "🐂",
    image: BG_IMAGES[4], // bg5
    soundUrl: bullSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 56,
    name: "Duck",
    emoji: "🦆",
    image: BG_IMAGES[5], // bg6
    soundUrl: duckSound,
    modes: ["byName", "bySound", "showAll"],
  },
  /*   {
    id: 57,
    name: "Lamb",
    emoji: "🐑",
    image: BG_IMAGES[0], // bg1
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/schaf.mp3",
    modes: ["byName", "bySound", "showAll"],
  }, */
  {
    id: 58,
    name: "Snake",
    emoji: "🐍",
    image: BG_IMAGES[1], // bg2
    soundUrl: snakeSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 59,
    name: "Raven",
    emoji: "🦅",
    image: BG_IMAGES[2], // bg3
    soundUrl: ravenSound,
    modes: ["byName", "bySound", "showAll"],
  },
  {
    id: 60,
    name: "Owl",
    emoji: "🦉",
    image: BG_IMAGES[3], // bg4
    soundUrl: owlSound,
    modes: ["byName", "bySound", "showAll"],
  },
];

// Helper function to filter animals by game mode
export const getAnimalsByMode = (mode: GameMode): Animal[] => {
  return ANIMALS.filter((animal) => animal.modes.includes(mode));
};
