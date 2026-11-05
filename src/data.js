// ---------------------------------------------------------------------------
// STARFALL VALE — game data
// ---------------------------------------------------------------------------

export const SEASONS = ['spring', 'summer', 'fall', 'winter'];
export const SEASON_LABEL = { spring: 'Spring', summer: 'Summer', fall: 'Autumn', winter: 'Winter' };
export const SEASON_ICON = { spring: 'blossom', summer: 'sun', fall: 'leaf', winter: 'snow' };
export const DAYS_PER_SEASON = 28;
export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const ITEMS = {
  // ---- tools -------------------------------------------------------------
  hoe: {
    name: 'Moonsteel Hoe', cat: 'tool', sell: 0, desc: 'Tills the rich soil of the vale. A gift from Grandmother Sable.',
    art: { kind: 'tool', tool: 'hoe', c1: '#b9e4ff', c2: '#7e5a3a', c3: '#e8c170' }, unique: true,
  },
  wateringcan: {
    name: 'Dewfall Can', cat: 'tool', sell: 0, desc: 'Refills itself with moon-dew each morning. Waters one plot.',
    art: { kind: 'tool', tool: 'can', c1: '#79c7d8', c2: '#3d7d92', c3: '#d7f2ff' }, unique: true,
  },
  axe: {
    name: 'Whisperwood Axe', cat: 'tool', sell: 40, desc: 'Chops trees and stumps. Buy it from Bram at the forge.',
    art: { kind: 'tool', tool: 'axe', c1: '#cfd9e8', c2: '#7e5a3a', c3: '#f2f6ff' }, unique: true,
  },
  pickaxe: {
    name: 'Glimmer Pick', cat: 'tool', sell: 50, desc: 'Breaks stone and ore. Required to enter the Glimmerdeep Mine.',
    art: { kind: 'tool', tool: 'pick', c1: '#cdd6e6', c2: '#7e5a3a', c3: '#8fe3ff' }, unique: true,
  },
  fishingrod: {
    name: 'Starline Rod', cat: 'tool', sell: 45, desc: 'Catches the magical fish of Starfall Lake.',
    art: { kind: 'tool', tool: 'rod', c1: '#c7a06a', c2: '#7e5a3a', c3: '#8fe3ff' }, unique: true,
  },
  sword: {
    name: 'Starfall Blade', cat: 'tool', sell: 60, desc: 'A short blade for the creatures that stir in the deep.',
    art: { kind: 'tool', tool: 'sword', c1: '#d8e6ff', c2: '#c99b4a', c3: '#8fe3ff' }, unique: true,
  },

  // ---- seeds -------------------------------------------------------------
  moonseed: {
    name: 'Moonseed', cat: 'seed', sell: 8, desc: 'Plant in spring or autumn. Grows into a Moonberry in 4 days.',
    crop: 'moonberry', art: { kind: 'seed', c1: '#9fc3ff', c2: '#d9c9a0' },
  },
  whisperwheatseed: {
    name: 'Whisper Wheat Seeds', cat: 'seed', sell: 5, desc: 'A humble grain that grows in every season. 3 days.',
    crop: 'whisperwheat', art: { kind: 'seed', c1: '#e8d79a', c2: '#d9c9a0' },
  },
  sunbloomseed: {
    name: 'Sunbloom Seed', cat: 'seed', sell: 20, desc: 'Plant in summer. A flower that hums with daylight. 5 days.',
    crop: 'sunbloom', art: { kind: 'seed', c1: '#ffd76e', c2: '#d9c9a0' },
  },
  crystalrootseed: {
    name: 'Crystalroot Seed', cat: 'seed', sell: 28, desc: 'Plant in autumn. Roots of humming crystal. 6 days.',
    crop: 'crystalroot', art: { kind: 'seed', c1: '#a78bfa', c2: '#d9c9a0' },
  },
  frostlilyseed: {
    name: 'Frostlily Seed', cat: 'seed', sell: 24, desc: 'Plant in winter. Blooms through the snow. 5 days.',
    crop: 'frostlily', art: { kind: 'seed', c1: '#c8f4ff', c2: '#d9c9a0' },
  },
  starmelonseed: {
    name: 'Starmelon Seed', cat: 'seed', sell: 45, desc: 'Plant in summer. A heavy, star-flecked melon. 8 days; regrows.',
    crop: 'starmelon', art: { kind: 'seed', c1: '#ff9f8e', c2: '#d9c9a0' },
  },

  // ---- crops -------------------------------------------------------------
  moonberry: {
    name: 'Moonberry', cat: 'crop', sell: 55, energy: 22, desc: 'It glows faintly, like a memory of moonlight. Elowen adores these.',
    art: { kind: 'crop', shape: 'berry', c1: '#bcd8ff', c2: '#7ca8ef', c3: '#e9f4ff' },
  },
  whisperwheat: {
    name: 'Whisper Wheat', cat: 'crop', sell: 28, energy: 14, desc: 'When the wind moves through it, it sounds like a secret.',
    art: { kind: 'crop', shape: 'wheat', c1: '#e8d08a', c2: '#b7934c', c3: '#f7ecc2' },
  },
  sunbloom: {
    name: 'Sunbloom', cat: 'crop', sell: 85, energy: 28, desc: 'A golden flower that turns to face you, not the sun.',
    art: { kind: 'crop', shape: 'bloom', c1: '#ffd15c', c2: '#e8892f', c3: '#fff3b0' },
  },
  crystalroot: {
    name: 'Crystalroot', cat: 'crop', sell: 115, energy: 32, desc: 'A sweet root wrapped in violet crystal. Bram buys these for the forge.',
    art: { kind: 'crop', shape: 'root', c1: '#a98bf0', c2: '#6d4fb3', c3: '#e5d8ff' },
  },
  frostlily: {
    name: 'Frostlily', cat: 'crop', sell: 100, energy: 24, desc: 'Its petals never melt, even in summer.',
    art: { kind: 'crop', shape: 'flower', c1: '#c9f3ff', c2: '#7db9d9', c3: '#ffffff' },
  },
  starmelon: {
    name: 'Starmelon', cat: 'crop', sell: 220, energy: 48, desc: 'The seeds inside rearrange themselves into constellations.',
    art: { kind: 'crop', shape: 'melon', c1: '#f48879', c2: '#b64c55', c3: '#ffe6b8' },
  },

  // ---- forage ------------------------------------------------------------
  moonpetal: {
    name: 'Moonpetal', cat: 'forage', sell: 30, energy: 10, desc: 'A pale forest flower that only opens at dusk.',
    art: { kind: 'crop', shape: 'flower', c1: '#e7e2ff', c2: '#a79bd9', c3: '#fffbe8' },
  },
  glimmercap: {
    name: 'Glimmercap', cat: 'forage', sell: 45, energy: 16, desc: 'A mushroom that glows when it is happy.',
    art: { kind: 'crop', shape: 'mushroom', c1: '#9ff0c7', c2: '#4f9c78', c3: '#ecfff7' },
  },
  dewdrop: {
    name: 'Dewdrop Berry', cat: 'forage', sell: 25, energy: 12, desc: 'Sweet, cold, and full of morning light.',
    art: { kind: 'crop', shape: 'berry', c1: '#ff9bab', c2: '#d95b74', c3: '#ffe1e7' },
  },
  ancienttwig: {
    name: 'Ancient Twig', cat: 'forage', sell: 18, desc: 'A gnarled twig that hums when held. Useful in a few strange recipes.',
    art: { kind: 'material', mat: 'twig', c1: '#9a7752', c2: '#5f4630' },
  },
  stardust: {
    name: 'Marxy Stardust', cat: 'relic', sell: 120, desc: 'A pinch of giggling starlight, shed by a happy Marxy.',
    art: { kind: 'relic', relic: 'dust', c1: '#ffe9a8', c2: '#f4b84c' },
  },

  // ---- fish --------------------------------------------------------------
  silverminnow: {
    name: 'Silver Minnow', cat: 'fish', sell: 30, desc: 'The honest beginning of every fisher\'s tale.',
    art: { kind: 'fish', c1: '#c9d6e6', c2: '#7d93ad', c3: '#f4f9ff' },
  },
  fairy_gudgeon: {
    name: 'Fairy Gudgeon', cat: 'fish', sell: 70, desc: 'Leaves a trail of tiny sparks in the water.',
    art: { kind: 'fish', c1: '#f7c8ff', c2: '#b56fc9', c3: '#fff0ff' },
  },
  glowfin: {
    name: 'Glowfin', cat: 'fish', sell: 100, desc: 'A night fish that dims when it hears footsteps.',
    art: { kind: 'fish', c1: '#67e8d8', c2: '#238f88', c3: '#d4fff8' },
  },
  moonfin: {
    name: 'Moonfin Trout', cat: 'fish', sell: 130, desc: 'Its scales show the phase of the moon.',
    art: { kind: 'fish', c1: '#aebeff', c2: '#5b6bc8', c3: '#eef2ff' },
  },
  dreamcarp: {
    name: 'Dream Carp', cat: 'fish', sell: 160, desc: 'Swims through rain as though the water were a dream.',
    art: { kind: 'fish', c1: '#ffcf9a', c2: '#d47b4b', c3: '#fff0c9' },
  },
  embereel: {
    name: 'Ember Eel', cat: 'fish', sell: 180, desc: 'Warm to the touch. Bram claims it is good in stew. It is not.',
    art: { kind: 'fish', c1: '#ff9a63', c2: '#c1422f', c3: '#ffd9a0' },
  },
  crystalperch: {
    name: 'Crystal Perch', cat: 'fish', sell: 190, desc: 'Its fins chime like glass when it leaps.',
    art: { kind: 'fish', c1: '#b8f0ff', c2: '#4f9ec4', c3: '#f0ffff' },
  },
  starlightkoi: {
    name: 'Starlight Koi', cat: 'fish', sell: 320, desc: 'A sacred koi carrying a fallen star in its belly. The shrine needs its light.',
    art: { kind: 'fish', c1: '#ffe08a', c2: '#e07b3f', c3: '#fff8d6' }, relic: true,
  },
  voidray: {
    name: 'Void Ray', cat: 'fish', sell: 380, desc: 'It swims through the reflection of the night sky, not the water.',
    art: { kind: 'fish', c1: '#8f7bd8', c2: '#3f316e', c3: '#e3d6ff' },
  },
  ancientcoelacanth: {
    name: 'Ancient Coelacanth', cat: 'fish', sell: 600, desc: 'Older than the village. Older than the stars, perhaps.',
    art: { kind: 'fish', c1: '#7ea8a0', c2: '#385c5a', c3: '#d6ece4' },
  },

  // ---- mine --------------------------------------------------------------
  stone: {
    name: 'Stone', cat: 'mineral', sell: 4, desc: 'Good, honest rock. Bram always needs more.',
    art: { kind: 'ore', ore: 'stone', c1: '#9aa3b2', c2: '#5d6577', c3: '#c9d0dc' },
  },
  coal: {
    name: 'Coal', cat: 'mineral', sell: 18, desc: 'It remembers being a forest, long ago.',
    art: { kind: 'ore', ore: 'stone', c1: '#5a5a68', c2: '#2f2f3a', c3: '#8a8a9a' },
  },
  copper: {
    name: 'Copper Ore', cat: 'mineral', sell: 22, desc: 'Warm, reddish metal. Good for beginner tools.',
    art: { kind: 'ore', ore: 'vein', c1: '#c87d52', c2: '#8c4f30', c3: '#f0b183' },
  },
  iron: {
    name: 'Iron Ore', cat: 'mineral', sell: 45, desc: 'Strong and stubborn. Like Bram.',
    art: { kind: 'ore', ore: 'vein', c1: '#b9c4d6', c2: '#6d7890', c3: '#e6edf7' },
  },
  gold: {
    name: 'Gold Ore', cat: 'mineral', sell: 90, desc: 'Soft and bright. The village smith pretends not to be impressed.',
    art: { kind: 'ore', ore: 'vein', c1: '#ffd76b', c2: '#c59a2c', c3: '#fff4c0' },
  },
  amethyst: {
    name: 'Amethyst', cat: 'mineral', sell: 150, desc: 'A violet gem that catches candlelight and keeps it.',
    art: { kind: 'ore', ore: 'gem', c1: '#c9a4ff', c2: '#7f5bc4', c3: '#f0e6ff' },
  },
  moonstone: {
    name: 'Moonstone', cat: 'mineral', sell: 240, desc: 'A stone that is always cool, even in summer.',
    art: { kind: 'ore', ore: 'gem', c1: '#d8f2ff', c2: '#7fabc9', c3: '#ffffff' },
  },
  voidcrystal: {
    name: 'Void Crystal', cat: 'mineral', sell: 300, desc: 'A shard of night that fell in love with the earth.',
    art: { kind: 'ore', ore: 'gem', c1: '#9a7bff', c2: '#3d2b7a', c3: '#e8ddff' },
  },
  astralshard: {
    name: 'Astral Shard', cat: 'relic', sell: 500, desc: 'A splinter of the star that fell on the vale long ago. The shrine remembers.',
    art: { kind: 'relic', relic: 'shard', c1: '#aeeaff', c2: '#5a9fd6' }, relic: true,
  },

  // ---- resources ---------------------------------------------------------
  wood: {
    name: 'Whisperwood', cat: 'resource', sell: 12, desc: 'Wood that hums softly when carved.',
    art: { kind: 'material', mat: 'wood', c1: '#b58a5a', c2: '#6f4e31' },
  },
  fiber: {
    name: 'Fiber', cat: 'resource', sell: 6, desc: 'Tough grass, good for rope and kindling.',
    art: { kind: 'material', mat: 'fiber', c1: '#9fc26a', c2: '#5e7f3d' },
  },
  sap: {
    name: 'Moon Sap', cat: 'resource', sell: 15, desc: 'Sweet, silvery sap. Smells faintly of starlight.',
    art: { kind: 'material', mat: 'sap', c1: '#e7d17a', c2: '#a98738' },
  },

  // ---- animal produce ----------------------------------------------------
  cloudwool: {
    name: 'Cloud Wool', cat: 'animal', sell: 170, desc: 'So soft that it floats away if you forget to hold it.',
    art: { kind: 'material', mat: 'wool', c1: '#f4f2ff', c2: '#c7c1e4' },
  },
  emberegg: {
    name: 'Ember Egg', cat: 'animal', sell: 105, desc: 'Still warm. Do not put it in your pocket.',
    art: { kind: 'material', mat: 'egg', c1: '#ffb56b', c2: '#d4673a' },
  },
  moonfluff: {
    name: 'Moon Fluff', cat: 'animal', sell: 130, desc: 'Fluff from a Moonbun. It glows when you whisper to it.',
    art: { kind: 'material', mat: 'wool', c1: '#d9ecff', c2: '#96b6d9' },
  },
  dragonscale: {
    name: 'Dragon Scale', cat: 'animal', sell: 320, desc: 'Shed by a Dracokit. Warm to the touch and impossibly light.',
    art: { kind: 'material', mat: 'scale', c1: '#ff8f7a', c2: '#b53c48' },
  },
  pearl: {
    name: 'Star Pearl', cat: 'animal', sell: 240, desc: 'A pearl from a Starlotl. It holds a tiny dawn inside.',
    art: { kind: 'material', mat: 'pearl', c1: '#f0efff', c2: '#a7a6d6' },
  },

  // ---- supplies ----------------------------------------------------------
  feed: {
    name: 'Moon-Hay Feed', cat: 'supply', sell: 6, desc: 'Crunchy hay mixed with moonpetal. Every creature loves it.',
    art: { kind: 'material', mat: 'feed', c1: '#e5c779', c2: '#a8863f' },
  },
  bait: {
    name: 'Star Bait', cat: 'supply', sell: 8, desc: 'A lure made from moonpetal. Attracts rarer fish. Used automatically.',
    art: { kind: 'material', mat: 'bait', c1: '#9ff0ff', c2: '#4c9bb0' },
  },
  ration: {
    name: 'Trail Ration', cat: 'food', sell: 20, energy: 45, desc: 'Dried berries and whisper-wheat bread. Restores energy.',
    art: { kind: 'food', food: 'ration', c1: '#e6bf82', c2: '#a5723d' },
  },
  startea: {
    name: 'Star Tea', cat: 'food', sell: 90, energy: 70, desc: 'Moonpetal and dewdrop tea. Warmth blooms behind your eyes.',
    art: { kind: 'food', food: 'tea', c1: '#b7f5e3', c2: '#5aa594' },
  },
  moonberrytart: {
    name: 'Moonberry Tart', cat: 'food', sell: 170, energy: 85, desc: 'A tart from the old farmhouse kitchen. Smells like summer nights.',
    art: { kind: 'food', food: 'tart', c1: '#c2b3ff', c2: '#8a6fc9' },
  },
  minersstew: {
    name: "Miner's Stew", cat: 'food', sell: 200, energy: 100, desc: 'Glimmercap and crystalroot stew. Tastes of deep earth and courage.',
    art: { kind: 'food', food: 'stew', c1: '#ffc17a', c2: '#b76b38' },
  },
  // special trophy (not sold)
  starseal: {
    name: 'Starfall Seal', cat: 'relic', sell: 0, desc: 'Proof that you woke the Starfall Shrine. Keepsake of Chapter One.',
    art: { kind: 'relic', relic: 'seal', c1: '#ffe08a', c2: '#d68f38' }, unique: true,
  },
};

export const CROPS = {
  moonberry: { item: 'moonberry', seed: 'moonseed', days: 4, seasons: ['spring', 'fall'], regrow: 0, name: 'Moonberry' },
  whisperwheat: { item: 'whisperwheat', seed: 'whisperwheatseed', days: 3, seasons: ['spring', 'summer', 'fall', 'winter'], regrow: 0, name: 'Whisper Wheat' },
  sunbloom: { item: 'sunbloom', seed: 'sunbloomseed', days: 5, seasons: ['summer'], regrow: 0, name: 'Sunbloom' },
  crystalroot: { item: 'crystalroot', seed: 'crystalrootseed', days: 6, seasons: ['fall'], regrow: 0, name: 'Crystalroot' },
  frostlily: { item: 'frostlily', seed: 'frostlilyseed', days: 5, seasons: ['winter'], regrow: 0, name: 'Frostlily' },
  starmelon: { item: 'starmelon', seed: 'starmelonseed', days: 8, seasons: ['summer'], regrow: 4, name: 'Starmelon' },
};

export const FISH = {
  silverminnow: { item: 'silverminnow', seasons: ['spring', 'summer', 'fall', 'winter'], from: 6, to: 20, weather: 'any', weight: 40, difficulty: 0.18 },
  fairy_gudgeon: { item: 'fairy_gudgeon', seasons: ['spring', 'summer'], from: 6, to: 18, weather: 'clear', weight: 22, difficulty: 0.3 },
  glowfin: { item: 'glowfin', seasons: ['spring', 'summer', 'fall', 'winter'], from: 19, to: 26, weather: 'any', weight: 24, difficulty: 0.38 },
  moonfin: { item: 'moonfin', seasons: ['spring', 'summer', 'fall', 'winter'], from: 18, to: 26, weather: 'clear', weight: 16, difficulty: 0.45 },
  dreamcarp: { item: 'dreamcarp', seasons: ['spring', 'fall'], from: 6, to: 20, weather: 'rain', weight: 20, difficulty: 0.5 },
  embereel: { item: 'embereel', seasons: ['summer'], from: 10, to: 22, weather: 'clear', weight: 12, difficulty: 0.58 },
  crystalperch: { item: 'crystalperch', seasons: ['winter'], from: 6, to: 20, weather: 'any', weight: 14, difficulty: 0.55 },
  starlightkoi: { item: 'starlightkoi', seasons: ['spring', 'summer'], from: 18, to: 24, weather: 'clear', weight: 5, difficulty: 0.72 },
  voidray: { item: 'voidray', seasons: ['fall', 'winter'], from: 20, to: 26, weather: 'any', weight: 5, difficulty: 0.8 },
  ancientcoelacanth: { item: 'ancientcoelacanth', seasons: ['spring', 'summer', 'fall', 'winter'], from: 6, to: 9, weather: 'rain', weight: 2, difficulty: 0.9 },
};

export const ANIMALS = {
  fluffalo: {
    name: 'Fluffalo', price: 900, produce: 'cloudwool', produceName: 'Cloud Wool', days: 2,
    desc: 'A gentle cloud-buffalo. Brushes out Cloud Wool every other day.',
    art: { body: '#f4f1ea', accent: '#c8b8a0', horn: '#e8c170' },
    model: { body: '#f4f1ea', accent: '#d8c6b0', horn: '#e8c170', size: 1.2 },
  },
  emberhen: {
    name: 'Emberhen', price: 620, produce: 'emberegg', produceName: 'Ember Egg', days: 1,
    desc: 'A small fire-feathered hen. Lays a warm Ember Egg each dawn.',
    art: { body: '#ff9a5c', accent: '#d94f35', horn: '#ffd76e' },
    model: { body: '#ff9a5c', accent: '#e0623d', horn: '#ffd76e', size: 0.8 },
  },
  moonbun: {
    name: 'Moonbun', price: 740, produce: 'moonfluff', produceName: 'Moon Fluff', days: 2,
    desc: 'A long-eared rabbit with fur like clouds. Sheds Moon Fluff.',
    art: { body: '#dcecff', accent: '#a8c8e8', horn: '#ffd9f0' },
    model: { body: '#dcecff', accent: '#a8c8e8', horn: '#ffd9f0', size: 0.75 },
  },
  dracokit: {
    name: 'Dracokit', price: 1800, produce: 'dragonscale', produceName: 'Dragon Scale', days: 3,
    desc: 'A palm-sized dragon. Sheds a precious scale every third day.',
    art: { body: '#e0635e', accent: '#9c3248', horn: '#ffc46b' },
    model: { body: '#e0635e', accent: '#9c3248', horn: '#ffc46b', size: 0.9 },
  },
  starlotl: {
    name: 'Starlotl', price: 1300, produce: 'pearl', produceName: 'Star Pearl', days: 3,
    desc: 'An axolotl that swims through air. Leaves a Star Pearl behind.',
    art: { body: '#c9a4ff', accent: '#7f5bc4', horn: '#ffd9f0' },
    model: { body: '#c9a4ff', accent: '#8f6cd4', horn: '#ffd9f0', size: 0.8 },
  },
};

export const NPC_ORDER = ['elowen', 'bram', 'orika', 'seraphine', 'mirelle', 'pip'];

export const NPCS = {
  elowen: {
    name: 'Elowen', title: 'Herbalist of the Vale', color: '#9fdcb8',
    birthday: { season: 'spring', day: 8 },
    home: { x: 2, z: -27 }, plaza: { x: 9, z: -15 }, wander: 3,
    likes: ['moonpetal', 'glimmercap', 'startea'], loves: ['moonberry', 'frostlily', 'starmelon'], hates: ['stone', 'coal'],
    look: { skin: '#e8c9a8', hair: '#e8e6d8', hairStyle: 'long', outfit: '#4f8a63', trim: '#e8d9a8', ears: 'elf', accessory: 'flower' },
    greetings: [
      'The moonpetals opened early today. I take it as a good omen.',
      'Roots remember every spring they have ever seen. Isn\'t that a lovely thought?',
      'Your farm sits on old, kind soil. Be gentle with it and it will be generous.',
      'Grandmother Sable used to say: a garden is just a promise you keep to the ground.',
    ],
    bond: {
      2: ['You have the same look Grandmother Sable had when she first came to the vale.', 'A little stubborn. A little starlit. I think we will be friends.'],
      4: ['Come, sit. I made moonpetal tea. It tastes like the first cool night of autumn.', 'I do not say this to many people: I am glad you are here.'],
      6: ['The shrine used to sing at night. I can almost hear it when you walk past.', 'Whatever you are becoming, farmer, I would like to see it.'],
      8: ['I pressed a moonpetal in the old ledger. It was the day you arrived.', 'You have grown roots here. I hope you never stop growing.'],
      10: ['There is a word the old elves used — starwarden. One who tends the light between earth and sky.', 'I think it was always meant for you.'],
    },
  },
  bram: {
    name: 'Bram', title: 'Forgemaster', color: '#e8a36b',
    birthday: { season: 'summer', day: 19 },
    home: { x: 29, z: -9 }, plaza: { x: 15, z: -13 }, wander: 2,
    likes: ['copper', 'iron', 'coal', 'wood'], loves: ['gold', 'astralshard', 'crystalroot'], hates: ['moonpetal', 'dewdrop'],
    look: { skin: '#b97f5c', hair: '#6a3f2a', hairStyle: 'short', outfit: '#8c4a34', trim: '#3b2a27', beard: true, hat: 'none' },
    greetings: [
      'A tool is a promise between your hands and the world. Keep it sharp.',
      'The mine is awake again. I heard it coughing rocks all night.',
      'Bring me ore. Or don\'t. The forge is warm either way.',
      'My grandmother forged the old shrine key. Funny how things come back around.',
    ],
    bond: {
      2: ['Ha! You swing that pick like a woman with something to prove.', 'Good. The vale needs more people with something to prove.'],
      4: ['Sit. Don\'t touch the anvil. Here — a cup of forge-tea. It\'s mostly just tea.', 'I don\'t train apprentices anymore. But I\'ll keep an eye on your edge.'],
      6: ['You ever hear the star-hammer story? The one that struck the sky and made the vale?', 'My family has been repairing what it broke ever since. Maybe you\'ll help me finish.'],
      8: ['I made you something. A small blade. Only take it to the deep places.', 'And come back up. That part is also important.'],
      10: ['You\'re the best student I never trained. Don\'t tell the others I said that.', 'The forge is yours whenever you need it, starwarden.'],
    },
  },
  orika: {
    name: 'Ori', title: 'Keeper of the Lantern Market', color: '#ffd88a',
    birthday: { season: 'fall', day: 5 },
    home: { x: 22, z: -23 }, plaza: { x: 12, z: -19 }, wander: 3,
    likes: ['fairy_gudgeon', 'silverminnow', 'dewdrop'], loves: ['starlightkoi', 'starmelon', 'gold'], hates: ['fiber'],
    look: { skin: '#d9a06d', hair: '#d96b45', hairStyle: 'bun', outfit: '#6a5aaa', trim: '#f2d178', hat: 'hood' },
    greetings: [
      'Everything has a price, friend. Except gossip — gossip is free, and worth every coin.',
      'Fresh stock! Well. It is mostly the same stock, but it has been dusted.',
      'If you find something strange in the woods, bring it to me before Bram sees it.',
      'A new face in the vale! The lanterns burn a little brighter, I swear it.',
    ],
    bond: {
      2: ['You bought something. That makes you family, in a commercial sort of way.', 'Here, have a free lantern. It\'s slightly haunted, but friendly.'],
      4: ['You know, most people never ask my real name. It\'s Orika. Ori was my mother\'s name.', 'Keep that between us and the lanterns.'],
      6: ['I was a traveling trader before this. Saw a hundred towns, never had a home.', 'Then the vale happened. Funny, isn\'t it? The smallest place that sticks.'],
      8: ['I saved you the good shelf. You know the one — behind the counter.', 'One day I\'ll tell you what\'s in the locked drawer. Maybe.'],
      10: ['Partner. That\'s what you are. The Lantern Market always has a light for you.', 'Now buy something. I have a reputation to maintain.'],
    },
  },
  seraphine: {
    name: 'Seraphine', title: 'Wandering Bard', color: '#f2a6c2',
    birthday: { season: 'winter', day: 12 },
    home: { x: 5, z: -9 }, plaza: { x: 10, z: -21 }, wander: 4,
    likes: ['sunbloom', 'frostlily', 'dreamcarp'], loves: ['starlightkoi', 'starmelon', 'moonberrytart'], hates: ['coal', 'stone'],
    look: { skin: '#f0cdb0', hair: '#7a3f6b', hairStyle: 'long', outfit: '#a8406a', trim: '#f2d178', cape: '#4a2a5a', accessory: 'lute' },
    greetings: [
      'Listen — the wind is in a minor key today. I\'m writing it down.',
      'Songs are just feelings with somewhere to go.',
      'I played at the shrine once. The stones hummed back. I have never told anyone that.',
      'If you find a quiet spot on your farm, save it for me. I\'ll play you a sunrise.',
    ],
    bond: {
      2: ['I wrote six notes about you. They keep trying to become a song.', 'Would you like to hear it? Too late, I already started.'],
      4: ['You walk like someone listening. Most people walk like they\'re running late.', 'I think that\'s why the vale likes you.'],
      6: ['A bard only stays in a town for two reasons: a story worth telling, or a person worth singing about.', 'I think I found both.'],
      8: ['I finished the song. It\'s called The Starwarden. It\'s yours.', 'When the shrine sings again, I want to be there.'],
      10: ['Travelers will sing about this valley for a hundred years. And your name will be the chorus.', 'Now sit. I\'ll play it once more, just for you.'],
    },
  },
  mirelle: {
    name: 'Mirelle', title: 'Witch of Whisperwood', color: '#b79be8',
    birthday: { season: 'fall', day: 23 },
    home: { x: 35, z: 25 }, plaza: { x: 20, z: 2 }, wander: 5,
    likes: ['glimmercap', 'ancienttwig', 'voidcrystal'], loves: ['glimmercap', 'voidray', 'amethyst'], hates: ['sunbloom'],
    look: { skin: '#c7a6d9', hair: '#2f2a44', hairStyle: 'wild', outfit: '#4a3a72', trim: '#bda6e8', hat: 'witch' },
    greetings: [
      'The woods told me you were coming. They also said you smell of turnip. No offense.',
      'I don\'t do curses. I do tea, mushrooms, and mild existential dread.',
      'Marxies are made of starlight and mischief. Mostly mischief.',
      'If you hear a tree whisper your name, answer politely. It is only being friendly.',
    ],
    bond: {
      2: ['You didn\'t run. That is the entire test, congratulations.', 'Most villagers think I turn people into frogs. I only did that once. He deserved it.'],
      4: ['My cat is named Wednesday. She is not a cat. Do not ask follow-up questions.', 'You may pet her. She will allow it.'],
      6: ['The Marxies like you. They don\'t like anyone. This is statistically alarming.', 'Perhaps you are a little bit made of stars as well.'],
      8: ['The forest is old, but it remembers being younger when the star fell.', 'I can show you the memory sometime. Bring tea.'],
      10: ['I don\'t often call anyone a friend. The words taste like a spell.', 'So I\'ll say it once, properly: you are welcome in the woods, always.'],
    },
  },
  pip: {
    name: 'Pip', title: 'Apprentice Adventurer', color: '#8fd6e8',
    birthday: { season: 'spring', day: 21 },
    home: { x: 13, z: -24 }, plaza: { x: 13, z: -17 }, wander: 4,
    likes: ['dewdrop', 'silverminnow', 'fiber'], loves: ['stardust', 'moonberry', 'emberegg'], hates: ['minersstew'],
    look: { skin: '#e8b98a', hair: '#4a8a6a', hairStyle: 'short', outfit: '#3d7d92', trim: '#f2d178', small: true },
    greetings: [
      'I found a bug! It was a very good bug. I let it go, though. It had a family.',
      'When I grow up I\'m going to be an adventurer. Or a baker. Both, maybe.',
      'Have you been in the mine? I\'m not scared of it. I\'m just very good at avoiding it.',
      'The stars are awake tonight. I counted forty-two before I fell asleep. There are more.',
    ],
    bond: {
      2: ['You\'re my second-best friend. My first-best is a frog named Sir Hops.', 'Don\'t be sad! You\'re catching up.'],
      4: ['If I give you this shiny rock, we\'re officially a team. It\'s a very official rock.', 'You can be the brave one. I\'ll carry the snacks.'],
      6: ['I practiced sword swings with a stick. Do I look like a hero?', 'You look like a hero too. Even when you\'re just digging dirt.'],
      8: ['I\'m not scared of the dark when you\'re around. Don\'t tell anyone.', 'Okay, you can tell Sir Hops.'],
      10: ['You\'re the best friend. Sir Hops agrees. He\'s very honest for a frog.', 'One day we\'ll go on a real adventure. Promise?'],
    },
  },
};

export const SHOP_UPGRADES = {
  axe: { item: 'axe', price: 180, name: 'Whisperwood Axe', desc: 'Chop trees for wood and sap.' },
  pickaxe: { item: 'pickaxe', price: 220, name: 'Glimmer Pick', desc: 'Mine stone and ore. Opens the mine.' },
  fishingrod: { item: 'fishingrod', price: 260, name: 'Starline Rod', desc: 'Catch magical fish at the lake.' },
  sword: { item: 'sword', price: 320, name: 'Starfall Blade', desc: 'Defend yourself in the deep mine.' },
  satchel: { flag: 'satchel', price: 650, name: 'Mooncloth Satchel', desc: 'Permanently adds 12 inventory slots.' },
  rune: { flag: 'rune', price: 1400, name: 'Irrigation Rune', desc: 'Dawn-mist waters every crop on your farm each morning.' },
};

export const SEED_STOCK = [
  { item: 'moonseed', price: 20, seasons: ['spring', 'fall'] },
  { item: 'whisperwheatseed', price: 12, seasons: ['spring', 'summer', 'fall', 'winter'] },
  { item: 'sunbloomseed', price: 45, seasons: ['summer'] },
  { item: 'crystalrootseed', price: 60, seasons: ['fall'] },
  { item: 'frostlilyseed', price: 50, seasons: ['winter'] },
  { item: 'starmelonseed', price: 90, seasons: ['summer'] },
];

export const SUPPLY_STOCK = [
  { item: 'feed', price: 12 }, { item: 'bait', price: 10 }, { item: 'ration', price: 55 },
  { item: 'startea', price: 110 }, { item: 'moonberrytart', price: 190 },
];

export const RECIPES = [
  { id: 'moonberrytart', name: 'Moonberry Tart', needs: [['moonberry', 2], ['whisperwheat', 1]], energy: 85 },
  { id: 'startea', name: 'Star Tea', needs: [['moonpetal', 1], ['dewdrop', 1]], energy: 70 },
  { id: 'minersstew', name: "Miner's Stew", needs: [['glimmercap', 1], ['crystalroot', 1]], energy: 100 },
  { id: 'ration', name: 'Trail Ration', needs: [['whisperwheat', 1], ['dewdrop', 1]], energy: 45 },
];

export const RELICS = [
  { id: 'farm', label: 'Harvest a magical crop', hint: 'Plant and harvest any crop on your farm.', icon: 'moonberry' },
  { id: 'fish', label: 'Catch a Starlight Koi', hint: 'A rare koi that rises at dusk in spring and summer.', icon: 'starlightkoi' },
  { id: 'mine', label: 'Mine an Astral Shard', hint: 'The deep mine hides splinters of the fallen star.', icon: 'astralshard' },
  { id: 'marxy', label: 'Befriend a Marxy', hint: 'Offer a Moonberry to a shy star-sprite.', icon: 'stardust' },
  { id: 'friend', label: "Earn a villager's trust", hint: 'Reach two hearts with anyone in the vale.', icon: 'heart' },
];

export const QUESTS = [
  { id: 'home', title: 'A New Dawn', desc: 'Plant your 20 Moonseeds and harvest your first crop.', goal: 1 },
  { id: 'tools', title: 'Tools of the Trade', desc: 'Buy the Glimmer Pick from Bram and enter Glimmerdeep Mine.', goal: 1 },
  { id: 'friend', title: 'A Friendly Face', desc: 'Reach two hearts with one of the villagers.', goal: 1 },
  { id: 'shrine', title: 'Wake the Starfall Shrine', desc: 'Gather the five lights and restore the shrine on the north hill.', goal: 5 },
];

// Intro story panels — no emoji, only pixel-art crests drawn by the UI.
export const INTRO = [
  { title: 'The Letter', text: 'The envelope smelled of lavender and old rain. Inside, in Grandmother Sable\'s crooked hand: "The vale has gone quiet, little star. The shrine has forgotten how to shine. Come home. Bring seeds."' },
  { title: 'The Road North', text: 'You remembered the road only in pieces: a crooked signpost, the smell of woodsmoke, a sky so full of stars it seemed to be listening.' },
  { title: 'Starfall Vale', text: 'The lanterns of Emberfall Village were still lit. Beyond them, the old farm waited — twenty seeds in your pocket, a hoe, a watering can, and a grandmother\'s impossible hope.' },
  { title: 'Chapter One', text: 'Wake the Starfall Shrine. Tend the land. Befriend the vale. The rest, the stars will decide.' },
];

export const TIPS = [
  'Tip: Water crops every day. Rain waters them for you.',
  'Tip: Talk to villagers once a day to grow friendship. Gifts help more.',
  'Tip: The forge sells tools. You will need the Glimmer Pick to enter the mine.',
  'Tip: Hold the action button while fishing to keep the fish inside the glowing bar.',
  'Tip: Marxies love Moonberries. Offer one to make a tiny friend.',
  'Tip: Ship crops at the bin by your farmhouse, or sell at the Lantern Market.',
  'Tip: Talk to Elowen. She knows more about the shrine than she lets on.',
  'Tip: Sleep before 2 AM. Collapsing costs you coin and dignity.',
  'Tip: Rainy days are perfect for Dream Carp. Storms bring rarer fish.',
  'Tip: Your animals produce goods if fed and petted each day.',
];

export function item(id) { return ITEMS[id]; }
export function stackMax(it) { return it?.unique || it?.cat === 'tool' ? 1 : 999; }
export function sellPrice(id) { return ITEMS[id]?.sell || 0; }
export function xpForLevel(l) { return Math.round(80 * Math.pow(1.45, l)); }
export const SKILLS = ['farming', 'mining', 'fishing', 'foraging', 'combat'];
export const SKILL_LABEL = { farming: 'Farming', mining: 'Mining', fishing: 'Fishing', foraging: 'Foraging', combat: 'Combat' };
export const SKILL_COLOR = { farming: '#8fe38f', mining: '#c9b6a0', fishing: '#8fd6e8', foraging: '#d9c76a', combat: '#e88f7a' };
