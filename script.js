//1--------------------------------------------------
const array = [1, 2, 3];
const set = new Set(array);

//2--------------------------------------------------
console.log('if set has 3: ', set.has(3));
console.log('if set has 4: ', set.has(4));

//3--------------------------------------------------
set.add(4);
set.add(5);
set.add(6);

console.log('added new elements: ', set);

//4--------------------------------------------------
let sum = 0;
for (const el of set) {
    console.log(el);
    sum += el;
}

console.log('summ of elements: ', sum);

//5--------------------------------------------------
set.delete(2);
console.log('deleted 2: ', set);

//6--------------------------------------------------
set.clear();
console.log('set clear: ', set);

//7--------------------------------------------------
const arr = [1, 6, 9, 4, 9, 1, 5, 6];
const set2 = new Set(arr);

console.log('unique set of numbers 2: ', set2);

//8--------------------------------------------------
const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr2 = [5, 10, 11];

const setArr1 = new Set(arr1);
const setArr2 = new Set(arr2);
const mergedSet = new Set([...setArr1, ...setArr2]);

console.log('unique set of numbers 3: ', mergedSet);

//9.1--------------------------------------------------
const messages = [
    { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
    { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
    { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
    { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];

const messageSet = [...new Set(messages.map(message => message.name))];
console.log('set of names: ', messageSet);

//9.2--------------------------------------------------
const messageMap = new Map();

for (const message of messages) {
  const { name, message: text, date } = message;
  if (!messageMap.has(name)) {
    messageMap.set(name, []);
  }
  messageMap.get(name).push({ message: text, date });
}

console.log('map of names and arrays: ', messageMap);