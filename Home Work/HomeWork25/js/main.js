

function task1() {
    let task1;
    task1 = document.querySelector(".task1");

let arr1 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];
let arr2 = ['item1', 'item2', 'item3', 'item4'];
let arr3 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
let arr4 = ['item1', 'item2', 'item3'];
let arr5 = ['item1', 'item2', 'item3', 'item4', 'item5'];

    task1.innerHTML += 'Arr1:' + ' ';
    for (let i of arr1) {
        task1.innerHTML += i + ' ';
    }
    task1.innerHTML += '<br>';

    task1.innerHTML += 'Arr2:' + ' ';
    for (let i of arr2) {
        task1.innerHTML += i + ' ';
    }
    task1.innerHTML += '<br>';

    task1.innerHTML += 'Arr3:' + ' ';
    for (let i of arr3) {
        task1.innerHTML += i + ' ';
    }
    task1.innerHTML += '<br>';

    task1.innerHTML += 'Arr4:' + ' ';
    for (let i of arr4) {
        task1.innerHTML += i + ' ';
    }
    task1.innerHTML += '<br>';

    task1.innerHTML += 'Arr5:' + ' ';
    for (let i of arr5) {
        task1.innerHTML += i + ' ';
    }
};



function task2() {
    let task2;
    task2 = document.querySelector(".task2");

let arr1 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];
let arr2 = ['item1', 'item2', 'item3', 'item4'];
let arr3 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
let arr4 = ['item1', 'item2', 'item3'];
let arr5 = ['item1', 'item2', 'item3', 'item4', 'item5'];
let arr6 = ['item1', 'item2', 'item3'];
let arr7 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

    task2.innerHTML += 'Arr1:' + ' ';
    for (let i in arr1) {
        task2.innerHTML += i + ' ' + '-' + ' ';
        task2.innerHTML += arr1[i] + ',' + ' ';
    }
    task2.innerHTML += '<br>';

    task2.innerHTML += 'Arr2:' + ' ';
    for (let i in arr2) {
        task2.innerHTML += i + ' ' + '-' + ' ';
        task2.innerHTML += arr2[i] + ',' + ' ';
    }
    task2.innerHTML += '<br>';

    task2.innerHTML += 'Arr3:' + ' ';
    for (let i in arr3) {
        task2.innerHTML += i + ' ' + '-' + ' ';
        task2.innerHTML += arr3[i] + ',' + ' ';
    }
    task2.innerHTML += '<br>';

    task2.innerHTML += 'Arr4:' + ' ';
    for (let i in arr4) {
        task2.innerHTML += i + ' ' + '-' + ' ';
        task2.innerHTML += arr4[i] + ',' + ' ';
    }
    task2.innerHTML += '<br>';

    task2.innerHTML += 'Arr5:' + ' ';
    for (let i in arr5) {
        task2.innerHTML += i + ' ' + '-' + ' ';
        task2.innerHTML += arr5[i] + ',' + ' ';
    }
    task2.innerHTML += '<br>';

    task2.innerHTML += 'Arr6:' + ' ';
    for (let i in arr6) {
        task2.innerHTML += i + ' ' + '-' + ' ';
        task2.innerHTML += arr6[i] + ',' + ' ';
    }
    task2.innerHTML += '<br>';

    task2.innerHTML += 'Arr7:' + ' ';
    for (let i in arr7) {
        task2.innerHTML += i + ' ' + '-' + ' ';
        task2.innerHTML += arr7[i] + ',' + ' ';
    }
};


function task3() {
    let task3;
    task3 = document.querySelector(".task3");

let arr1 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];
let arr2 = ['item1', 'item2', 'item3', 'item4'];
let arr3 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
let arr4 = ['item1', 'item2', 'item3'];
let arr5 = ['item1', 'item2', 'item3', 'item4', 'item5'];

    let l1;
    for (let i = 0; i <= arr1.length; i++) {
        l1 = i;
    }
    task3.innerHTML += 'Length Arr1:' + ' ' + l1 + ';' + '<br>';

    let l2;
    for (let i = 0; i <= arr2.length; i++) {
        l2 = i;
    }
    task3.innerHTML += 'Length Arr2:' + ' ' + l2 + ';' + '<br>';

    let l3;
    for (let i = 0; i <= arr3.length; i++) {
        l3 = i;
    }
    task3.innerHTML += 'Length Arr3:' + ' ' + l3 + ';' + '<br>';

    let l4;
    for (let i = 0; i <= arr4.length; i++) {
        l4 = i;
    }
    task3.innerHTML += 'Length Arr4:' + ' ' + l4 + ';' + '<br>';

    let l5;
    for (let i = 0; i <= arr5.length; i++) {
        l5 = i;
    }
    task3.innerHTML += 'Length Arr5:' + ' ' + l5 + '.';
};