// Mocha Testing SetUp.

var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

// 1. Use recursion to create a function to compute the exponent of a number.
// For Example: base=2, exp=3, would return 2^3=2*2*2=8

const exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent(base, exp - 1);
  }
}


// 2. Write a function to reverse a string using recursion.

function reverseString(str) {
  if (str === "") {
      return "";
  } else {
      return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// 3. Use async/await to complete the functions to return the correct value.
// subtract

function doubleAfter2Seconds(x) {

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 200);
  });
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}


// 4. Write a custom reduce function that takes in an array of nums and a function.

const arrayReducer = (nums, transformation) => {
  let reducer = [];
  nums.forEach(element => {
    reducer.push(transformation(element));
  })
  return reducer;
}


// 5. Write a class extends the Person class and implements a custom function called
//    getFullInfo that returns firstName, lastName, studentId
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

// Implement Student class here.
class Student extends Person {
	constructor(studentId, firstName, lastName) {
		super(firstName, lastName);
		this.studentId = studentId;
	}

	getFullInfo() {
		return this.firstName + ', ' + this.lastName + ', ' + this.studentId;
	}
}


// 6. ES6 Specific questions.
// a. Convert this string into an array using the Object Spread Operator.


function spread(inputString) {
  return [...inputString];
}

// b. Write a function that combines two objects and
//    adds an additonal attribute favoriteAnimal: 'Elephant'.

function combineObjectsAndAddAttribute(obj1,obj2) {
  return {...obj1, ...obj2, ...{favoriteAnimal: 'Elephant'}};
}


// Unit Tests to validate your solution. Must pass all tests. DO NOT MODIFY.

describe('1. Create a function to compute the exponent of a number.', () => {
  it('Exponent Function returns 16.', () => {
      assert.equal(exponent(4,2),16);
  });
  it('Exponent Function returns 15625.', () => {
      assert.equal(exponent(5,6),15625);
  });
  it('Exponent Function returns 8.', () => {
      assert.equal(exponent(2,3),8);
  });
  it('Exponent Function returns 1.', () => {
      assert.equal(exponent(2,0),1);
  });
  it('Exponent Function returns 0.', () => {
      assert.equal(exponent(0,2),0);
  });
  it('Exponent Function returns 1.', () => {
      assert.equal(exponent(0,0),1);
  });
});

describe('2. Write a function to reverse a string using recursion.', () => {
  it('Reverse of hello should be olleh.', () => {
    assert.equal(reverseString('hello'),'olleh');
  });
  it('Reverse of 123Test should be tseT321.', () => {
    assert.equal(reverseString('123Test'),'tseT321');
  });
  it('Reverse of blank string should be blank string.', () => {
    assert.equal(reverseString(''),'');
  });
});

describe('3. Use async await to get the correct result.', () => {
  it('Should return 130.', async () => {
    await addAsync(10).then((sum) => {
      assert.equal(sum, 130);
    });
  });
  it('Should return 122.', async () => {
    await addAsync(2).then((sum) => {
      assert.equal(sum, 122);
    });
  });
});

describe('4. Write a custom reduce function.', () => {
  it('Mapping function should return [2,4,6,8]', () => {
    const nums = [1,2,3,4];
    assert.deepEqual(arrayReducer(nums,num => num * 2),[2,4,6,8]);
  });
  it('Mapping function should return [3,4,5,6]', () => {
    const nums = [1,2,3,4];
    assert.deepEqual(arrayReducer(nums,num => num + 2),[3,4,5,6]);
  });
  it('Mapping function should return [-1,0,1,2]', () => {
    const nums = [1,2,3,4];
    assert.deepEqual(arrayReducer(nums,num => num - 2),[-1,0,1,2]);
  });
});

describe('5. Write a class Student that extends Person.', () => {
  it('Calling student.firstName should return Sally', () => {
    const student = new Student('123456','Sally', 'Smith');
    assert.equal(student.firstName,'Sally');
  });
  it('Calling student.lastName should return Smith', () => {
    const student = new Student('123456','Sally', 'Smith');
    assert.equal(student.lastName,'Smith');
  });
  it('Calling student.studentId should return Sally', () => {
    const student = new Student('123456','Sally', 'Smith');
    assert.equal(student.studentId,'123456');
  });
  it('Calling student.getFullInfo() should return Sally, Smith, 123456', () => {
    const student = new Student('123456','Sally', 'Smith');
    assert.equal(student.getFullInfo(),'Sally, Smith, 123456');
  });
  it('Calling student.getFullName() should return Sally Smith', () => {
    const student = new Student('123456','Sally', 'Smith');
    assert.equal(student.getFullName(),'Sally Smith');
  });
});

describe('6. ES6 Specific questions.', () => {
  it('a. Object Spread Operator.', () => {
    assert.deepEqual(spread('testing'),['t','e','s','t','i','n','g']);
  });
  it('b. Object Spread Operator cont..', () => {
    const obj1 = {age: '22', favoriteColor: 'purple'};
    const obj2 = {firstName: 'John', lastName: 'Smith'};
    const expectedObject = {
      age: '22',
      favoriteColor: 'purple',
      firstName: 'John',
      lastName: 'Smith',
      favoriteAnimal: 'Elephant'};

    assert.deepEqual(combineObjectsAndAddAttribute(obj1,obj2),expectedObject);
  });
});


// Required to run the tests.

mocha.run();
