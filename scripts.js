// Задание 1


/*let arrNum = [1, 2, 3, 4, 5];
for (let i = 0; i < arrNum.length; i++) {
    document.write(arrNum[i] + " ");
}


// Задание 2


let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= -10 && arr[i] <= -3) {
        console.log(arr[i])
    }
}*/


// Задание 3


/*let arr = [];
for (let i = 23; i <= 57; i++) {
    console.log(i);
}


// Задание 4

/*let arr = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i][0] != 1 && arr[i][0] != 2 && arr[i][0] != 5)
        continue;
    console.log(arr[i]);
}*/


// Задание 5

/*let str = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (i = 7; i <= str.length; i++) {
    document.write(str[0] + " ", str[1] + " ", str[2] + " ", str[3] + " ", str[4] + " ", '<b>' + str[5] + " ", str[6] + " " + '</b>');
}*/

// Задание 6

/*let arr = [
    123,
    321,
    'JavaScript'
];
console.log(arr[2]);*/



// Задание 7

/*let arr = [],
    i = 0;
for (;;) {
    i = +prompt('Введите число');
    if (i == '')
        break;
    arr.push(i);
}

arr = arr.sort(function(a, b) {
    return a - b;
})
console.log(arr);
*/




// Задание 8

/*let arr = [12, false, 'text', 4, 2, -5, 0];
arr.reverse();
console.log(arr);
*/

// Задание 9

/*let arr = [5, 9, 21, , , 9, 78, , , , 6],
    counter = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] = ' ') {
        counter = counter + 1;
    }

}
console.log(counter);

*/

// Задание 11

/*let i = 0,
    j = 0;
let max = 5;
let space = "",
    star = "";

while (i < max) {
    space = "";
    star = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "^";
    console.log(space + star);
    i++;
}*/