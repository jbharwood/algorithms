// 2. Language Detection
// Given a string, detect the primary language based on a predefined dictionary of words for each language.

// Problem: Implement a function detectLanguage(text, dictionaries) where dictionaries is an object mapping language names to sets of words. Return the language with the highest word match.
// Focus:
// Optimize for large dictionaries.
// Handle ties or no matches.

function detectLanguage(text, dictionaries) {
  let words = text.toLowerCase().split(" ")
  let english = 0
  let french = 0

  for (let word of words) {
    if (dictionaries.English.has(word)) {
        english++
    } 

    if (dictionaries.French.has(word)) {
        french++
    }
  }

  if (english === french) return "Neither"

  return english > french ? "English" : "French"
}

// Example usage:
const dictionaries = {
  English: new Set(["hello", "world", "language"]),
  French: new Set(["bonjour", "monde", "langue"]),
};
console.log(detectLanguage("hello world", dictionaries)); // English
console.log(detectLanguage("hello bonjour monde", dictionaries)); // French
console.log(detectLanguage("cat", dictionaries)); // Neither