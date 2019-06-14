Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

let arr = [1,2,3];
arr.myEach(function(el) {
  // console.log(el*2);
});


Array.prototype.myMap = function(callback) {
  let output = [];
  this.myEach(function(el) {
    output.push(callback(el));
  });
  return output;
};

let mapped = arr.myMap(function(el) {
  return el * 2;
});

// console.log(mapped);

// arr = [1,2,3]
// initialvalue = 5
// callback = acc + el

// 5 + 1 + 2 + 3 = 11



Array.prototype.myReduce = function(callback, initialValue = this[0]) {
  let total = initialValue;
  
  this.myEach(function(el, idx) {
    // console.log(total)
    if (initialValue === this[0] && idx > 0) {
      total = callback(total, el);
    } else if (initialValue != this[0]) { 
      total = callback(total, el);
    }
    
  });
  return total;
};

let arr5 = [1,2,3];

let reduced = arr5.myReduce(function(acc,el) {
  return acc * el;
});

// console.log(reduced);