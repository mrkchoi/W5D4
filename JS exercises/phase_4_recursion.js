
// range(1,5) => [1,2,3,4,5]
// [1] + range(2,5)

function range(start, end) {
  if (start === end + 1) { return []; }
  return [start].concat(range(start + 1, end));
}

// console.log(range(1,5));