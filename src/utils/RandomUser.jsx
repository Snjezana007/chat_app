export function randomName() {
    const adjectives = [
      "Happy", "Sad", "Angry", "Content", "Excited", "Calm", "Peaceful", "Hopeful",
"Melancholy", "Reflective", "Serene", "Joyful", "Anxious", "Blessed", "Playful",
"Determined", "Grateful", "Nostalgic", "Blissful", "Satisfied", "Energetic",
"Thoughtful", "Optimistic", "Tranquil", "Loving", "Courageous", "Curious",
"Inspired", "Tender", "Mellow", "Dreamy", "Fearful", "Energized", "Romantic",
"Thankful", "Gloomy", "Serene", "Contemplative", "Sympathetic", "Ecstatic", "Irritable",
"Contented", "Receptive", "Fascinated", "Comfortable", "Spirited", "Humble",
"Silly", "Restful", "Vibrant", "Sentimental", "Fulfilled", "Cheerful", "Graceful",
"Merry", "Mournful", "Refreshed", "Enchanting", "Easygoing", "Insightful"
    ];
    const nouns = [
      "Apple", "Banana", "Orange", "Grape", "Mango", "Blueberry", "Cherry", "Strawberry",
"Watermelon", "Pineapple", "Plum", "Peach", "Apricot", "Chocolate Truffle", "Pear", "Coconut",
"Kiwi", "Raspberry", "Blackberry", "Melon", "Lemon", "Avocado", "Pomegranate", "Quince",
"Tomato", "Cucumber", "Carrot", "Broccoli", "Cauliflower", "Potato", "Onion", "Garlic",
"Mushroom", "Eggplant", "Corn", "Pea", "Spinach", "Lettuce", "Cabbage", "Kale",
"Cauliflower", "Sweet Potato", "Pumpkin", "Butternut Squash", "Radish", "Artichoke",
"Peanut", "Almond", "Cashew", "Walnut", "Pistachio", "Hazelnut", "Macadamia", "Chestnut",
"Sesame", "Chia Seeds", "Quinoa", "Rice", "Oats", "Barley", "Wheat", "Gummy Worms",
"Spaghetti Squash", "Fettuccine", "Ravioli", "Lasagna", "Pizza"
    ];

    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + " " + noun;
  }
  
 export function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }