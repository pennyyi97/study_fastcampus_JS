/* spread와 rest-spread 연산자 */
/* const slime = {
  name: '슬라임'
};

const cuteSlime = {
  name: '슬라임',
  attribute: 'cute'
};

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
 */
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime,
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};

const greenCuteSlime = {
  ...purpleCuteSlime,
  color: 'green'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);

//배열에도 사용 가능
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);

const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);
