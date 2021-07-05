// Object Shorthand
// 1
const name = 'Parrot'
const colors = ['Red', 'Green', 'Blue', 'Yellow']

const bird = {
    name,
    colors
}
console.log(bird)

// 2
const capital = 'Hanoi'
const continent = 'Asia'

const vietnam = {
    capital,
    continent
}
console.log(vietnam)

// 3
const wheelsCount = 4
const doorsCount = 4
const color = 'black'

const car = {
    wheelsCount,
    doorsCount,
    colors
}
console.log(car)



// Destructuring
// 1
function getAverage(obj) {
    const x = 3.6
    const y = 7.8
    const z = 4.3
    return Math.floor((x + y + z) / 3.0);
}
console.log(getAverage())

// 2
function getAddress(obj) {
    const { city, country, address: { street } } = obj
    return city === "HCMC" && country === "Vietnam" && street === "Ton Dan"; //
}
console.log(getAddress({
    city: "HCMC",
    country: "Vietnam",
    address: {
        number: 12,
        street: "Ton Dan",
        district: "4",
    },
}))

// 3
function objectifyElements(arr) {
    const first = arr[0];
    const second = arr[1];
    const third = arr[2];
    const fourth = arr[4]

    return { first, second, third, fourth };
}
console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4)

// 4
function getFoodItems() {
    const food = [
        ["carrots", "beans", "peas", "lettuce"],
        ["apples", "mangos", "oranges"],
        ["cookies", "cake", "pizza", "chocolate"],
    ];
    const [[carrots], [, mangos], [cookies]] = food
    return { carrots, mangos, cookies }
}
console.log(getFoodItems().mangos === 'mangos')

// 5
function getHistoricPrices(index) {
    const bingo = index // CHANGE ME
    return bingo
}
getHistoricPrices([true, false, true])

// 6
function getHistoricPrices(index) {
    const bingo = index // CHANGE ME
    return bingo
}
console.log(getHistoricPrices([[true, false], [false, true]]))

// 7
function getHistoricPrices(index) {
    const bingo = index // CHANGE ME
    return bingo
}
console.log(getHistoricPrices([[[true, false], [true, false]]]))

// 8
function getHistoricPrices(index) {
    const bingo = index // CHANGE ME
    return bingo
}
console.log(getHistoricPrices([[[{}, {}]]]))



// Arrow function
// 1
function multiArgument() {
    const divide = (a, b) => a / b;
    return divide(40, 10);
}
console.log(multiArgument())

// 2
function spreadWithArrow() {
    const asArray = (...args) => args;
    return asArray(1, 2, 3, 4);
}
console.log(spreadWithArrow())

// 3
function withObject() {
    const getObject = (favoriteCandy) => { favoriteCandy };
    return getObject("twix");
}
console.log(withObject())

// 4
function withMultiLineExpression() {
    const getString = (name) => {
        return `
        Hello there ${name}
        How are you doing today?
      `;
    };
    return getString("Ryan");
}
console.log(withMultiLineExpression())

// 5
function curryAdd() {
    const curryAddition = (a) => {
        return (b) => {
            return (c) => {
                return a + b + c;
            };
        };
    }
    return curryAddition(9)(3)(5);
}
console.log(curryAdd())



// Rest and spread
// 1
function restParams(first, ...rest) {
    console.log({ first, rest });
    return first === 'first' && rest[0] === 'second'
}
console.log(restParams('first', 'second')); // CHANGE ME

// 2
function restParams2(first, ...rest) {
    console.log(first, rest)
    return first === 'first' && rest[0] === 'second' && rest[1] === 'third'
}
console.log(restParams2('first', 'second', 'third'));

// 3
function restParams3(first, ...rest) {
    console.log(first, rest)
    return first === "first" && rest[0] === "second" && rest[1] === "third" && rest[2] === undefined;
}
console.log(restParams3('first', 'second', 'third',));

// 4
function restParams4(...rest) {
    console.log(rest)
    return rest[2] === "third" && rest[0] === "first" && rest[1] === "second";
}
console.log(restParams4("first", "second", "third"));

// 5
function ontoAnObject() {
    const array = [1, 2, 3, 4, 5, 6];
    const object = {};
    // CHANGE BELOW
    [object.one, object.two, object.three, ...object.rest] = array
    // CHANGE ABOVE
    return object;
}
console.log(ontoAnObject())

// 6
function findTheMax() {
    const arr1 = [1, 7, 2, 4];
    const arr2 = [1, 9, 5, 8];
    return Math.max(...arr1, ...arr2)
}
console.log(findTheMax())

// 7
function concatenateArrays() {
    const arr1 = [0, 1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    const result = [...arr1, ...arr2, ...arr3],
    return result;
}
console.log(concatenateArrays())

// 8
function mergeObjects() {
    // what does this return?
    const obj1 = {
        a: "a from obj1",
        b: "b from obj1",
        c: "c from obj1",
        d: {
            e: "e from obj1",
            f: "f from obj1",
        },
    };
    const obj2 = {
        b: "b from obj2",
        c: "c from obj2",
        d: {
            g: "g from obj2",
            h: "h from obj2",
        },
    };
    const result = { ...obj1, ...obj2 };
    return (
        result.a === "YOUR_ANSWER" &&
        result.b === "YOUR_ANSWER" &&
        result.c === "YOUR_ANSWER" &&
        result.d.e === "YOUR_ANSWER" &&
        result.d.f === "YOUR_ANSWER" &&
        result.d.g === "YOUR_ANSWER" &&
        result.d.h === "YOUR_ANSWER"
    );
}
console.log(mergeObjects())