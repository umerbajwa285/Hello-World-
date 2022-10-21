import promptSync from 'prompt-sync';
const prompt = promptSync();

var name = prompt("What is your name?");
console.log(name);
export { name };

const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);
export { num };

//OR


// const num = prompt('Enter a number: ');
// console.log(num);
// export { num };

// var Number= prompt("Number");
// console.log(Number*(num) + 4);
// export { Number };