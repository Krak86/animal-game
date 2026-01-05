import { TranslationMap } from "@/types";

// Translations for English and Ukrainian
export const TRANSLATIONS: TranslationMap = {
  en: {
    startScreen: {
      title: "Animal Explorer",
      subtitle: "Find the animals!",
      byName: "By Name",
      bySound: "By Sound",
      showAll: "Show All",
      secret: "Secret Animal",
      secretDescription: "Discover a mystery animal!",
      animalPairs: "Animal Pairs",
      animalPairsDescription: "Find matching pairs!",
    },
    score: "Score",
    findThe: "Find the:",
    findThePairs: "Find the pairs!",
    greatJob: "Great Job!",
    youFoundIt: "You found it!",
    startFromBeginning: "Home",
    whoSaysThis: "Who says so?",
    replaySound: "🔊 Play Again",
    showAllTitle: "All Animals",
    backToList: "Back to all animals",
    speakName: "Name",
    playSound: "Sounds",
    searchPlaceholder: "Search animals...",
    noResults: "No animals found",
    menu: "Menu",
    sound: "Sound",
    music: "Music",
    language: "Language",
    gameMode: "Game Mode",
    enterFullScreen: "Enter Full Screen",
    exitFullScreen: "Exit Full Screen",
    privacyPolicy: "Privacy Policy",
    viewImages: "Images",
    viewVideos: "Videos",
    view3DModel: "3D Model",
    viewWikipedia: "Wikipedia",
    leavingAppMessage: "You are leaving the app. Continue?",
    comingSoon: "Coming Soon",
    close: "Close",
    externalLink: "External Link",
    cancel: "Cancel",
    continue: "Continue",
    exitApp: "Exit Game",
    exitAppMessage: "Are you sure you want to exit?",
    offlineBannerTitle: "No Internet Connection",
    offlineBannerMessage: "Some content may be unavailable",
    requiresInternet: "Requires internet",
    cachedContent: "Cached",
    error: "Error",
    browserNotInstalledError:
      "Failed to open link: {error}\n\nPlease ensure you have a web browser installed on your device.",
    animalDescriptions: {
      dogDescription:
        "Dogs are loyal, friendly companions that have been domesticated for thousands of years. They come in many breeds and sizes, each with unique characteristics. Known for their intelligence and trainability, dogs serve as pets, working animals, and service animals.",
      catDescription:
        "Cats are independent, agile hunters known for their grace and companionship. Domesticated around 10,000 years ago, they are one of the most popular pets worldwide. Cats are known for their playful behavior, grooming habits, and ability to form strong bonds with their owners.",
      lionDescription:
        "Lions are large carnivorous cats that live in groups called prides. Known as the 'King of the Jungle,' lions are symbols of strength and courage. They are native to Africa and a small population exists in India. Lions are the only cats that live in social groups.",
      elephantDescription:
        "Elephants are the largest land animals on Earth, known for their intelligence, strong family bonds, and remarkable memory. They have long trunks used for breathing, smelling, touching, grasping, and producing sound.",
      giraffeDescription:
        "Giraffes are the tallest mammals on Earth, with their long necks helping them reach leaves high in trees. They have distinctive spotted patterns and long legs, making them graceful runners.",
      monkeyDescription:
        "Monkeys are intelligent primates found in tropical regions. They are known for their agility, curiosity, and complex social behaviors. Most species live in trees and are excellent climbers.",
      penguinDescription:
        "Penguins are flightless birds adapted to life in the water. They are excellent swimmers and divers, using their wings as flippers. Most species live in cold climates, particularly Antarctica.",
      zebraDescription:
        "Zebras are African mammals known for their distinctive black and white stripes. Each zebra has a unique stripe pattern, like a fingerprint. They live in herds and are closely related to horses.",
      tigerDescription:
        "Tigers are the largest wild cats, known for their orange coats with black stripes. They are powerful hunters and excellent swimmers. Tigers are solitary animals that primarily hunt at night.",
      rabbitDescription:
        "Rabbits are small mammals with long ears, powerful hind legs, and soft fur. They are known for their speed and ability to jump. Rabbits are social animals that live in groups called colonies.",
      roosterDescription:
        "Roosters are male chickens known for their colorful plumage and loud crowing at dawn. They protect their flock and are symbols of vigilance and courage in many cultures.",
      cowDescription:
        "Cows are domesticated animals raised for milk, meat, and leather. They are social herd animals with excellent memories and can form close friendships. Cows communicate through various sounds and body language.",
      horseDescription:
        "Horses are large, powerful animals that have been domesticated for thousands of years. They are known for their speed, strength, and intelligence. Horses have been used for transportation, work, and sport.",
      birdDescription:
        "Birds are warm-blooded vertebrates with feathers, wings, and beaks. They are the only animals with feathers and most species can fly. Birds are found in every habitat on Earth.",
      wolfDescription:
        "Wolves are wild canines that live and hunt in packs. They are highly intelligent and social animals with complex communication systems. Wolves play an important role in maintaining ecosystem balance.",
      gooseDescription:
        "Geese are large water birds known for their V-shaped flying formations during migration. They are social birds that mate for life and are known for being protective of their young.",
      donkeyDescription:
        "Donkeys are domesticated members of the horse family, known for their intelligence, patience, and sure-footedness. They are strong, hardy animals used for carrying loads and companionship.",
      bearDescription:
        "Bears are large, powerful mammals found across the Northern Hemisphere. They are omnivores with an excellent sense of smell. Most bear species can stand and walk on their hind legs.",
      sharkDescription:
        "Sharks are ancient fish that have existed for over 400 million years. They have cartilage instead of bones and are equipped with multiple rows of sharp teeth. Sharks play a vital role in ocean ecosystems.",
      turtleDescription:
        "Turtles are reptiles with protective shells. They are among the oldest reptile groups, dating back over 200 million years. Turtles can live both on land and in water, depending on the species.",
      octopusDescription:
        "Octopuses are intelligent marine animals with eight arms and three hearts. They can change color and texture to camouflage themselves. Octopuses are masters of escape and problem-solving.",
      crabDescription:
        "Crabs are crustaceans with a hard exoskeleton and ten legs, including two claws. They walk sideways and can be found in oceans, freshwater, and on land. Many species are important to marine ecosystems.",
      whaleDescription:
        "Whales are the largest animals ever to have lived on Earth. They are intelligent marine mammals that communicate through complex vocalizations. Whales play a crucial role in ocean health.",
      dolphinDescription:
        "Dolphins are highly intelligent marine mammals known for their playfulness and complex social behaviors. They use echolocation to navigate and hunt, and are among the smartest animals on Earth.",
      snailDescription:
        "Snails are mollusks with spiral shells that they carry on their backs. They move slowly using a muscular foot and leave a trail of slime. Snails can be found on land and in water.",
      antDescription:
        "Ants are social insects that live in colonies with highly organized societies. They are incredibly strong for their size and work together to build complex underground nests and gather food.",
      ladybugDescription:
        "Ladybugs are small, colorful beetles, typically red or orange with black spots. They are beneficial insects that eat aphids and other plant pests. Ladybugs are considered good luck in many cultures.",
      crocodileDescription:
        "Crocodiles are large reptiles that have existed for millions of years. They are powerful predators with strong jaws and excellent hunting skills. Crocodiles spend much of their time in water.",
      batDescription:
        "Bats are the only mammals capable of true flight. They use echolocation to navigate in the dark and most species feed on insects. Bats play important roles in pollination and pest control.",
      parrotDescription:
        "Parrots are colorful, intelligent birds known for their ability to mimic sounds and human speech. They have strong, curved beaks and are social birds that often mate for life.",
      mooseDescription:
        "Moose are the largest members of the deer family, with males sporting impressive antlers. They are excellent swimmers and are found in northern forests. Moose are generally solitary animals.",
      llamaDescription:
        "Llamas are domesticated South American animals related to camels. They are used for carrying loads, wool, and companionship. Llamas are known for their calm temperament and distinctive appearance.",
      buffaloDescription:
        "Buffalo are large, powerful bovines found in Africa and Asia. They live in herds and are known for their strength and unpredictable nature. Buffalo play an important role in their ecosystems.",
      turkeyDescription:
        "Turkeys are large birds native to North America. Males, called toms, have colorful plumage and fan their tail feathers in courtship displays. Turkeys are social birds that roost in trees.",
      peacockDescription:
        "Peacocks are male peafowl known for their spectacular iridescent tail feathers with eye-like patterns. They display these feathers in elaborate courtship dances. Peafowl are native to South Asia.",
      swanDescription:
        "Swans are large, elegant water birds known for their grace and beauty. They mate for life and are protective of their territory. Swans have long necks and are powerful fliers.",
      beeDescription:
        "Bees are flying insects essential for pollinating flowers and crops. They live in colonies with a complex social structure. Honey bees produce honey and beeswax, making them important to humans.",
      caterpillarDescription:
        "Caterpillars are the larval stage of butterflies and moths. They have segmented bodies and spend most of their time eating leaves to grow. Eventually, they form a chrysalis and transform into adult insects.",
      scorpionDescription:
        "Scorpions are arachnids with eight legs, pincers, and a curved tail with a venomous stinger. They are ancient creatures that have existed for over 400 million years and can survive in harsh environments.",
      lobsterDescription:
        "Lobsters are large marine crustaceans with strong claws and hard shells. They can live for many decades and continue growing throughout their lives. Lobsters are important commercially and ecologically.",
      sealDescription:
        "Seals are marine mammals with flippers instead of legs. They are excellent swimmers and divers, spending most of their time in water but coming ashore to rest and breed.",
      raccoonDescription:
        "Raccoons are intelligent mammals with distinctive black masks and ringed tails. They are highly adaptable, living in various habitats, and are known for their dexterity and problem-solving abilities.",
      badgerDescription:
        "Badgers are sturdy mammals known for their digging abilities and powerful claws. They live in underground burrows called setts and are primarily nocturnal. Badgers are fierce when defending their territory.",
      boarDescription:
        "Wild boars are the ancestors of domestic pigs, known for their strength and tusks. They are omnivores living in forests and are highly adaptable. Boars are social animals that live in groups.",
      camelDescription:
        "Camels are large mammals adapted to desert life, with humps that store fat for energy. They can go long periods without water and have thick fur to protect them from extreme temperatures.",
      chameleonDescription:
        "Chameleons are reptiles famous for their ability to change color for camouflage and communication. They have independently moving eyes, long sticky tongues for catching insects, and prehensile tails.",
      flamingoDescription:
        "Flamingos are wading birds known for their vibrant pink color, which comes from their diet of algae and crustaceans. They live in large flocks and have long legs for wading in water.",
      gorillaDescription:
        "Gorillas are the largest primates, known for their intelligence and gentle nature despite their size. They live in family groups led by a silverback male and are native to African forests.",
      kangarooDescription:
        "Kangaroos are marsupials native to Australia, known for their powerful hind legs and ability to hop at high speeds. Females carry their young, called joeys, in pouches.",
      leopardDescription:
        "Leopards are agile big cats with distinctive spotted coats. They are excellent climbers and often drag their prey into trees. Leopards are solitary hunters that are most active at night.",
      sheepDescription:
        "Sheep are domesticated animals raised for wool, meat, and milk. They are social herd animals with excellent memories and can recognize individual faces. Sheep have been important to humans for thousands of years.",
      chickenDescription:
        "Chickens are the most common domestic birds in the world. They are social birds that communicate through various sounds. Chickens are raised for eggs and meat and are descendants of jungle fowl.",
      pigDescription:
        "Pigs are intelligent and social animals that have been domesticated for thousands of years. They are omnivores with an excellent sense of smell and are known for their cleanliness when given proper space.",
      goatDescription:
        "Goats are hardy, agile animals that can climb steep terrain and eat a wide variety of plants. They are social herd animals with playful personalities and have been domesticated for milk, meat, and fiber.",
      bullDescription:
        "Bulls are adult male cattle, known for their size, strength, and aggressive behavior when provoked. They have been important in agriculture and hold cultural significance in many societies.",
      duckDescription:
        "Ducks are water birds with waterproof feathers, webbed feet, and flat bills. They are found in both fresh and salt water and are known for their distinctive quacking sounds. Ducks are excellent swimmers.",
      snakeDescription:
        "Snakes are legless reptiles found on every continent except Antarctica. They swallow prey whole and have flexible jaws. Some species are venomous, while others are constrictors. Snakes play important roles in ecosystems.",
      ravenDescription:
        "Ravens are large, intelligent birds known for their problem-solving abilities and complex vocalizations. They are often associated with mythology and folklore. Ravens mate for life and can live many years.",
      owlDescription:
        "Owls are birds of prey with large eyes, excellent hearing, and silent flight. They are primarily nocturnal hunters with rotating heads that can turn almost 270 degrees. Owls are found on every continent except Antarctica.",
      alpacaDescription:
        "Alpacas are domesticated animals from South America, related to llamas. They have soft, luxurious fleece used to make warm clothing. Alpacas are gentle, intelligent animals that live in herds in mountainous regions.",
      muleDescription:
        "Mules are hybrid animals born from a male donkey and a female horse. They are known for being strong, patient, and sure-footed. Mules have been used for centuries to carry heavy loads in difficult terrain.",
      ramDescription:
        "Rams are adult male sheep with large, curved horns. They use their horns to compete with other males during mating season. Rams are strong animals that lead and protect their flock.",
      henDescription:
        "Hens are adult female chickens that lay eggs. They are farm birds that live in groups and communicate through various clucks and calls. Hens are caring mothers that protect and teach their chicks.",
      calfDescription:
        "A calf is a baby cow that drinks milk from its mother. Calves are playful and curious, learning from their mothers and other herd members. They grow quickly and can stand within hours of being born.",
      foalDescription:
        "A foal is a baby horse that can walk and run shortly after birth. Foals are playful and energetic, staying close to their mothers for protection. They learn important skills by playing with other young horses.",
      foxDescription:
        "Foxes are clever mammals with bushy tails and pointed ears. They are excellent hunters known for their intelligence and adaptability. Foxes live in forests, grasslands, and even cities around the world.",
      deerDescription:
        "Deer are graceful animals with long legs and many species have antlers. They are herbivores that eat plants, leaves, and grass. Deer are known for their speed and agility, and live in forests and meadows worldwide.",
      squirrelDescription:
        "Squirrels are small, agile rodents with bushy tails. They are excellent climbers that live in trees and gather nuts for winter. Squirrels are known for their quick movements and ability to leap between branches.",
      hedgehogDescription:
        "Hedgehogs are small mammals covered in sharp spines for protection. They curl into a ball when frightened, making them difficult to attack. Hedgehogs are nocturnal animals that eat insects, snails, and worms.",
      otterDescription:
        "Otters are playful aquatic mammals with waterproof fur. They are excellent swimmers that hunt for fish and shellfish. Otters use tools like rocks to crack open shells and are known for their playful behavior.",
      pandaDescription:
        "Giant pandas are large bears from China that eat mostly bamboo. They have distinctive black and white fur and are excellent climbers. Pandas are endangered animals that spend most of their day eating and resting.",
      koalaDescription:
        "Koalas are marsupials from Australia that live in eucalyptus trees. They sleep up to 20 hours a day and eat only eucalyptus leaves. Koalas carry their babies in a pouch, like kangaroos.",
      hippopotamusDescription:
        "Hippopotamuses are large, semi-aquatic mammals from Africa. They spend most of their day in water to keep cool. Despite their bulky appearance, hippos can run fast on land and are very protective of their territory.",
      rhinocerosDescription:
        "Rhinoceroses are large mammals with thick skin and one or two horns on their snout. They are herbivores that eat grass and leaves. Rhinos have poor eyesight but excellent hearing and smell.",
      chimpanzeeDescription:
        "Chimpanzees are intelligent apes that share 98% of their DNA with humans. They live in social groups and use tools to get food. Chimpanzees communicate through sounds, gestures, and facial expressions.",
      eagleDescription:
        "Eagles are large birds of prey with powerful talons and excellent eyesight. They can spot small animals from high in the sky. Eagles build large nests and are symbols of strength and freedom.",
      woodpeckerDescription:
        "Woodpeckers are birds with strong beaks that drill into tree bark. They search for insects living inside trees and create holes for nesting. Woodpeckers can peck up to 20 times per second without getting hurt.",
      seagullDescription:
        "Seagulls are coastal birds known for their loud calls and scavenging behavior. They have webbed feet and can drink both fresh and salt water. Seagulls are intelligent birds that often follow fishing boats.",
      crowDescription:
        "Crows are highly intelligent black birds that can solve complex problems. They use tools, recognize human faces, and can even hold grudges. Crows live in family groups and work together to find food.",
      vultureDescription:
        "Vultures are large scavenging birds with bald heads and sharp beaks. They clean the environment by eating dead animals. Vultures can soar high in the sky for hours, searching for food with their keen eyesight.",
      hummingbirdDescription:
        "Hummingbirds are tiny, colorful birds that can hover in mid-air. They flap their wings up to 80 times per second, creating a humming sound. Hummingbirds feed on flower nectar and have amazing flying skills.",
      ostrichDescription:
        "Ostriches are the world's largest birds, but they cannot fly. They have powerful legs that can run up to 70 km/h. Ostriches have large eyes and lay the biggest eggs of any bird species.",
      pelicanDescription:
        "Pelicans are large water birds with a distinctive pouch under their beak. They use this pouch to scoop up fish from the water. Pelicans often work together in groups to catch fish more efficiently.",
      walrusDescription:
        "Walruses are large marine mammals with long tusks and thick blubber. They live in Arctic waters and use their tusks to pull themselves onto ice. Walruses are social animals that gather in large groups.",
      seaLionDescription:
        "Sea lions are marine mammals known for their playful behavior and loud barking. They are excellent swimmers with flippers instead of legs. Sea lions are intelligent and can be trained to perform tricks.",
      starfishDescription:
        "Starfish, also called sea stars, are marine animals with five arms. They can regrow lost arms and move using tiny tube feet. Starfish live on the ocean floor and eat mollusks and other small sea creatures.",
      seahorseDescription:
        "Seahorses are small fish that swim upright and have a horse-like head. Male seahorses carry babies in a special pouch until they're ready to be born. They use their curled tail to anchor themselves to seaweed.",
      jellyfishDescription:
        "Jellyfish are ancient sea creatures with soft, transparent bodies and stinging tentacles. They drift through ocean currents and glow in the dark. Jellyfish have existed for over 500 million years.",
      clownfishDescription:
        "Clownfish are small, orange fish with white stripes that live in sea anemones. The anemone's stinging tentacles protect them from predators. Clownfish have a special mucus that prevents them from being stung.",
      frogDescription:
        "Frogs are amphibians that live both in water and on land. They catch insects with their long, sticky tongues. Frogs start life as tadpoles in water before growing legs and moving to land.",
      toadDescription:
        "Toads are amphibians similar to frogs but with dry, bumpy skin. They live mostly on land and are excellent pest controllers, eating many insects. Toads can live for many years and some species are quite large.",
      lizardDescription:
        "Lizards are reptiles with scaly skin, four legs, and most have long tails. They can often detach their tails to escape predators and grow new ones. Lizards live in warm climates around the world.",
      iguanaDescription:
        "Iguanas are large lizards with spines along their back. They are excellent swimmers and climbers that eat plants. Some iguanas can grow over 6 feet long including their tail.",
      salamanderDescription:
        "Salamanders are amphibians that look like lizards but have moist skin. They can regenerate lost limbs and tails. Most salamanders live in damp forests near streams and ponds.",
      butterflyDescription:
        "Butterflies are colorful insects with four large wings covered in tiny scales. They start life as caterpillars before transforming in a chrysalis. Butterflies feed on flower nectar and help pollinate plants.",
      grasshopperDescription:
        "Grasshoppers are jumping insects with powerful back legs. They make chirping sounds by rubbing their legs together. Grasshoppers eat plants and can leap up to 20 times their body length.",
      dragonflyDescription:
        "Dragonflies are ancient insects with four transparent wings and large eyes. They are skilled fliers that can hover, fly backwards, and catch prey mid-air. Dragonflies spend most of their life as aquatic nymphs.",
      spiderDescription:
        "Spiders are eight-legged arachnids that spin silk webs to catch prey. They inject venom to paralyze insects. Most spiders are harmless to humans and help control pest populations.",
      mosquitoDescription:
        "Mosquitoes are small flying insects known for their itchy bites. Only female mosquitoes bite to get blood for their eggs. Mosquitoes are found worldwide and are attracted to carbon dioxide and body heat.",
      mouseDescription:
        "Mice are small rodents with long tails and large ears. They are found almost everywhere in the world and are known for their ability to squeeze through tiny spaces. Mice are intelligent, social animals that communicate through squeaks and scents.",
      slothDescription:
        "Sloths are slow-moving mammals that live in trees in Central and South American rainforests. They sleep up to 20 hours a day and move so slowly that algae grows on their fur. Despite being slow, sloths are excellent swimmers.",
      wormDescription:
        "Worms are soft-bodied invertebrates that live in soil. Earthworms help improve soil quality by breaking down organic matter and creating tunnels that allow air and water to reach plant roots. They have no eyes or ears but can sense light and vibrations.",
      flyDescription:
        "Flies are common insects with large compound eyes and transparent wings. They can walk on ceilings and walls using sticky pads on their feet. Flies taste with their feet and can only eat liquids, using their sponge-like mouthparts.",
      beetleDescription:
        "Beetles are insects with hard wing covers that protect their flying wings underneath. They are the largest group of animals on Earth with over 400,000 species. Beetles can be found in almost every habitat and come in many colors and sizes.",
      skunkDescription:
        "Skunks are mammals famous for their black and white fur and their ability to spray a strong-smelling liquid when threatened. This spray can reach up to 10 feet and helps protect them from predators. Skunks are mostly nocturnal and eat both plants and small animals.",
      beaverDescription:
        "Beavers are large rodents known for building dams and lodges in rivers and streams. Their strong teeth can cut down trees, and their flat tails help them swim and signal danger by slapping the water. Beaver dams create wetlands that provide homes for many other animals.",
      cockroachDescription:
        "Cockroaches are ancient insects that have survived for millions of years. They are incredibly resilient and can live in almost any environment. Cockroaches are nocturnal and can run very fast. They have flat bodies that help them hide in tight spaces.",
    },
    animals: {
      Dog: "Dog",
      Cat: "Cat",
      Lion: "Lion",
      Elephant: "Elephant",
      Giraffe: "Giraffe",
      Monkey: "Monkey",
      Penguin: "Penguin",
      Zebra: "Zebra",
      Tiger: "Tiger",
      Rabbit: "Rabbit",
      Rooster: "Rooster",
      Cow: "Cow",
      Horse: "Horse",
      Bird: "Bird",
      Wolf: "Wolf",
      Goose: "Goose",
      Donkey: "Donkey",
      Bear: "Bear",
      Shark: "Shark",
      Turtle: "Turtle",
      Octopus: "Octopus",
      Crab: "Crab",
      Whale: "Whale",
      Dolphin: "Dolphin",
      Snail: "Snail",
      Ant: "Ant",
      Ladybug: "Ladybug",
      Crocodile: "Crocodile",
      Bat: "Bat",
      Parrot: "Parrot",
      Moose: "Moose",
      Llama: "Llama",
      Buffalo: "Buffalo",
      Turkey: "Turkey",
      Peacock: "Peacock",
      Swan: "Swan",
      Bee: "Bee",
      Caterpillar: "Caterpillar",
      Scorpion: "Scorpion",
      Lobster: "Lobster",
      Seal: "Seal",
      Raccoon: "Raccoon",
      Badger: "Badger",
      Boar: "Boar",
      Camel: "Camel",
      Chameleon: "Chameleon",
      Flamingo: "Flamingo",
      Gorilla: "Gorilla",
      Kangaroo: "Kangaroo",
      Leopard: "Leopard",
      Sheep: "Sheep",
      Chicken: "Chicken",
      Pig: "Pig",
      Goat: "Goat",
      Bull: "Bull",
      Duck: "Duck",
      Snake: "Snake",
      Raven: "Raven",
      Owl: "Owl",
      Ram: "Ram",
      Hen: "Hen",
      Fox: "Fox",
      Squirrel: "Squirrel",
      Hedgehog: "Hedgehog",
      Otter: "Otter",
      Panda: "Panda",
      Koala: "Koala",
      Hippopotamus: "Hippopotamus",
      Rhinoceros: "Rhinoceros",
      Chimpanzee: "Chimpanzee",
      Eagle: "Eagle",
      Woodpecker: "Woodpecker",
      Seagull: "Seagull",
      Ostrich: "Ostrich",
      Pelican: "Pelican",
      Starfish: "Starfish",
      Seahorse: "Seahorse",
      Jellyfish: "Jellyfish",
      Clownfish: "Clownfish",
      Frog: "Frog",
      Butterfly: "Butterfly",
      Grasshopper: "Grasshopper",
      Spider: "Spider",
      Mosquito: "Mosquito",
      Mouse: "Mouse",
      Sloth: "Sloth",
      Worm: "Worm",
      Fly: "Fly",
      Beetle: "Beetle",
      Skunk: "Skunk",
      Beaver: "Beaver",
      Cockroach: "Cockroach",
    },
  },
  uk: {
    startScreen: {
      title: "Дослідник тварин",
      subtitle: "Знайди тварин!",
      byName: "За назвою",
      bySound: "За звуком",
      showAll: "Показати всі",
      secret: "Таємна тварина",
      secretDescription: "Відкрийте таємничу тварину!",
      animalPairs: "Пари тварин",
      animalPairsDescription: "Знайди пари!",
    },
    score: "Рахунок",
    findThe: "Знайди:",
    findThePairs: "Знайди пари!",
    greatJob: "Чудова робота!",
    youFoundIt: "Тобі вдалося знайти!",
    startFromBeginning: "Спочатку",
    whoSaysThis: "Хто так каже?",
    replaySound: "🔊 Грати знову",
    showAllTitle: "Всі тварини",
    backToList: "Повернутися до всіх тварин",
    speakName: "Назва",
    playSound: "Звуки",
    searchPlaceholder: "Пошук тварин...",
    noResults: "Тварин не знайдено",
    menu: "Меню",
    sound: "Звук",
    music: "Музика",
    language: "Мова",
    gameMode: "Режим гри",
    enterFullScreen: "Увійти в повноекранний режим",
    exitFullScreen: "Вийти з повноекранного режиму",
    privacyPolicy: "Політика конфіденційності",
    viewImages: "Зображення",
    viewVideos: "Відео",
    view3DModel: "3D Модель",
    viewWikipedia: "Вікіпедія",
    leavingAppMessage: "Ви виходите з програми. Продовжити?",
    comingSoon: "Незабаром",
    close: "Закрити",
    externalLink: "Зовнішнє посилання",
    cancel: "Скасувати",
    continue: "Продовжити",
    exitApp: "Вийти з гри",
    exitAppMessage: "Ви впевнені, що хочете вийти?",
    offlineBannerTitle: "Немає підключення до Інтернету",
    offlineBannerMessage: "Деякий вміст може бути недоступний",
    requiresInternet: "Потрібен інтернет",
    cachedContent: "Кешовано",
    error: "Помилка",
    browserNotInstalledError:
      "Не вдалося відкрити посилання: {error}\n\nБудь ласка, переконайтеся, що у вас встановлено веб-браузер.",
    animalDescriptions: {
      dogDescription:
        "Собаки — це вірні, дружелюбні компаньйони, які були одомашнені тисячі років тому. Вони бувають різних порід і розмірів, кожна з унікальними характеристиками. Відомі своїм інтелектом і здатністю до навчання, собаки служать як домашні улюбленці, робочі тварини та службові тварини.",
      catDescription:
        "Коти — це незалежні, спритні мисливці, відомі своєю граційністю та компанійськістю. Одомашнені близько 10 000 років тому, вони є одними з найпопулярніших домашніх тварин у світі. Коти відомі своєю грайливою поведінкою, звичками догляду та здатністю формувати міцні зв'язки зі своїми власниками.",
      lionDescription:
        "Леви — це великі хижі коти, які живуть групами, які називаються прайдами. Відомі як 'Король джунглів', леви є символами сили та мужності. Вони родом з Африки, а невелика популяція існує в Індії. Леви — єдині коти, які живуть соціальними групами.",
      elephantDescription:
        "Слони — найбільші наземні тварини на Землі, відомі своїм інтелектом, міцними сімейними зв'язками та чудовою пам'яттю. Вони мають довгі хоботи, які використовуються для дихання, нюхання, торкання, хапання та створення звуків.",
      giraffeDescription:
        "Жирафи — найвищі ссавці на Землі, їхні довгі шиї допомагають їм досягати листя високо на деревах. Вони мають характерний плямистий візерунок і довгі ноги, що робить їх витонченими бігунами.",
      monkeyDescription:
        "Мавпи — розумні примати, що живуть у тропічних регіонах. Вони відомі своєю спритністю, допитливістю та складною соціальною поведінкою. Більшість видів живе на деревах і чудово лазять.",
      penguinDescription:
        "Пінгвіни — нелітаючі птахи, пристосовані до життя у воді. Вони чудові плавці і пірнальники, використовують свої крила як ласти. Більшість видів живе в холодному кліматі, особливо в Антарктиді.",
      zebraDescription:
        "Зебри — африканські ссавці, відомі своїми характерними чорно-білими смугами. Кожна зебра має унікальний візерунок смуг, як відбиток пальця. Вони живуть стадами і є близькими родичами коней.",
      tigerDescription:
        "Тигри — найбільші дикі коти, відомі своїм помаранчевим хутром з чорними смугами. Вони потужні мисливці та чудові плавці. Тигри — поодинокі тварини, які полюють переважно вночі.",
      rabbitDescription:
        "Кролики — невеликі ссавці з довгими вухами, потужними задніми лапами і м'яким хутром. Вони відомі своєю швидкістю та здатністю стрибати. Кролики — соціальні тварини, які живуть групами, що називаються колоніями.",
      roosterDescription:
        "Півні — самці курей, відомі своїм барвистим оперенням і голосним криком на світанку. Вони захищають своє стадо і є символами пильності та мужності в багатьох культурах.",
      cowDescription:
        "Корови — одомашнені тварини, яких розводять для отримання молока, м'яса і шкіри. Вони є соціальними стадними тваринами з чудовою пам'яттю і можуть формувати тісні дружні стосунки. Корови спілкуються через різні звуки та мову тіла.",
      horseDescription:
        "Коні — великі, потужні тварини, одомашнені тисячі років тому. Вони відомі своєю швидкістю, силою та розумом. Коні використовувалися для транспорту, роботи та спорту.",
      birdDescription:
        "Птахи — теплокровні хребетні з пір'ям, крилами та дзьобами. Вони єдині тварини з пір'ям, і більшість видів може літати. Птахи живуть у кожному місці проживання на Землі.",
      wolfDescription:
        "Вовки — дикі псові, які живуть і полюють зграями. Вони високоінтелектуальні та соціальні тварини зі складними системами комунікації. Вовки відіграють важливу роль у підтримці балансу екосистеми.",
      gooseDescription:
        "Гуси — великі водоплавні птахи, відомі своїми V-подібними формаціями під час міграції. Вони є соціальними птахами, які створюють пари на все життя і відомі своєю захисною поведінкою щодо потомства.",
      donkeyDescription:
        "Осли — одомашнені представники сімейства коневих, відомі своїм розумом, терпінням та впевненістю в ході. Вони сильні, витривалі тварини, які використовуються для перенесення вантажів і як компаньйони.",
      bearDescription:
        "Ведмеді — великі, потужні ссавці, поширені в Північній півкулі. Вони всеїдні з чудовим нюхом. Більшість видів ведмедів можуть стояти і ходити на задніх лапах.",
      sharkDescription:
        "Акули — стародавні риби, які існують понад 400 мільйонів років. Вони мають хрящі замість кісток і оснащені кількома рядами гострих зубів. Акули відіграють життєво важливу роль в океанічних екосистемах.",
      turtleDescription:
        "Черепахи — рептилії з захисними панцирами. Вони є одними з найдавніших груп рептилій, що налічують понад 200 мільйонів років. Черепахи можуть жити на суші та у воді, залежно від виду.",
      octopusDescription:
        "Восьминоги — розумні морські тварини з вісьмома щупальцями та трьома серцями. Вони можуть змінювати колір і текстуру для камуфляжу. Восьминоги — майстри втечі та розв'язання проблем.",
      crabDescription:
        "Краби — ракоподібні з твердим екзоскелетом і десятьма лапами, включаючи дві клішні. Вони ходять боком і можуть бути знайдені в океанах, прісній воді та на суші. Багато видів важливі для морських екосистем.",
      whaleDescription:
        "Кити — найбільші тварини, які коли-небудь жили на Землі. Вони розумні морські ссавці, які спілкуються через складні вокалізації. Кити відіграють вирішальну роль у здоров'ї океану.",
      dolphinDescription:
        "Дельфіни — високоінтелектуальні морські ссавці, відомі своєю грайливістю та складною соціальною поведінкою. Вони використовують ехолокацію для навігації та полювання і є одними з найрозумніших тварин на Землі.",
      snailDescription:
        "Равлики — молюски з спіральними раковинами, які вони носять на спині. Вони повільно рухаються, використовуючи м'язисту ногу, і залишають слід слизу. Равлики можна знайти на суші та у воді.",
      antDescription:
        "Мурахи — соціальні комахи, які живуть колоніями з високоорганізованими суспільствами. Вони неймовірно сильні для свого розміру і працюють разом, щоб будувати складні підземні гнізда та збирати їжу.",
      ladybugDescription:
        "Сонечка — маленькі, барвисті жуки, зазвичай червоного або помаранчевого кольору з чорними плямами. Вони є корисними комахами, які їдять попелиць та інших шкідників рослин. Сонечка вважаються символами удачі в багатьох культурах.",
      crocodileDescription:
        "Крокодили — великі рептилії, які існують мільйони років. Вони потужні хижаки з сильними щелепами та чудовими навичками полювання. Крокодили проводять більшу частину часу у воді.",
      batDescription:
        "Кажани — єдині ссавці, здатні до справжнього польоту. Вони використовують ехолокацію для навігації в темряві, і більшість видів харчується комахами. Кажани відіграють важливу роль у запиленні та боротьбі зі шкідниками.",
      parrotDescription:
        "Папуги — барвисті, розумні птахи, відомі своєю здатністю імітувати звуки та людську мову. Вони мають сильні, вигнуті дзьоби і є соціальними птахами, які часто створюють пари на все життя.",
      mooseDescription:
        "Лосі — найбільші представники сімейства оленевих, самці мають вражаючі роги. Вони чудові плавці і живуть у північних лісах. Лосі зазвичай є поодинокими тваринами.",
      llamaDescription:
        "Лами — одомашнені південноамериканські тварини, споріднені з верблюдами. Вони використовуються для перенесення вантажів, вовни та як компаньйони. Лами відомі своїм спокійним темпераментом і характерною зовнішністю.",
      buffaloDescription:
        "Буйволи — великі, потужні бовиди, що живуть в Африці та Азії. Вони живуть стадами і відомі своєю силою та непередбачуваною поведінкою. Буйволи відіграють важливу роль у своїх екосистемах.",
      turkeyDescription:
        "Індики — великі птахи, що є корінними жителями Північної Америки. Самці, що називаються індиками, мають барвисте оперення і розправляють хвостове пір'я під час шлюбних ритуалів. Індики — соціальні птахи, які ночують на деревах.",
      peacockDescription:
        "Павичі — самці павів, відомі своїм вражаючим переливчастим хвостовим пір'ям з візерунками, схожими на очі. Вони демонструють це пір'я в складних шлюбних танцях. Пави є корінними жителями Південної Азії.",
      swanDescription:
        "Лебеді — великі, витончені водоплавні птахи, відомі своєю грацією та красою. Вони створюють пари на все життя і захищають свою територію. Лебеді мають довгі шиї і є потужними літунами.",
      beeDescription:
        "Бджоли — літаючі комахи, необхідні для запилення квітів і сільськогосподарських культур. Вони живуть колоніями зі складною соціальною структурою. Медоносні бджоли виробляють мед і віск, роблячи їх важливими для людей.",
      caterpillarDescription:
        "Гусениці — личинкова стадія метеликів і молі. Вони мають сегментовані тіла і проводять більшу частину часу, поїдаючи листя, щоб рости. Зрештою, вони утворюють лялечку і перетворюються на дорослих комах.",
      scorpionDescription:
        "Скорпіони — павукоподібні з вісьмома ногами, клішнями та вигнутим хвостом з отруйним жалом. Вони є стародавніми створіннями, які існують понад 400 мільйонів років і можуть виживати в суворих умовах.",
      lobsterDescription:
        "Омари — великі морські ракоподібні з сильними клішнями та твердими панцирами. Вони можуть жити багато десятиліть і продовжують рости протягом усього життя. Омари важливі комерційно та екологічно.",
      sealDescription:
        "Тюлені — морські ссавці з ластами замість ніг. Вони чудові плавці і пірнальники, проводять більшу частину часу у воді, але виходять на берег для відпочинку та розмноження.",
      raccoonDescription:
        "Єноти — розумні ссавці з характерними чорними масками та смугастими хвостами. Вони високоадаптивні, живуть у різних місцях проживання і відомі своєю спритністю та здатністю розв'язувати проблеми.",
      badgerDescription:
        "Борсуки — міцні ссавці, відомі своїми здібностями до риття та потужними кігтями. Вони живуть у підземних норах, що називаються городищами, і є переважно нічними. Борсуки жорстко захищають свою територію.",
      boarDescription:
        "Дикі кабани — предки домашніх свиней, відомі своєю силою та іклами. Вони всеїдні, живуть у лісах і є високоадаптивними. Кабани — соціальні тварини, які живуть групами.",
      camelDescription:
        "Верблюди — великі ссавці, пристосовані до пустельного життя, з горбами, які зберігають жир для енергії. Вони можуть довго обходитися без води і мають густе хутро для захисту від екстремальних температур.",
      chameleonDescription:
        "Хамелеони — рептилії, відомі своєю здатністю змінювати колір для камуфляжу та комунікації. Вони мають незалежно рухомі очі, довгі липкі язики для ловлі комах і чіпкі хвости.",
      flamingoDescription:
        "Фламінго — болотні птахи, відомі своїм яскравим рожевим кольором, який походить від їхньої дієти з водоростей і ракоподібних. Вони живуть великими зграями і мають довгі ноги для ходіння по воді.",
      gorillaDescription:
        "Горили — найбільші примати, відомі своїм інтелектом і м'якою вдачею, незважаючи на свій розмір. Вони живуть сімейними групами, очолюваними сріблоспинним самцем, і є корінними жителями африканських лісів.",
      kangarooDescription:
        "Кенгуру — сумчасті, що є корінними жителями Австралії, відомі своїми потужними задніми лапами та здатністю стрибати на великих швидкостях. Самки носять своїх дитинчат, що називаються джоуї, у сумках.",
      leopardDescription:
        "Леопарди — спритні великі коти з характерним плямистим хутром. Вони чудові верхолази і часто затягують свою здобич на дерева. Леопарди — поодинокі мисливці, найактивніші вночі.",
      sheepDescription:
        "Вівці — одомашнені тварини, яких розводять для вовни, м'яса та молока. Вони соціальні стадні тварини з чудовою пам'яттю і можуть розпізнавати окремі обличчя. Вівці важливі для людей протягом тисячоліть.",
      chickenDescription:
        "Кури — найпоширеніші домашні птахи у світі. Вони соціальні птахи, які спілкуються через різні звуки. Кури розводяться для яєць і м'яса і є нащадками джунглевих курей.",
      pigDescription:
        "Свині — розумні та соціальні тварини, одомашнені тисячі років тому. Вони всеїдні з чудовим нюхом і відомі своєю чистотою, коли їм надано належний простір.",
      goatDescription:
        "Кози — витривалі, спритні тварини, які можуть лазити по крутій місцевості та їсти широкий спектр рослин. Вони соціальні стадні тварини з грайливим характером і одомашнені для молока, м'яса та волокна.",
      bullDescription:
        "Бики — дорослі самці великої рогатої худоби, відомі своїм розміром, силою та агресивною поведінкою, коли їх провокують. Вони були важливими в сільському господарстві і мають культурне значення в багатьох суспільствах.",
      duckDescription:
        "Качки — водоплавні птахи з водонепроникним пір'ям, перетинчастими лапами та плоскими дзьобами. Вони живуть як у прісній, так і в солоній воді і відомі своїми характерними квакаючими звуками. Качки чудові плавці.",
      snakeDescription:
        "Змії — безногі рептилії, що живуть на всіх континентах, крім Антарктиди. Вони ковтають здобич цілком і мають гнучкі щелепи. Деякі види отруйні, інші — удави. Змії відіграють важливу роль в екосистемах.",
      ravenDescription:
        "Ворони — великі, розумні птахи, відомі своїми здібностями до розв'язання проблем та складною вокалізацією. Вони часто пов'язані з міфологією та фольклором. Ворони створюють пари на все життя і можуть жити багато років.",
      owlDescription:
        "Сови — хижі птахи з великими очима, чудовим слухом та безшумним польотом. Вони переважно нічні мисливці з обертовими головами, які можуть повертатися майже на 270 градусів. Сови живуть на всіх континентах, крім Антарктиди.",
      alpacaDescription:
        "Альпаки — одомашнені тварини з Південної Америки, споріднені з ламами. Вони мають м'яку, розкішну вовну, яку використовують для виготовлення теплого одягу. Альпаки — ніжні, розумні тварини, що живуть стадами в гірських регіонах.",
      muleDescription:
        "Мули — гібридні тварини, народжені від віслюка-самця та кобили. Вони відомі своєю силою, терпінням та впевненістю. Мулів століттями використовували для перенесення важких вантажів на складній місцевості.",
      ramDescription:
        "Барани — дорослі самці овець з великими вигнутими рогами. Вони використовують роги для змагання з іншими самцями в період розмноження. Барани — сильні тварини, що ведуть та захищають своє стадо.",
      henDescription:
        "Курки — дорослі самки курей, що несуть яйця. Це фермерські птахи, що живуть групами та спілкуються різними квоктаннями. Курки — турботливі матері, що захищають та навчають своїх курчат.",
      calfDescription:
        "Теля — дитинча корови, що п'є молоко від матері. Телята грайливі та допитливі, вчаться у своїх матерів та інших членів стада. Вони швидко ростуть та можуть стояти за кілька годин після народження.",
      foalDescription:
        "Лоша — дитинча коня, яке може ходити та бігати невдовзі після народження. Лошата грайливі та енергійні, залишаються близько до матері для захисту. Вони вивчають важливі навички, граючись з іншими молодими конями.",
      foxDescription:
        "Лисиці — хитрі ссавці з пухнастими хвостами та загостреними вухами. Вони чудові мисливці, відомі своєю кмітливістю та пристосовністю. Лисиці живуть в лісах, степах і навіть містах по всьому світу.",
      deerDescription:
        "Олені — граціозні тварини з довгими ногами, багато видів мають роги. Вони травоїдні, що харчуються рослинами, листям та травою. Олені відомі своєю швидкістю та спритністю, живуть в лісах та на луках по всьому світу.",
      squirrelDescription:
        "Білки — маленькі, спритні гризуни з пухнастими хвостами. Вони чудові верхолази, що живуть на деревах та збирають горіхи на зиму. Білки відомі своїми швидкими рухами та здатністю стрибати між гілками.",
      hedgehogDescription:
        "Їжаки — маленькі ссавці, вкриті гострими голками для захисту. Вони згортаються в клубок, коли злякані, що ускладнює напад на них. Їжаки — нічні тварини, що харчуються комахами, равликами та черв'яками.",
      otterDescription:
        "Видри — грайливі водні ссавці з водонепроникним хутром. Вони чудові плавці, що полюють на рибу та молюсків. Видри використовують інструменти, як-от камені, щоб розколювати мушлі, та відомі своєю грайливою поведінкою.",
      pandaDescription:
        "Велик панди — великі ведмеді з Китаю, що харчуються переважно бамбуком. Вони мають характерне чорно-біле хутро та чудово лазять по деревах. Панди — зникаючі тварини, що проводять більшу частину дня, їдячи та відпочиваючи.",
      koalaDescription:
        "Коали — сумчасті з Австралії, що живуть на евкаліптових деревах. Вони сплять до 20 годин на день та харчуються лише листям евкаліпта. Коали носять своїх малюків у сумці, як кенгуру.",
      hippopotamusDescription:
        "Гіпопотами — великі напівводні ссавці з Африки. Вони проводять більшу частину дня у воді, щоб залишатися прохолодними. Незважаючи на громіздкий вигляд, бегемоти можуть швидко бігати на суші та дуже захищають свою територію.",
      rhinocerosDescription:
        "Носороги — великі ссавці з товстою шкірою та одним або двома рогами на морді. Вони травоїдні, що харчуються травою та листям. Носороги мають поганий зір, але відмінний слух та нюх.",
      chimpanzeeDescription:
        "Шимпанзе — розумні мавпи, що поділяють 98% своєї ДНК з людьми. Вони живуть соціальними групами та використовують інструменти для добування їжі. Шимпанзе спілкуються за допомогою звуків, жестів та виразів обличчя.",
      eagleDescription:
        "Орли — великі хижі птахи з потужними пазурами та чудовим зором. Вони можуть помітити маленьких тварин з висоти в небі. Орли будують великі гнізда та є символами сили та свободи.",
      woodpeckerDescription:
        "Дятли — птахи з міцними дзьобами, що свердлять кору дерев. Вони шукають комах, що живуть всередині дерев, та створюють дупла для гніздування. Дятли можуть дзьобати до 20 разів на секунду без травм.",
      seagullDescription:
        "Мартини — прибережні птахи, відомі своїми гучними криками та поведінкою падальників. Вони мають перетинчасті лапи та можуть пити як прісну, так і солону воду. Мартини — розумні птахи, що часто слідують за рибальськими човнами.",
      crowDescription:
        "Ворони — високорозумні чорні птахи, що можуть вирішувати складні задачі. Вони використовують інструменти, розпізнають людські обличчя та навіть можуть тримати образи. Ворони живуть сімейними групами та працюють разом для пошуку їжі.",
      vultureDescription:
        "Грифи — великі птахи-падальники з лисими головами та гострими дзьобами. Вони очищають довкілля, харчуючись мертвими тваринами. Грифи можуть літати високо в небі годинами, шукаючи їжу своїм гострим зором.",
      hummingbirdDescription:
        "Колібрі — крихітні, барвисті птахи, що можуть зависати в повітрі. Вони махають крилами до 80 разів на секунду, створюючи дзижчання. Колібрі харчуються нектаром квітів та мають дивовижні здібності до польоту.",
      ostrichDescription:
        "Страуси — найбільші птахи у світі, але вони не можуть літати. Вони мають потужні ноги, що можуть бігти до 70 км/год. Страуси мають великі очі та несуть найбільші яйця серед усіх видів птахів.",
      pelicanDescription:
        "Пелікани — великі водні птахи з характерною сумкою під дзьобом. Вони використовують цю сумку, щоб виловлювати рибу з води. Пелікани часто працюють разом у групах, щоб ловити рибу ефективніше.",
      walrusDescription:
        "Моржі — великі морські ссавці з довгими іклами та товстим салом. Вони живуть у водах Арктики та використовують ікла, щоб витягуватися на лід. Моржі — соціальні тварини, що збираються великими групами.",
      seaLionDescription:
        "Морські леви — морські ссавці, відомі своєю грайливою поведінкою та гучним гавканням. Вони чудові плавці з ластами замість ніг. Морські леви розумні та їх можна навчити виконувати трюки.",
      starfishDescription:
        "Морські зірки — морські тварини з п'ятьма променями. Вони можуть відростити втрачені промені та рухаються за допомогою крихітних ніжок-трубочок. Морські зірки живуть на дні океану та харчуються молюсками й іншими дрібними морськими створіннями.",
      seahorseDescription:
        "Морські коники — маленькі риби, що плавають вертикально та мають голову, схожу на конячу. Самці морських коників носять малюків у спеціальній сумці, поки вони не будуть готові народитися. Вони використовують свій згорнутий хвіст, щоб прикріплюватися до водоростей.",
      jellyfishDescription:
        "Медузи — стародавні морські створіння з м'якими, прозорими тілами та жалючими щупальцями. Вони дрейфують океанськими течіями та світяться в темряві. Медузи існують понад 500 мільйонів років.",
      clownfishDescription:
        "Риби-клоуни — маленькі оранжеві риби з білими смугами, що живуть в морських анемонах. Жалючі щупальця анемона захищають їх від хижаків. Риби-клоуни мають спеціальну слиз, що запобігає ужаленню.",
      frogDescription:
        "Жаби — земноводні, що живуть як у воді, так і на суші. Вони ловлять комах своїми довгими липкими язиками. Жаби починають життя як пуголовки у воді, перш ніж виростити ноги та перейти на сушу.",
      toadDescription:
        "Ропухи — земноводні, схожі на жаб, але з сухою горбкуватою шкірою. Вони живуть переважно на суші та чудово контролюють шкідників, поїдаючи багато комах. Ропухи можуть жити багато років, а деякі види досить великі.",
      lizardDescription:
        "Ящірки — рептилії з лускатою шкірою, чотирма ногами та більшість мають довгі хвости. Вони часто можуть відкинути хвости, щоб втекти від хижаків, та виростити нові. Ящірки живуть у теплому кліматі по всьому світу.",
      iguanaDescription:
        "Ігуани — великі ящірки з шипами вздовж спини. Вони чудові плавці та верхолази, що харчуються рослинами. Деякі ігуани можуть виростати понад 6 футів завдовжки, включаючи хвіст.",
      salamanderDescription:
        "Саламандри — земноводні, схожі на ящірок, але з вологою шкірою. Вони можуть регенерувати втрачені кінцівки та хвости. Більшість саламандр живуть у вологих лісах біля струмків та ставків.",
      butterflyDescription:
        "Метелики — барвисті комахи з чотирма великими крилами, вкритими крихітними лусочками. Вони починають життя як гусениці перед перетворенням у лялечці. Метелики харчуються нектаром квітів та допомагають запилювати рослини.",
      grasshopperDescription:
        "Коники — стрибаючі комахи з потужними задніми ногами. Вони створюють цвіркаючі звуки, тертям ніг. Коники харчуються рослинами та можуть стрибати до 20 разів більше довжини свого тіла.",
      dragonflyDescription:
        "Бабки — стародавні комахи з чотирма прозорими крилами та великими очима. Вони вмілі льотуни, що можуть зависати, літати назад та ловити здобич у повітрі. Бабки проводять більшу частину життя як водні німфи.",
      spiderDescription:
        "Павуки — восьминогі павукоподібні, що плетуть шовкові павутини для ловлі здобичі. Вони вводять отруту, щоб паралізувати комах. Більшість павуків нешкідливі для людей та допомагають контролювати популяції шкідників.",
      mosquitoDescription:
        "Комарі — маленькі літаючі комахи, відомі своїми свербіючими укусами. Лише самки комарів кусають, щоб отримати кров для своїх яєць. Комарі зустрічаються по всьому світу та привертаються вуглекислим газом та теплом тіла.",
      mouseDescription:
        "Миші — маленькі гризуни з довгими хвостами та великими вухами. Вони зустрічаються майже скрізь у світі та відомі своєю здатністю протискатися через крихітні отвори. Миші — розумні, соціальні тварини, які спілкуються через писк та запахи.",
      slothDescription:
        "Лінивці — повільні ссавці, які живуть на деревах у тропічних лісах Центральної та Південної Америки. Вони сплять до 20 годин на день і рухаються так повільно, що на їхньому хутрі ростуть водорості. Незважаючи на повільність, лінивці чудово плавають.",
      wormDescription:
        "Хробаки — безхребетні з м'яким тілом, які живуть у ґрунті. Дощові черв'яки покращують якість ґрунту, розкладаючи органічну речовину та створюючи тунелі, які дозволяють повітрю та воді досягати коренів рослин. Вони не мають очей чи вух, але можуть відчувати світло та вібрації.",
      flyDescription:
        "Мухи — поширені комахи з великими складними очима та прозорими крилами. Вони можуть ходити по стелях та стінах, використовуючи липкі подушечки на лапках. Мухи відчувають смак лапками і можуть їсти лише рідини, використовуючи свій губчастий ротовий апарат.",
      beetleDescription:
        "Жуки — комахи з твердими надкрилами, які захищають літаючі крила знизу. Вони є найбільшою групою тварин на Землі з понад 400 000 видів. Жуків можна знайти майже в кожному середовищі існування, і вони бувають різних кольорів та розмірів.",
      skunkDescription:
        "Скунси — ссавці, відомі своїм чорно-білим хутром та здатністю розпилювати рідину з сильним запахом, коли їм загрожує небезпека. Цей спрей може досягати до 3 метрів і допомагає захиститися від хижаків. Скунси переважно нічні тварини та їдять як рослини, так і дрібних тварин.",
      beaverDescription:
        "Бобри — великі гризуни, відомі будівництвом дамб та хаток у річках та струмках. Їхні міцні зуби можуть рубати дерева, а плоскі хвости допомагають їм плавати та сигналізувати про небезпеку, б'ючи по воді. Дамби бобрів створюють водно-болотні угіддя, які забезпечують дім багатьом іншим тваринам.",
      cockroachDescription:
        "Таргани — стародавні комахи, які вижили протягом мільйонів років. Вони неймовірно витривалі та можуть жити майже в будь-якому середовищі. Таргани нічні тварини і можуть бігати дуже швидко. Вони мають плоскі тіла, які допомагають їм ховатися у вузьких місцях.",
    },
    animals: {
      Dog: "Пес",
      Cat: "Кіт",
      Lion: "Лев",
      Elephant: "Слон",
      Giraffe: "Жирафа",
      Monkey: "Мавпа",
      Penguin: "Пінгвін",
      Zebra: "Зебра",
      Tiger: "Тигр",
      Rabbit: "Кролик",
      Rooster: "Півень",
      Cow: "Корова",
      Horse: "Кінь",
      Bird: "Птах",
      Wolf: "Вовк",
      Goose: "Гуска",
      Donkey: "Віслюк",
      Bear: "Ведмідь",
      Shark: "Акула",
      Turtle: "Черепаха",
      Octopus: "Восьминіг",
      Crab: "Краб",
      Whale: "Кит",
      Dolphin: "Дельфін",
      Snail: "Равлик",
      Ant: "Мураха",
      Ladybug: "Божа корівка",
      Crocodile: "Крокодил",
      Bat: "Кажан",
      Parrot: "Папуга",
      Moose: "Лось",
      Llama: "Лама",
      Buffalo: "Буйвол",
      Turkey: "Індик",
      Peacock: "Павич",
      Swan: "Лебідь",
      Bee: "Бджола",
      Caterpillar: "Гусінь",
      Scorpion: "Скорпіон",
      Lobster: "Омар",
      Seal: "Тюлень",
      Raccoon: "Єнот",
      Badger: "Борсук",
      Boar: "Кабан",
      Camel: "Верблюд",
      Chameleon: "Хамелеон",
      Flamingo: "Фламінго",
      Gorilla: "Горила",
      Kangaroo: "Кенгуру",
      Leopard: "Леопард",
      Sheep: "Вівця",
      Chicken: "Курка",
      Pig: "Свиня",
      Goat: "Коза",
      Bull: "Бик",
      Duck: "Качка",
      Snake: "Змія",
      Raven: "Ворона",
      Owl: "Сова",
      Ram: "Баран",
      Hen: "Курка",
      Fox: "Лисиця",
      Squirrel: "Білка",
      Hedgehog: "Їжак",
      Otter: "Видра",
      Panda: "Панда",
      Koala: "Коала",
      Hippopotamus: "Гіпопотам",
      Rhinoceros: "Носоріг",
      Chimpanzee: "Шимпанзе",
      Eagle: "Орел",
      Woodpecker: "Дятел",
      Seagull: "Мартин",
      Ostrich: "Страус",
      Pelican: "Пелікан",
      Starfish: "Морська зірка",
      Seahorse: "Морський коник",
      Jellyfish: "Медуза",
      Clownfish: "Риба-клоун",
      Frog: "Жаба",
      Butterfly: "Метелик",
      Grasshopper: "Коник",
      Spider: "Павук",
      Mosquito: "Комар",
      Mouse: "Миша",
      Sloth: "Лінивець",
      Worm: "Хробак",
      Fly: "Муха",
      Beetle: "Жук",
      Skunk: "Скунс",
      Beaver: "Бобер",
      Cockroach: "Тарган",
    },
  },
  ru: {
    startScreen: {
      title: "Исследователь животных",
      subtitle: "Найди животных!",
      byName: "По названию",
      bySound: "По звуку",
      showAll: "Показать все",
      secret: "Секретное животное",
      secretDescription: "Откройте загадочное животное!",
      animalPairs: "Пары животных",
      animalPairsDescription: "Найди пары!",
    },
    score: "Счёт",
    findThe: "Найди:",
    findThePairs: "Найди пары!",
    greatJob: "Отлично!",
    youFoundIt: "Тебе удалось найти!",
    startFromBeginning: "Сначала",
    whoSaysThis: "Кто так говорит?",
    replaySound: "🔊 Играть снова",
    showAllTitle: "Все животные",
    backToList: "Вернуться ко всем животным",
    speakName: "Нзвание",
    playSound: "Звуки",
    searchPlaceholder: "Поиск животных...",
    noResults: "Животные не найдены",
    menu: "Меню",
    sound: "Звук",
    music: "Музыка",
    language: "Язык",
    gameMode: "Режим игры",
    enterFullScreen: "Войти в полноэкранный режим",
    exitFullScreen: "Выйти из полноэкранного режима",
    privacyPolicy: "Политика конфиденциальности",
    viewImages: "Изображения",
    viewVideos: "Видео",
    view3DModel: "3D Модель",
    viewWikipedia: "Википедия",
    leavingAppMessage: "Вы покидаете приложение. Продолжить?",
    comingSoon: "Скоро",
    close: "Закрыть",
    externalLink: "Внешняя ссылка",
    cancel: "Отмена",
    continue: "Продолжить",
    exitApp: "Выйти из игры",
    exitAppMessage: "Вы уверены, что хотите выйти?",
    offlineBannerTitle: "Нет подключения к Интернету",
    offlineBannerMessage: "Некоторый контент может быть недоступен",
    requiresInternet: "Требуется интернет",
    cachedContent: "Кешировано",
    error: "Ошибка",
    browserNotInstalledError:
      "Не удалось открыть ссылку: {error}\n\nПожалуйста, убедитесь, что у вас установлен веб-браузер.",
    animalDescriptions: {
      dogDescription:
        "Собаки — верные, дружелюбные компаньоны, одомашненные тысячи лет назад. Они бывают разных пород и размеров, каждая с уникальными характеристиками. Известные своим интеллектом и обучаемостью, собаки служат домашними животными, рабочими животными и служебными животными.",
      catDescription:
        "Кошки — независимые, ловкие охотники, известные своей грацией и компанейством. Одомашненные около 10 000 лет назад, они являются одними из самых популярных домашних животных в мире. Кошки известны своим игривым поведением, привычками ухода и способностью формировать прочные связи со своими владельцами.",
      lionDescription:
        "Львы — крупные хищные кошки, живущие группами, называемыми прайдами. Известные как 'Король джунглей', львы являются символами силы и мужества. Они родом из Африки, небольшая популяция существует в Индии. Львы — единственные кошки, живущие социальными группами.",
      elephantDescription:
        "Слоны — самые большие наземные животные на Земле, известные своим интеллектом, крепкими семейными связями и замечательной памятью. У них есть длинные хоботы, используемые для дыхания, обоняния, прикосновения, хватания и производства звуков.",
      giraffeDescription:
        "Жирафы — самые высокие млекопитающие на Земле, их длинные шеи помогают им достигать листьев высоко на деревьях. У них характерный пятнистый узор и длинные ноги, что делает их грациозными бегунами.",
      monkeyDescription:
        "Обезьяны — умные приматы, обитающие в тропических регионах. Они известны своей ловкостью, любопытством и сложным социальным поведением. Большинство видов живет на деревьях и отлично лазает.",
      penguinDescription:
        "Пингвины — нелетающие птицы, приспособленные к жизни в воде. Они отличные пловцы и ныряльщики, использующие свои крылья как ласты. Большинство видов живет в холодном климате, особенно в Антарктиде.",
      zebraDescription:
        "Зебры — африканские млекопитающие, известные своими характерными черно-белыми полосами. Каждая зебра имеет уникальный узор полос, как отпечаток пальца. Они живут стадами и являются близкими родственниками лошадей.",
      tigerDescription:
        "Тигры — самые крупные дикие кошки, известные своим оранжевым мехом с черными полосами. Они мощные охотники и отличные пловцы. Тигры — одиночные животные, которые охотятся преимущественно ночью.",
      rabbitDescription:
        "Кролики — небольшие млекопитающие с длинными ушами, мощными задними лапами и мягким мехом. Они известны своей скоростью и способностью прыгать. Кролики — социальные животные, живущие группами, называемыми колониями.",
      roosterDescription:
        "Петухи — самцы кур, известные своим ярким оперением и громким криком на рассвете. Они защищают свое стадо и являются символами бдительности и мужества во многих культурах.",
      cowDescription:
        "Коровы — одомашненные животные, разводимые для получения молока, мяса и кожи. Они являются социальными стадными животными с отличной памятью и могут формировать тесные дружеские отношения. Коровы общаются через различные звуки и язык тела.",
      horseDescription:
        "Лошади — крупные, мощные животные, одомашненные тысячи лет назад. Они известны своей скоростью, силой и интеллектом. Лошади использовались для транспорта, работы и спорта.",
      birdDescription:
        "Птицы — теплокровные позвоночные с перьями, крыльями и клювами. Они единственные животные с перьями, и большинство видов может летать. Птицы обитают в каждой среде обитания на Земле.",
      wolfDescription:
        "Волки — дикие псовые, которые живут и охотятся стаями. Они высокоинтеллектуальные и социальные животные со сложными системами коммуникации. Волки играют важную роль в поддержании баланса экосистемы.",
      gooseDescription:
        "Гуси — крупные водоплавающие птицы, известные своими V-образными формациями во время миграции. Они являются социальными птицами, создающими пары на всю жизнь и известными своим защитным поведением по отношению к потомству.",
      donkeyDescription:
        "Ослы — одомашненные представители семейства лошадиных, известные своим умом, терпением и уверенностью в походке. Они сильные, выносливые животные, используемые для переноски грузов и в качестве компаньонов.",
      bearDescription:
        "Медведи — крупные, мощные млекопитающие, распространенные в Северном полушарии. Они всеядны с отличным обонянием. Большинство видов медведей могут стоять и ходить на задних лапах.",
      sharkDescription:
        "Акулы — древние рыбы, существующие более 400 миллионов лет. У них есть хрящи вместо костей и они оснащены несколькими рядами острых зубов. Акулы играют жизненно важную роль в океанических экосистемах.",
      turtleDescription:
        "Черепахи — рептилии с защитными панцирями. Они являются одними из самых древних групп рептилий, насчитывающих более 200 миллионов лет. Черепахи могут жить на суше и в воде, в зависимости от вида.",
      octopusDescription:
        "Осьминоги — умные морские животные с восемью щупальцами и тремя сердцами. Они могут менять цвет и текстуру для камуфляжа. Осьминоги — мастера побега и решения проблем.",
      crabDescription:
        "Крабы — ракообразные с твердым экзоскелетом и десятью лапами, включая две клешни. Они ходят боком и могут быть найдены в океанах, пресной воде и на суше. Многие виды важны для морских экосистем.",
      whaleDescription:
        "Киты — самые большие животные, когда-либо жившие на Земле. Они умные морские млекопитающие, общающиеся через сложные вокализации. Киты играют решающую роль в здоровье океана.",
      dolphinDescription:
        "Дельфины — высокоинтеллектуальные морские млекопитающие, известные своей игривостью и сложным социальным поведением. Они используют эхолокацию для навигации и охоты и являются одними из самых умных животных на Земле.",
      snailDescription:
        "Улитки — моллюски со спиральными раковинами, которые они носят на спине. Они медленно передвигаются, используя мускулистую ногу, и оставляют след слизи. Улиток можно найти на суше и в воде.",
      antDescription:
        "Муравьи — социальные насекомые, живущие колониями с высокоорганизованными обществами. Они невероятно сильны для своего размера и работают вместе, чтобы строить сложные подземные гнезда и собирать пищу.",
      ladybugDescription:
        "Божьи коровки — маленькие, красочные жуки, обычно красного или оранжевого цвета с черными пятнами. Они являются полезными насекомыми, питающимися тлей и другими вредителями растений. Божьи коровки считаются символами удачи во многих культурах.",
      crocodileDescription:
        "Крокодилы — крупные рептилии, существующие миллионы лет. Они мощные хищники с сильными челюстями и отличными навыками охоты. Крокодилы проводят большую часть времени в воде.",
      batDescription:
        "Летучие мыши — единственные млекопитающие, способные к настоящему полету. Они используют эхолокацию для навигации в темноте, и большинство видов питается насекомыми. Летучие мыши играют важную роль в опылении и борьбе с вредителями.",
      parrotDescription:
        "Попугаи — красочные, умные птицы, известные своей способностью имитировать звуки и человеческую речь. У них сильные, изогнутые клювы, и они являются социальными птицами, часто создающими пары на всю жизнь.",
      mooseDescription:
        "Лоси — самые крупные представители семейства оленевых, самцы имеют впечатляющие рога. Они отличные пловцы и обитают в северных лесах. Лоси обычно являются одиночными животными.",
      llamaDescription:
        "Ламы — одомашненные южноамериканские животные, родственные верблюдам. Они используются для переноски грузов, шерсти и в качестве компаньонов. Ламы известны своим спокойным темпераментом и характерной внешностью.",
      buffaloDescription:
        "Буйволы — крупные, мощные бовиды, обитающие в Африке и Азии. Они живут стадами и известны своей силой и непредсказуемым поведением. Буйволы играют важную роль в своих экосистемах.",
      turkeyDescription:
        "Индейки — крупные птицы, являющиеся коренными жителями Северной Америки. Самцы, называемые индюками, имеют яркое оперение и распускают хвостовые перья во время брачных ритуалов. Индейки — социальные птицы, ночующие на деревьях.",
      peacockDescription:
        "Павлины — самцы павлинов, известные своим впечатляющим переливчатым хвостовым оперением с узорами, похожими на глаза. Они демонстрируют это оперение в сложных брачных танцах. Павлины являются коренными жителями Южной Азии.",
      swanDescription:
        "Лебеди — крупные, элегантные водоплавающие птицы, известные своей грацией и красотой. Они создают пары на всю жизнь и защищают свою территорию. Лебеди имеют длинные шеи и являются мощными летунами.",
      beeDescription:
        "Пчелы — летающие насекомые, необходимые для опыления цветов и сельскохозяйственных культур. Они живут колониями со сложной социальной структурой. Медоносные пчелы производят мед и воск, делая их важными для людей.",
      caterpillarDescription:
        "Гусеницы — личиночная стадия бабочек и мотыльков. У них сегментированные тела, и они проводят большую часть времени, поедая листья, чтобы расти. В конечном итоге они образуют куколку и превращаются во взрослых насекомых.",
      scorpionDescription:
        "Скорпионы — паукообразные с восемью ногами, клешнями и изогнутым хвостом с ядовитым жалом. Они являются древними существами, существующими более 400 миллионов лет и способными выживать в суровых условиях.",
      lobsterDescription:
        "Омары — крупные морские ракообразные с сильными клешнями и твердыми панцирями. Они могут жить много десятилетий и продолжают расти на протяжении всей жизни. Омары важны коммерчески и экологически.",
      sealDescription:
        "Тюлени — морские млекопитающие с ластами вместо ног. Они отличные пловцы и ныряльщики, проводят большую часть времени в воде, но выходят на берег для отдыха и размножения.",
      raccoonDescription:
        "Еноты — умные млекопитающие с характерными черными масками и полосатыми хвостами. Они высокоадаптивны, обитают в различных средах и известны своей ловкостью и способностью решать проблемы.",
      badgerDescription:
        "Барсуки — крепкие млекопитающие, известные своими способностями к копанию и мощными когтями. Они живут в подземных норах, называемых городищами, и являются преимущественно ночными. Барсуки яростно защищают свою территорию.",
      boarDescription:
        "Дикие кабаны — предки домашних свиней, известные своей силой и клыками. Они всеядны, обитают в лесах и являются высокоадаптивными. Кабаны — социальные животные, живущие группами.",
      camelDescription:
        "Верблюды — крупные млекопитающие, приспособленные к пустынной жизни, с горбами, которые хранят жир для энергии. Они могут долго обходиться без воды и имеют густой мех для защиты от экстремальных температур.",
      chameleonDescription:
        "Хамелеоны — рептилии, известные своей способностью менять цвет для камуфляжа и коммуникации. У них независимо движущиеся глаза, длинные липкие языки для ловли насекомых и цепкие хвосты.",
      flamingoDescription:
        "Фламинго — болотные птицы, известные своим ярким розовым цветом, который происходит от их диеты из водорослей и ракообразных. Они живут большими стаями и имеют длинные ноги для хождения по воде.",
      gorillaDescription:
        "Гориллы — самые крупные приматы, известные своим интеллектом и мягким нравом, несмотря на свой размер. Они живут семейными группами, возглавляемыми серебристоспинным самцом, и являются коренными жителями африканских лесов.",
      kangarooDescription:
        "Кенгуру — сумчатые, являющиеся коренными жителями Австралии, известные своими мощными задними лапами и способностью прыгать на больших скоростях. Самки носят своих детенышей, называемых джоуи, в сумках.",
      leopardDescription:
        "Леопарды — ловкие большие кошки с характерным пятнистым мехом. Они отличные верхолазы и часто затаскивают свою добычу на деревья. Леопарды — одиночные охотники, наиболее активные ночью.",
      sheepDescription:
        "Овцы — одомашненные животные, разводимые для шерсти, мяса и молока. Они социальные стадные животные с отличной памятью и могут распознавать отдельные лица. Овцы важны для людей на протяжении тысячелетий.",
      chickenDescription:
        "Куры — самые распространенные домашние птицы в мире. Они социальные птицы, общающиеся через различные звуки. Кур разводят для яиц и мяса, и они являются потомками джунглевых кур.",
      pigDescription:
        "Свиньи — умные и социальные животные, одомашненные тысячи лет назад. Они всеядны с отличным обонянием и известны своей чистотой, когда им предоставлено надлежащее пространство.",
      goatDescription:
        "Козы — выносливые, ловкие животные, которые могут лазить по крутой местности и есть широкий спектр растений. Они социальные стадные животные с игривым характером и одомашнены для молока, мяса и волокна.",
      bullDescription:
        "Быки — взрослые самцы крупного рогатого скота, известные своим размером, силой и агрессивным поведением, когда их провоцируют. Они были важны в сельском хозяйстве и имеют культурное значение во многих обществах.",
      duckDescription:
        "Утки — водоплавающие птицы с водонепроницаемым оперением, перепончатыми лапами и плоскими клювами. Они обитают как в пресной, так и в соленой воде и известны своими характерными крякающими звуками. Утки отличные пловцы.",
      snakeDescription:
        "Змеи — безногие рептилии, обитающие на всех континентах, кроме Антарктиды. Они глотают добычу целиком и имеют гибкие челюсти. Некоторые виды ядовиты, другие — удавы. Змеи играют важную роль в экосистемах.",
      ravenDescription:
        "Вороны — крупные, умные птицы, известные своими способностями к решению проблем и сложной вокализацией. Они часто ассоциируются с мифологией и фольклором. Вороны создают пары на всю жизнь и могут жить много лет.",
      owlDescription:
        "Совы — хищные птицы с большими глазами, отличным слухом и бесшумным полетом. Они преимущественно ночные охотники с вращающимися головами, которые могут поворачиваться почти на 270 градусов. Совы обитают на всех континентах, кроме Антарктиды.",
      alpacaDescription:
        "Альпаки — одомашненные животные из Южной Америки, родственные ламам. У них мягкая роскошная шерсть, используемая для изготовления теплой одежды. Альпаки — нежные умные животные, живущие стадами в горных регионах.",
      muleDescription:
        "Мулы — гибридные животные, рожденные от осла-самца и кобылы. Они известны своей силой, терпением и уверенностью. Мулов веками использовали для перевозки тяжелых грузов по сложной местности.",
      ramDescription:
        "Бараны — взрослые самцы овец с большими изогнутыми рогами. Они используют рога для соревнования с другими самцами в период размножения. Бараны — сильные животные, которые ведут и защищают свое стадо.",
      henDescription:
        "Куры — взрослые самки кур, несущие яйца. Это фермерские птицы, живущие группами и общающиеся различными кудахтаньями. Куры — заботливые матери, защищающие и обучающие своих цыплят.",
      calfDescription:
        "Телёнок — детёныш коровы, пьющий молоко от матери. Телята игривы и любопытны, учатся у своих матерей и других членов стада. Они быстро растут и могут стоять через несколько часов после рождения.",
      foalDescription:
        "Жеребёнок — детёныш лошади, который может ходить и бегать вскоре после рождения. Жеребята игривы и энергичны, остаются рядом с матерью для защиты. Они изучают важные навыки, играя с другими молодыми лошадьми.",
      foxDescription:
        "Лисы — хитрые млекопитающие с пушистыми хвостами и заострёнными ушами. Они отличные охотники, известные своим умом и приспособляемостью. Лисы живут в лесах, степях и даже городах по всему миру.",
      deerDescription:
        "Олени — грациозные животные с длинными ногами, многие виды имеют рога. Они травоядные, питающиеся растениями, листьями и травой. Олени известны своей скоростью и ловкостью, живут в лесах и на лугах по всему миру.",
      squirrelDescription:
        "Белки — маленькие ловкие грызуны с пушистыми хвостами. Они отличные верхолазы, живущие на деревьях и собирающие орехи на зиму. Белки известны своими быстрыми движениями и способностью прыгать между ветками.",
      hedgehogDescription:
        "Ёжики — маленькие млекопитающие, покрытые острыми иглами для защиты. Они сворачиваются в клубок, когда напуганы, что затрудняет нападение на них. Ёжики — ночные животные, питающиеся насекомыми, улитками и червями.",
      otterDescription:
        "Выдры — игривые водные млекопитающие с водонепроницаемым мехом. Они отличные пловцы, охотящиеся на рыбу и моллюсков. Выдры используют инструменты, такие как камни, чтобы раскалывать раковины, и известны своим игривым поведением.",
      pandaDescription:
        "Большие панды — крупные медведи из Китая, питающиеся в основном бамбуком. У них характерный черно-белый мех и они отлично лазают по деревьям. Панды — исчезающие животные, проводящие большую часть дня за едой и отдыхом.",
      koalaDescription:
        "Коалы — сумчатые из Австралии, живущие на эвкалиптовых деревьях. Они спят до 20 часов в день и питаются только листьями эвкалипта. Коалы носят своих детенышей в сумке, как кенгуру.",
      hippopotamusDescription:
        "Бегемоты — крупные полуводные млекопитающие из Африки. Они проводят большую часть дня в воде, чтобы оставаться прохладными. Несмотря на громоздкий вид, бегемоты могут быстро бегать по суше и очень защищают свою территорию.",
      rhinocerosDescription:
        "Носороги — крупные млекопитающие с толстой кожей и одним или двумя рогами на морде. Они травоядные, питающиеся травой и листьями. Носороги имеют плохое зрение, но отличный слух и обоняние.",
      chimpanzeeDescription:
        "Шимпанзе — умные обезьяны, разделяющие 98% своей ДНК с людьми. Они живут социальными группами и используют инструменты для добычи пищи. Шимпанзе общаются с помощью звуков, жестов и выражений лица.",
      eagleDescription:
        "Орлы — крупные хищные птицы с мощными когтями и отличным зрением. Они могут заметить мелких животных с большой высоты в небе. Орлы строят большие гнезда и являются символами силы и свободы.",
      woodpeckerDescription:
        "Дятлы — птицы с крепкими клювами, которые сверлят кору деревьев. Они ищут насекомых, живущих внутри деревьев, и создают дупла для гнездования. Дятлы могут долбить до 20 раз в секунду без травм.",
      seagullDescription:
        "Чайки — прибрежные птицы, известные своими громкими криками и падальным поведением. У них перепончатые лапы и они могут пить как пресную, так и соленую воду. Чайки — умные птицы, часто следующие за рыбацкими лодками.",
      crowDescription:
        "Вороны — высокоинтеллектуальные черные птицы, способные решать сложные задачи. Они используют инструменты, распознают человеческие лица и даже могут держать обиды. Вороны живут семейными группами и работают вместе для поиска пищи.",
      vultureDescription:
        "Грифы — крупные падальщики с лысыми головами и острыми клювами. Они очищают окружающую среду, питаясь мертвыми животными. Грифы могут парить высоко в небе часами, ища пищу своим острым зрением.",
      hummingbirdDescription:
        "Колибри — крошечные разноцветные птицы, которые могут зависать в воздухе. Они машут крыльями до 80 раз в секунду, создавая жужжание. Колибри питаются нектаром цветов и обладают удивительными способностями к полету.",
      ostrichDescription:
        "Страусы — самые большие птицы в мире, но они не могут летать. У них мощные ноги, которые могут бегать до 70 км/ч. Страусы имеют большие глаза и несут самые большие яйца среди всех видов птиц.",
      pelicanDescription:
        "Пеликаны — крупные водоплавающие птицы с характерным мешком под клювом. Они используют этот мешок, чтобы вылавливать рыбу из воды. Пеликаны часто работают вместе группами, чтобы ловить рыбу эффективнее.",
      walrusDescription:
        "Моржи — крупные морские млекопитающие с длинными клыками и толстым салом. Они живут в водах Арктики и используют клыки, чтобы вытаскиваться на лёд. Моржи — социальные животные, собирающиеся большими группами.",
      seaLionDescription:
        "Морские львы — морские млекопитающие, известные своим игривым поведением и громким лаем. Они отличные пловцы с ластами вместо ног. Морские львы умны и их можно обучить выполнять трюки.",
      starfishDescription:
        "Морские звёзды — морские животные с пятью лучами. Они могут отрастить потерянные лучи и передвигаются с помощью крошечных ножек-трубочек. Морские звёзды живут на дне океана и питаются моллюсками и другими мелкими морскими существами.",
      seahorseDescription:
        "Морские коньки — маленькие рыбы, которые плавают вертикально и имеют голову, похожую на лошадиную. Самцы морских коньков вынашивают детёнышей в специальной сумке, пока они не готовы родиться. Они используют свой свёрнутый хвост, чтобы прикрепляться к водорослям.",
      jellyfishDescription:
        "Медузы — древние морские существа с мягкими прозрачными телами и жалящими щупальцами. Они дрейфуют по океанским течениям и светятся в темноте. Медузы существуют более 500 миллионов лет.",
      clownfishDescription:
        "Рыбы-клоуны — маленькие оранжевые рыбки с белыми полосами, живущие в морских анемонах. Жалящие щупальца анемона защищают их от хищников. Рыбы-клоуны имеют специальную слизь, которая предотвращает ужаливание.",
      frogDescription:
        "Лягушки — земноводные, живущие как в воде, так и на суше. Они ловят насекомых своими длинными липкими языками. Лягушки начинают жизнь как головастики в воде, прежде чем вырастить ноги и перейти на сушу.",
      toadDescription:
        "Жабы — земноводные, похожие на лягушек, но с сухой бугристой кожей. Они живут в основном на суше и отлично контролируют вредителей, поедая много насекомых. Жабы могут жить много лет, а некоторые виды довольно крупные.",
      lizardDescription:
        "Ящерицы — рептилии с чешуйчатой кожей, четырьмя ногами и большинство имеют длинные хвосты. Они часто могут отбросить хвосты, чтобы убежать от хищников, и вырастить новые. Ящерицы живут в теплом климате по всему миру.",
      iguanaDescription:
        "Игуаны — крупные ящерицы с шипами вдоль спины. Они отличные пловцы и верхолазы, питающиеся растениями. Некоторые игуаны могут вырастать более 6 футов в длину, включая хвост.",
      salamanderDescription:
        "Саламандры — земноводные, похожие на ящериц, но с влажной кожей. Они могут регенерировать потерянные конечности и хвосты. Большинство саламандр живут во влажных лесах у ручьев и прудов.",
      butterflyDescription:
        "Бабочки — красочные насекомые с четырьмя большими крыльями, покрытыми крошечными чешуйками. Они начинают жизнь как гусеницы перед преобразованием в куколке. Бабочки питаются нектаром цветов и помогают опылять растения.",
      grasshopperDescription:
        "Кузнечики — прыгающие насекомые с мощными задними ногами. Они издают стрекочущие звуки, потирая ноги. Кузнечики питаются растениями и могут прыгать до 20 раз больше длины своего тела.",
      dragonflyDescription:
        "Стрекозы — древние насекомые с четырьмя прозрачными крыльями и большими глазами. Они искусные летуны, которые могут зависать, летать назад и ловить добычу в воздухе. Стрекозы проводят большую часть жизни как водные нимфы.",
      spiderDescription:
        "Пауки — восьминогие паукообразные, которые плетут шёлковые паутины для ловли добычи. Они впрыскивают яд, чтобы парализовать насекомых. Большинство пауков безвредны для человека и помогают контролировать популяции вредителей.",
      mosquitoDescription:
        "Комары — маленькие летающие насекомые, известные своими зудящими укусами. Только самки комаров кусают, чтобы получить кровь для своих яиц. Комары встречаются по всему миру и привлекаются углекислым газом и теплом тела.",
      mouseDescription:
        "Мыши — маленькие грызуны с длинными хвостами и большими ушами. Они встречаются почти повсюду в мире и известны своей способностью протискиваться через крошечные отверстия. Мыши — умные, социальные животные, которые общаются через писк и запахи.",
      slothDescription:
        "Ленивцы — медленные млекопитающие, живущие на деревьях в тропических лесах Центральной и Южной Америки. Они спят до 20 часов в день и двигаются так медленно, что на их шерсти растут водоросли. Несмотря на медлительность, ленивцы отлично плавают.",
      wormDescription:
        "Черви — беспозвоночные с мягким телом, которые живут в почве. Дождевые черви улучшают качество почвы, разлагая органическое вещество и создавая туннели, которые позволяют воздуху и воде достигать корней растений. У них нет глаз или ушей, но они могут чувствовать свет и вибрации.",
      flyDescription:
        "Мухи — распространённые насекомые с большими сложными глазами и прозрачными крыльями. Они могут ходить по потолкам и стенам, используя липкие подушечки на лапках. Мухи чувствуют вкус лапками и могут есть только жидкости, используя свой губчатый ротовой аппарат.",
      beetleDescription:
        "Жуки — насекомые с твёрдыми надкрыльями, которые защищают летающие крылья снизу. Они являются самой большой группой животных на Земле с более чем 400 000 видов. Жуков можно найти почти в каждой среде обитания, и они бывают разных цветов и размеров.",
      skunkDescription:
        "Скунсы — млекопитающие, известные своим чёрно-белым мехом и способностью распылять жидкость с сильным запахом при угрозе. Этот спрей может достигать до 3 метров и помогает защититься от хищников. Скунсы преимущественно ночные животные и едят как растения, так и мелких животных.",
      beaverDescription:
        "Бобры — крупные грызуны, известные строительством плотин и хаток в реках и ручьях. Их крепкие зубы могут рубить деревья, а плоские хвосты помогают им плавать и сигнализировать об опасности, шлёпая по воде. Плотины бобров создают водно-болотные угодья, которые обеспечивают дом многим другим животным.",
      cockroachDescription:
        "Тараканы — древние насекомые, которые выжили на протяжении миллионов лет. Они невероятно выносливы и могут жить практически в любой среде. Тараканы ведут ночной образ жизни и могут бегать очень быстро. У них плоские тела, которые помогают им прятаться в узких местах.",
    },
    animals: {
      Dog: "Собака",
      Cat: "Кот",
      Lion: "Лев",
      Elephant: "Слон",
      Giraffe: "Жираф",
      Monkey: "Обезьяна",
      Penguin: "Пингвин",
      Zebra: "Зебра",
      Tiger: "Тигр",
      Rabbit: "Кролик",
      Rooster: "Петух",
      Cow: "Корова",
      Horse: "Лошадь",
      Bird: "Птица",
      Wolf: "Волк",
      Goose: "Гусь",
      Donkey: "Осёл",
      Bear: "Медведь",
      Shark: "Акула",
      Turtle: "Черепаха",
      Octopus: "Осьминог",
      Crab: "Краб",
      Whale: "Кит",
      Dolphin: "Дельфин",
      Snail: "Улитка",
      Ant: "Муравей",
      Ladybug: "Божья коровка",
      Crocodile: "Крокодил",
      Bat: "Летучая мышь",
      Parrot: "Попугай",
      Moose: "Лось",
      Llama: "Лама",
      Buffalo: "Буйвол",
      Turkey: "Индюк",
      Peacock: "Павлин",
      Swan: "Лебедь",
      Bee: "Пчела",
      Caterpillar: "Гусеница",
      Scorpion: "Скорпион",
      Lobster: "Омар",
      Seal: "Тюлень",
      Raccoon: "Енот",
      Badger: "Барсук",
      Boar: "Кабан",
      Camel: "Верблюд",
      Chameleon: "Хамелеон",
      Flamingo: "Фламинго",
      Gorilla: "Горилла",
      Kangaroo: "Кенгуру",
      Leopard: "Леопард",
      Sheep: "Овца",
      Chicken: "Курица",
      Pig: "Свинья",
      Goat: "Коза",
      Bull: "Бык",
      Duck: "Утка",
      Snake: "Змея",
      Raven: "Ворон",
      Owl: "Сова",
      Ram: "Баран",
      Hen: "Курица",
      Fox: "Лиса",
      Squirrel: "Белка",
      Hedgehog: "Ёж",
      Otter: "Выдра",
      Panda: "Панда",
      Koala: "Коала",
      Hippopotamus: "Бегемот",
      Rhinoceros: "Носорог",
      Chimpanzee: "Шимпанзе",
      Eagle: "Орёл",
      Woodpecker: "Дятел",
      Seagull: "Чайка",
      Ostrich: "Страус",
      Pelican: "Пеликан",
      Starfish: "Морская звезда",
      Seahorse: "Морской конёк",
      Jellyfish: "Медуза",
      Clownfish: "Рыба-клоун",
      Frog: "Лягушка",
      Butterfly: "Бабочка",
      Grasshopper: "Кузнечик",
      Spider: "Паук",
      Mosquito: "Комар",
      Mouse: "Мышь",
      Sloth: "Ленивец",
      Worm: "Червь",
      Fly: "Муха",
      Beetle: "Жук",
      Skunk: "Скунс",
      Beaver: "Бобр",
      Cockroach: "Таракан",
    },
  },
};
