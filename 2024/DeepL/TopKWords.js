// 5. Top-K Frequently Used Words
// Analyze a document to find the top k most frequently used words.

// Problem: Implement a function topKWords(text, k) that returns an array of the k most frequent words in the text, sorted by frequency. Ignore punctuation and case sensitivity.
// Focus:
// Efficient counting (e.g., using a Map).
// Handle ties gracefully.

function topKWords(text, k) {
  const words = text.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
  const wordCounts = new Map();

  for (const word of words) {
    wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
  }

  return [...wordCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(entry => entry[0]);

//   let counts = {}
//   let arr = text.toLowerCase().replace(/[^a-z\s]/g, "").split(" ")

//   for (let word of arr) {
//     counts[word] = (counts[word] || 0) + 1
//   }

//   arr.sort((a, b) => {
//     const freqA = counts[a]
//     const freqB = counts[b]

//     if (freqA !== freqB) {
//         return freqB - freqA
//     }

//     return a - b
//   })

//   let res = [...new Set(arr)]

//   return res.slice(0, k)
}

// Example usage:
const text = "hello world hello language hello";
console.log(topKWords(text, 2)); // ["hello", "world"]