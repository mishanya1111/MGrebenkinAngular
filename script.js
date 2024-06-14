start();

function start() {
    while (true) {
        var selectItem = prompt('Введите номер задания которое хотите выполнить:\n' +
            '1.Треугольник\n' +
            '2.Шахматы\n' +
            '3.Минимальный элемент\n' +
            '4.Чётность\n' +
            '5.Количество B\n' +
            '6.Количество определённой буквы в заданной строке\n' +
            '0.Выход');
        switch (selectItem) {
            case '1': {
                var height = prompt('Введите высоту треугольника');
                alert(forLoop(height));
                break;
            }
            case '2': {
                var width = prompt('Введите ширину доски');
                alert(chess(width));
                break;
            }
            case '3': {
                var num1 = prompt('Введите первый элемент');
                var num2 = prompt('Введите второй элемент');
                alert("минимальное между  " + num1 + " и " + num2 + " это:" + min(num1, num2));
                break;
            }
            case '4': {
                var num = prompt('Введите число');
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
                alert("Количество букв " + char  + " в заданной строке: " + countChar(line, char));
                break;
            }
            case '0': {
                return 0;
            }

        }
    }
}


function forLoop(n) {
    var tempHashtag = "#", result = "";
    for (var i = 0; i < n; i++) {
        result += tempHashtag.repeat(i + 1) + "\n";
    }
    return result;
}


function chess(n) {
    var result = "";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
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
    var count = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === 'B') count++;
    }
    return count;
}
function countChar(line,char) {
    var count = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === char) count++;
    }
    return count;
}

