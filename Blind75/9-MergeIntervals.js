// Time Complexity: O(n log n) - Due to sorting the intervals.
// Space Complexity: O(n) - We use extra space for the merged intervals.

// greedy algorithm
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

class Solution {
  merge(intervals) {
    if (intervals.length < 2) return intervals;

    intervals.sort((a, b) => a.start - b.start);

    const mergedIntervals = [];
    let { start, end } = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
      const interval = intervals[i];

      if (interval.start <= end) {
        end = Math.max(end, interval.end);
      } else {
        mergedIntervals.push(new Interval(start, end));
        start = interval.start;
        end = interval.end;
      }
    }

    // add the last interval
    mergedIntervals.push(new Interval(start, end));

    return mergedIntervals;
  }
}

function print_interval(result) {
  process.stdout.write(`[${result.start}, ${result.end}]`);
}

const sol = new Solution();
process.stdout.write("Merged intervals: ");
let result = sol.merge([
  { start: 1, end: 4 },
  { start: 2, end: 5 },
  { start: 7, end: 9 },
]);
for (let i = 0; i < result.length; i++) {
  print_interval(result[i]);
}
console.log();

process.stdout.write("Merged intervals: ");
result = sol.merge([
  { start: 6, end: 7 },
  { start: 2, end: 4 },
  { start: 5, end: 9 },
]);
for (let i = 0; i < result.length; i++) {
  print_interval(result[i]);
}
console.log();

process.stdout.write("Merged intervals: ");
result = sol.merge([
  { start: 1, end: 4 },
  { start: 2, end: 6 },
  { start: 3, end: 5 },
]);
for (let i = 0; i < result.length; i++) {
  print_interval(result[i]);
}
console.log();
