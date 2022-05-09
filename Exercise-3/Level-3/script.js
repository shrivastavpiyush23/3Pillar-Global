//1,
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// (i)
sortAges = ages.sort();
console.log(sortAges);
console.log("Min Age: "+sortAges[0]+"\n"+"Max Age: "+sortAges[sortAges.length-1]);
// (ii)
let n = ages.length;
let sorted = ages.sort();
if(n % 2 != 0) {
    console.log(sorted[Math.floor(n/2)]);
}
else if(n % 2 == 0) {
    console.log(sorted[Math.floor(n/2)], sorted[Math.floor(n/2)+1]);
}
//(iii)
let sum = 0;
for(let i = 0 ; i < ages.length ; i++) {
    sum = sum + ages[i];
}
let average = sum / ages.length;
console.log(average);
// (iv)
let range = sortAges[sortAges.length-1] - sortAges[0];
console.log(range);