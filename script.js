start();

function start() {
    while (true) {
        var selectItem = prompt('Введите номер задания которое хотите выполнить:\n' +
            '1.Треугольник\n' +
            '2.Шахматы\n' +
            '3.Минимальный элемент\n' +
            '4.Чётность\n' +
            '5.Выход');
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
                alert("min between " + num1 + " and " + num2 + " is:" + min(num1, num2));
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
