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

