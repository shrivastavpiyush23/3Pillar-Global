// 1.
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}
console.log(makeid(window.prompt("Enter the length of the code")));

// 2.
let n = (Math.random() * 0xfffff * 1000000).toString(16);
console.log('#' + n.slice(0, 6));

// 3.
var randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
var r = randomBetween(0, 255);
var g = randomBetween(0, 255);
var b = randomBetween(0, 255);
console.log("rgb("+r+","+g+","+b+")");

// 4.
var countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
var array = []
for(let i = 0 ; i < countries.length ; i++) {
    array.push(countries[i]);
} 
console.log(array);

// 5.
var countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
var array = []
for(let i = 0 ; i < countries.length ; i++) {
    array.push(countries[i].length);
} 
console.log(array);

// 6.
var countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
var array = []
for(let i = 0 ; i < countries.length ; i++) {
    let arr = [];
    arr.push(countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length);
    array.push(arr);
} 
console.log(array);

// 7.
var countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
var array = []
for(let i = 0 ; i < countries.length ; i++) {
    if(countries[i].includes('land')) {
        array.push(countries[i]);
    }
}
if(array.length > 0) console.log(array);
else console.log("All these countries are without land.");

