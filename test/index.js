const _ = require('lodash');

const num = [1,2,3];

_.each(num, function(n,i) {
	console.log(n);
});



let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
  console.log(sum);

}