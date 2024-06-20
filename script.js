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
function prepend(_value,_list) {
    return {
        value: _value,
        rest: _list
    }
}

function nth(_list,_val) {
    if (_list === null) return undefined;
    if (_val === 0) {
        return _list.value;
    }
    return nth(_list.rest,_val-1);
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
//start();
