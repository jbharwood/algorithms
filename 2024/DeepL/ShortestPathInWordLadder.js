// 6. Shortest Path in Word Ladder
// Given a starting word, a target word, and a list of words, find the shortest transformation sequence where only one character can be changed at a time, and each intermediate word must exist in the list.

// Problem: Write a function wordLadder(start, target, wordList) that returns the length of the shortest transformation sequence.
// Focus:
// Graph traversal (e.g., BFS).
// Efficient word comparisons.

function wordLadder(start, target, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(target)) return 0;

  const queue = [[start, 1]];
  while (queue.length > 0) {
    const [word, steps] = queue.shift();

    if (word === target) return steps;

    for (let i = 0; i < word.length; i++) {
      for (let char of "abcdefghijklmnopqrstuvwxyz") {
        const newWord = word.slice(0, i) + char + word.slice(i + 1);

        if (wordSet.has(newWord)) {
          queue.push([newWord, steps + 1]);
          wordSet.delete(newWord); // Avoid revisiting
        }
      }
    }
  }
}

// Example usage:
console.log(wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 5