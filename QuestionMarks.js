function QuestionsMarks(str) {
  let flag = false
  let nums = []

  for (let i = 0, len = str.length; i < len; i++) {
    if (/\d/.test(str[i])) {
      nums.push(i);
    }
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (parseInt(str[nums[i]], 10) + parseInt(str[nums[i + 1]], 10) === 10) {
      flag = true;
      let strSeg = str.slice(nums[i], nums[i + 1]);

      strSeg = strSeg.replace(/[^\?]/g, '');
      if (strSeg !== '???') {
        return false;
      }
    }
  }
  return flag;
}

// keep this function call here
console.log(QuestionsMarks("aa6?9")); //false
console.log(QuestionsMarks("acc?7??sss?3rr1??????5")); //true
console.log(QuestionsMarks("9???1???9??1???9")); //false
console.log(QuestionsMarks("aaaaaaarrrrr??????")); //false
console.log(QuestionsMarks("4?5?4?aamm9")); //false
