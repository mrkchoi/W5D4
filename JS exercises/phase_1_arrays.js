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

Array.prototype.twoSum = function() {
  
};