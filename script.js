//start();
function start() {
    while (true) {
        let selectItem = prompt('Введите номер задания которое хотите выполнить:\n' +
            '1.Треугольник\n' +
            '2.Шахматы\n' +
            '3.Минимальный элемент\n' +
            '4.Чётность\n' +
            '5.Количество B\n' +
            '6.Количество определённой буквы в заданной строке\n' +
            '7.Сумму элементов массива(2)\n' +
            '8.Сумму элементов массива(3)\n' +
            '9.Перевернуть массив + новый\n' +
            '10.Перевернуть массив и оставить всё в нём\n' +
            '0.Выход');
        switch (selectItem) {
            case '1': {
                let height = prompt('Введите высоту треугольника');
                alert(forLoop(height));
                break;
            }
            case '2': {
                let width = prompt('Введите ширину доски');
                alert(chess(width));
                break;
            }
            case '3': {
                let num1 = prompt('Введите первый элемент');
                let num2 = prompt('Введите второй элемент');
                alert("минимальное между  " + num1 + " и " + num2 + " это:" + min(num1, num2));
                break;
            }
            case '4': {
                let num = prompt('Введите число');
                if (isEven(num)) {
                    alert("Число" + num + " чётное");
                } else alert("Число " + num + " нечётное");
                break;
            }
            case '5': {
                let line = prompt('Введите строку');
                alert("Количество букв 'B' в заданной строке: " + countBs(line));
                break;
            }
            case '6': {
                let line = prompt('Введите строку');
                let char = prompt('Введите символ, кторый будет подсчитан');
                alert("Количество букв " + char + " в заданной строке: " + countChar(line, char));
                break;
            }
            case '7': {
                let num1 = Number(prompt('Введите первый элемент'));
                let num2 = Number(prompt('Введите второй элемент'));
                let arr = range(num1, num2);
                alert("массив " + arr);
                alert("сумма:" + sum(arr))
                break;
            }
            case '8': {
                let num1 = Number(prompt('Введите первый элемент'));
                let num2 = Number(prompt('Введите второй элемент'));
                let num3 = Number(prompt('Введите шаг'));
                let arr = range(num1, num2, num3);
                alert("массив " + arr);
                alert("сумма:" + sum(arr))
                break;
            }
            case '9': {
                let num1 = Number(prompt('Введите первый элемент'));
                let num2 = Number(prompt('Введите второй элемент'));
                let num3 = Number(prompt('Введите шаг'));
                let arr = range(num1, num2, num3);
                alert("массив до изменения " + arr);
                let newArr = reverseArray(arr);
                alert("Новый массив " + newArr);
                break;
            }
            case '10': {
                let num1 = Number(prompt('Введите первый элемент'));
                let num2 = Number(prompt('Введите второй элемент'));
                let num3 = Number(prompt('Введите шаг'));
                let arr = range(num1, num2, num3);
                alert("массив до изменения " + arr);
                reverseArrayInPlace(arr);
                alert("массив после изменения" + arr);
                break;
            }

            case '0': {
                return 0;
            }
            default:
                return 0;


        }
    }
}


function forLoop(n) {
    let tempHashtag = "#", result = "";
    for (let i = 0; i < n; i++) {
        result += tempHashtag.repeat(i + 1) + "\n";
    }
    return result;
}


function chess(n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i + j) % 2 === 0) {
                result += '#';
            } else result += ' ';
        }
        result += '\n';
    }
    return result;
}

function min(a, b) {
    if (a < b) return a;
    return b;
}

function isEven(n) {
    return n % 2 === 0;
}

function countBs(line) {
    return countChar(line, "B");
}

function countChar(line, char) {
    let count = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === char) count++;
    }
    return count;
}

function range(num1, num2, step = 1) {
    let arr = [];
    if (step === 0 || (step > 0 && num1 > num2) || (step < 0 && num1 < num2)) {
        return [];
    }
    for (let i = num1; step > 0 ? i <= num2 : i >= num2; i += step) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    let sumNum = 0;
    for (let i = 0; i < arr.length; i++) {
        sumNum += arr[i];
    }
    return sumNum;
}

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    let len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
}


function listToArray(_list) {
    let newArr = [_list.value];
    let tempList = _list.rest;
    while (tempList !== null) {
        newArr.push(tempList.value);
        tempList = tempList.rest;
    }
    return newArr;
}

function arrayToList(_arr) {
    if (_arr.length === 0) return null;
    let newList = {
        value: _arr[0],
        rest: null
    }
    let tempList = newList;
    for (let i = 1; i < _arr.length; i++) {
        tempList.rest = {value: _arr[i], rest: null}
        tempList = tempList.rest;
    }
    return newList;
}

//console.log(arrayToList(listToArray(list)));
/*let li = arrayToList([1,2,3]);
console.log(li);
console.log(prepend(123,li));*/
function prepend(_value, _list) {
    return {
        value: _value,
        rest: _list
    }
}

function nth(_list, _val) {
    if (_list === null) return undefined;
    if (_val === 0) {
        return _list.value;
    }
    return nth(_list.rest, _val - 1);
}

/*

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

*/

let Calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return Math.pow(a, b);
    }
}

/*console.log(Calculator.add(8, 6));
console.log(Calculator.subtract(8, 6));
console.log(Calculator.multiply(8, 6));
console.log(Calculator.divide(8, 6));
console.log(Calculator.power(8, 6));*/

function arrayAnalyzer(arr) {
    let evenSum = 0, oddSum = 0, n = arr.length, oddCount = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 1) {
            oddSum += arr[i];
            oddCount++;
        } else evenSum += arr[i];
    }
    const oddAverage = oddSum / oddCount;
    let greaterThanAverage = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] > oddAverage) greaterThanAverage.push(arr[i]);
    }
    return {
        evenSum: evenSum,
        oddAverage: oddAverage,
        greaterThanAverage: greaterThanAverage
    }
}

/*

const numbers = [5, 3, 8, 10, 2, 7, 4, 1, 6, 9];
const result = arrayAnalyzer(numbers);
console.log(result);*/

let products = {
    "Laptop": {price: 1000, category: "Electronics"},
    "Phone": {price: 650, category: "Electronics"},
    "Tablet": {price: 470, category: "Electronics"},
    "Lipstick": {price: 20, category: "Fashion"},
    "Mascara": {price: 25, category: "Fashion"},
};


function listOfProducts(products) {
    for (const name of Object.keys(products)) {
        console.log(name);
    }
}

function productByName(products, nameProduct) {
    for (const [productName, {price, category}] of Object.entries(products)) {
        if (productName === nameProduct) {
            console.log(`Name: ${productName}, price: ${price} , category: ${category} `);
        }
    }
}

function listOfProductsByCategoryAndPrice(products, categoryProduct, priceProduct) {
    for (const [nameProduct, {price, category}] of Object.entries(products)) {
        //
        if (categoryProduct === category && price <= priceProduct) {
            console.log(`Name: ${nameProduct}, price: ${price} , category: ${category} `);
        }
    }
}
//
// // Displaying information about all products
// listOfProducts(products);
// // Finding a product by name
// const productName = "Lipstick";
// productByName(products, productName);
//
// const category = "Electronics";
// const price = 800;
// // Finding products by category whose price does not exceed a given value
// listOfProductsByCategoryAndPrice(products, category, price);


const users = [
    "Stephen Fry",
    "Ethel Lilian Voynich",
    "Neil Gaiman",
    "Kotaro Isaka",
    "Isaac Asimov"
];

function countWords(users) {
    let arrSize = [];
    for (const user of users) {
        arrSize.push(user.split(' ').length);
    }
    return arrSize;
}
function reverseStrings(users) {
    for (let i = 0 ; i < users.length; i++) {
        users[i] = users[i].split("").reverse().join("");
    }
    return users;
}
function countUniqueCharacters(users) {
    const allStrings = users.join("");
    let charSet = new Set;
    for (const charElement of allStrings) {
        if (!charSet.has(charElement)) charSet.add(charElement);
    }
    return charSet.size;
}
// Function to count the number of words in each string
// console.log(countWords(users));
// // Function to reverse each string
// console.log(reverseStrings(users));
//
// // Function to count the number of unique characters in all strings
// console.log(countUniqueCharacters(users));


const sumOfTwo = (x, y) => x + y;

function memoization(func) {
    let memorizationMap = new Map;
    return function (...arr) {
        let keyString = JSON.stringify(arr);
        if (memorizationMap.has(keyString)) return memorizationMap.get(keyString);
        let answer = func(...arr);
        console.log("func");
        memorizationMap.set(keyString, answer);
        return answer;
    }
}
const memoizedFunction = memoization(sumOfTwo);
console.log(memoizedFunction(2, 3)); // Calculating sum of 2 and 3, returns 5
console.log(memoizedFunction(2, 3)); // Returns 5 (fetches from cache)
console.log(memoizedFunction(1, 5));
console.log(memoizedFunction(2, 3)); // Returns 5 (fetches from cache)
