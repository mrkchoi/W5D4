Array.prototype.uniq = function() {
  let array=[];
  // console.log(Array);
  // console.log(this);
  // let that = this;
  this.forEach(function(el) {
    // console.log(that);
    if(!array.includes(el)) {
      array.push(el);
    }
  });
  return array;
};

// let array=[1,1,2,3];
// console.log(array.uniq());
//array=[-1,0,2,1]
Array.prototype.twoSum = function() {
  let output=[];
  let that = this;
  this.forEach(function(el1, idx1) {
    if ( idx1 < (that.length - 1)) {
      that.forEach(function (el2, idx2) {
        if (el1 + el2 === 0 && idx1 < idx2 ) {
          output.push(idx1);
          output.push(idx2);
        }
      }); 
    }
  }); 
  return output;
};

// let arr = [-1, 0, 2, 1];
// console.log(arr.twoSum());




// console.log()


// INPUT
// [[1,2],
//  [3,4]]

// OUTPUT
// [[1,3],
//  [2,4]]

Array.prototype.transpose = function() {
  // let outerArr = [...Array(this.length)];
  // let finalArr = outerArr.map(el => [...Array(this.length)]);
  // console.log(finalArr);

  let output = [];

  for (let i = 0; i < this.length; i++) {
    let iterArr = [];
    for (let j = 0; j < this.length; j++) {
      iterArr.push(this[j][i]);
    }
    output.push(iterArr);
  }

  return output;
};

let arr3 = [[1, 2], [3, 4]];
// console.log(arr3.transpose());

