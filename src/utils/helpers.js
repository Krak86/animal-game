// Helper utility functions

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} - Shuffled array
 */
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/**
 * Gets a random item from an array
 * @param {Array} array - Array to pick from
 * @returns {*} - Random item from array
 */
export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
