//start();
function start() {
    while (true) {
        let selectItem = prompt('Введите номер задания которое хотите выполнить:\n' + '1.Треугольник\n' + '2.Шахматы\n' + '3.Минимальный элемент\n' + '4.Чётность\n' + '5.Количество B\n' + '6.Количество определённой буквы в заданной строке\n' + '7.Сумму элементов массива(2)\n' + '8.Сумму элементов массива(3)\n' + '9.Перевернуть массив + новый\n' + '10.Перевернуть массив и оставить всё в нём\n' + '0.Выход');
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
        value: _arr[0], rest: null
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
        value: _value, rest: _list
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
    }, subtract: function (a, b) {
        return a - b;
    }, multiply: function (a, b) {
        return a * b;
    }, divide: function (a, b) {
        return a / b;
    }, power: function (a, b) {
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
        evenSum: evenSum, oddAverage: oddAverage, greaterThanAverage: greaterThanAverage
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


const users = ["Stephen Fry", "Ethel Lilian Voynich", "Neil Gaiman", "Kotaro Isaka", "Isaac Asimov"];

function countWords(users) {
    let arrSize = [];
    for (const user of users) {
        arrSize.push(user.split(' ').length);
    }
    return arrSize;
}

function reverseStrings(users) {
    for (let i = 0; i < users.length; i++) {
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
// console.log(memoizedFunction(2, 3)); // Calculating sum of 2 and 3, returns 5
// console.log(memoizedFunction(2, 3)); // Returns 5 (fetches from cache)
// console.log(memoizedFunction(1, 5));
// console.log(memoizedFunction(2, 3)); // Returns 5 (fetches from cache)
const purchases = [{item: 'Book', price: {USD: 20, EUR: 18, GBP: 15}, currency: 'EUR'}, {
    item: 'T-shirt',
    price: {USD: 10, EUR: 9, GBP: 7},
    currency: 'GBP'
}, {item: 'Laptop', price: {USD: 1000, EUR: 900, GBP: 750}, currency: 'USD'}, {
    item: 'Pot',
    price: {USD: 15, EUR: 13.5, GBP: 11.25},
    currency: 'EUR'
}];

const exchangeRates = {
    USD: {EUR: 0.9, GBP: 0.75}, EUR: {USD: 1.1, GBP: 0.83}, GBP: {USD: 1.33, EUR: 1.21}
};

function calculateTotalPrice(items, baseCurrency, exchangeRates) {
    return items.reduce((acc, purchase) => {
        if (purchase.currency !== baseCurrency) {
            return acc + exchangeRates[purchase.currency][baseCurrency] * purchase.price[purchase.currency];
        } else {
            return acc + purchase.price[purchase.currency];
        }
    }, 0);
}

const baseCurrency = 'USD';
const totalCost = calculateTotalPrice(purchases, baseCurrency, exchangeRates);
//console.log(totalCost);


const events = [];

function addEvent(name, date) {
    events.push({name: name, date: new Date(date)})
}

function removeEvent(nameDel) {
    const indexDelete = events.findIndex(({name}) => nameDel === name);
    if (indexDelete !== -1) {
        events.splice(indexDelete, 1);
    }
}

function getUpcomingEvents() {
    const today = new Date();
    const nextWeek = new Date(+today + 1000 * 60 * 60 * 24 * 7);
    return events.filter((event) => event.date >= today && event.date <= nextWeek).sort((a, b) => +a.date - +b.date);
}

addEvent('Client Meeting', '2024-07-13 14:30');
addEvent('Lunch with Colleagues', '2024-06-27 12:00');
addEvent('Conference', '2024-06-26 09:00');
addEvent('Michael Day', '2024-11-31 00:00');
addEvent('Check Day', '2024-07-09 01:00');
removeEvent('Conference');
//console.log(events);
//console.log(getUpcomingEvents());
/*
const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
};
*/

class Task {
    constructor(name, description, assignedTo, dueDate, status = "pending") {
        this.id = ++Task.currentId;
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = new Date(dueDate);
        this.status = status;
    }
}

Task.currentId = 0;

class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentId = 0;
    }

    addTask(name, description, assignedTo, dueDate) {
        this.tasks.push(new Task(name, description, assignedTo, dueDate));
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    getTaskById(taskId) {
        return this.tasks.find(task => task.id === taskId);
    }

    getTasks() {
        return this.tasks;
    }

    updateTask(taskId, updatedTask) {
        const indexTask = this.tasks.findIndex((task) => task.id === taskId);
        if (indexTask !== -1) {
            this.tasks[indexTask] = {...updatedTask, id: taskId};
        }

    }

    markTaskAsComplete(taskId) {
        const task = this.getTaskById(taskId);
        if (task) {
            task.status = 'completed';
        }
    }

    getTasksCount() {
        return this.tasks.length;
    }

}

/*

let TM = new TaskManager();
TM.addTask("task1", "it is test task1", "Michael", "01 July 2025");
TM.addTask("task2", "it  task2", "Michael", "02 December 2024");
TM.addTask("task3", "it is test task3, longer description", "Marina", "03 July 2025");

const task4 = new Task("task4", "Just tusk 4", "Alex", "04 September 2024")

console.log("All tasks", TM.getTasks());

const taskIdToDelete = TM.getTasks()[1]["id"];
console.log("Id to delete", taskIdToDelete);

TM.deleteTask(taskIdToDelete);
console.log("After delete", TM.getTasks());

const taskIdToUpdate = TM.getTasks()[0]["id"];
console.log("Id to update", taskIdToUpdate);

TM.updateTask(taskIdToUpdate, task4);
console.log("Task after update", TM.getTaskById(taskIdToUpdate));

const taskIdToMarkAsCompleted = 1;
TM.markTaskAsComplete(taskIdToMarkAsCompleted);
console.log("Completed task", TM.getTaskById(taskIdToMarkAsCompleted));

console.log("After all changes", TM.getTasks());
console.log(TM.getTasksCount());
*/
async function getData() {
    try {
        const allData = await fetch('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json');
        let dataJSON = await allData.json();
        const result = dataJSON.filter((data) =>
            data && data['Fast Attack(s)']?.length > 1 && data['Special Attack(s)'].length > 2 &&
            data['Types'].includes("Water") &&
            data['Types'].includes("Poison"));

        //have more than 1 fast attacks, more than 2 special attacks
        /*if (data['Fast Attack(s)']?.length < 2 ||
            data['Special Attack(s)']?.length < 3 ||
            !data ||
            !data['Special Attack(s)'])
            return false;

        const arrType = data['Special Attack(s)'].map((attack) => attack?.Type);
        return (arrType.includes("Water") && arrType.includes("Poison"));*/
        return result;
    } catch (err) {
        console.error(err.message)
    }
}

(async function () {
    const result = await getData();
    console.log(result);
})();
