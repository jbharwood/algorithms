// https://www.toptal.com/javascript/interview-questions

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
console.log("------------------------------------------");
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
        const work = () => {
            console.log("inner arrow func:  this.foo = " + this.foo);
            console.log("inner arrow func:  self.foo = " + self.foo);
        };
        work()
    }
};
myObject.func();
console.log("------------------------------------------");

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
console.log(foo1());
console.log(foo2());
console.log("------------------------------------------");

console.log("NaN === number: " + typeof NaN === "number");  // logs "true"
console.log("NaN === NaN: " + NaN === NaN);  // logs "false"
console.log("------------------------------------------");

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
console.log("------------------------------------------");

// 55555
// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }
// 01234
// for (let i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }
console.log("------------------------------------------");

(function() {
  // console.log(1);
  // setTimeout(function(){console.log(2)}, 1000);
  // setTimeout(function(){console.log(3)}, 0);
  // console.log(4);
})();
setTimeout(function(){console.log("------------------------------------------")}, 1001);
