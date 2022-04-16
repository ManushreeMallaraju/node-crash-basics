let msg = 'Hello world';
var kelle = 'var kello';

const msg1 = 'Hello'

if (true) {
    let msg2 = 'ello';
    console.log(msg);
    console.log(msg1);
    console.log(msg2);
}

kelle = 'updated';
console.log(msg);
console.log(msg1);
//console.log(msg2); // cannot access, it's a block scope
console.log(kelle);