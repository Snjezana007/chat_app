export function randomName() {
    const adjectives = [
      "Green", "Yellow", "Red", "Orange", "Blue", "Purple", "Violet", "Gold",
"White", "Turquoise", "Teal", "Coral", "Magenta", "Maroon", "Lavender",
"Navy", "Olive", "Plum", "Salmon", "Tan", "Peach",
"Sky blue", "Mint green", "Rose", "Lilac", "Mustard", "Orchid",
"Slate gray"
    ];
    const nouns = [
      "Lion", "Wolf", "Shark", "Penguin", "Gorilla", "Koala", "Owl", "Dolphin",
"Zebra", "Panda", "Kangaroo", "Squirrel", "Elephant", "Eagle", "Crocodile", "Peacock",
"Lemur", "Flamingo", "Lobster", "Bison", "Toucan", "Chimpanzee", "Otter", "Jellyfish",
"Meerkat", "Sloth", "Corgi", "Raccoon"
    ];

    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + "  " + noun;
  }
  
 export function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }