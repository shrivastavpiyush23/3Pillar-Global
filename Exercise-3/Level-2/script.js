
// 2.
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
var newt = text.replace(/[.,]/g, "");
console.log(newt.split(" "));
console.log(newt.split(" ").length);

// 3(i).
const shoppingCart1 = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart1.includes('Meat')) {
    console.log(shoppingCart1);
}
else {
    shoppingCart1.unshift('Meat');
    console.log(shoppingCart1);
}

// 3(ii).
const shoppingCart2 = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart2.includes('Sugar')) {
    console.log(shoppingCart2);
}
else {
    shoppingCart2.push('Sugar');
    console.log(shoppingCart2);
}

// 3(iii)
const shoppingCart3 = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart3.pop();
console.log(shoppingCart3);

// 3(iv)
const shoppingCart4 = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart4[2] = "Green Tea";
console.log(shoppingCart4);