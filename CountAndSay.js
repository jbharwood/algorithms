var countAndSay = function(n) {
  if (n < 1 || n > 30 || n == null) {
      return 'ERROR';
  }

  let previous_sequence = '1';
  let current_num;
  let current_sequence;
  let count;

  for (let i = 1; i < n; i++) {
    current_num = previous_sequence.charAt(0);
    count = 1;
    current_sequence = "";

    let compare_num;

    for (let j = 1; j < previous_sequence.length; j++) {
      compare_num = previous_sequence.charAt(j);
      if (compare_num !== current_num) {
        current_sequence += `${count}${current_num}`;
        current_num = compare_num;
        count = 1;
      } else {
        count++;
      }
    }

    current_sequence += `${count}${current_num}`;
    previous_sequence = current_sequence;
  }

  return previous_sequence;
};

console.log(countAndSay(1));
console.log(countAndSay(4));
