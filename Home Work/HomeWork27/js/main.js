

// 1) Function onClick
function showMessage() {
    let text = document.querySelector(".text");
    let button = document.querySelector(".button");
    text.classList.toggle('show')
    if (text.classList.contains('show')) {
        button.innerHTML = "Close";
    } else {
        button.innerHTML = "Open";
    }
}




// 2) Associative array
let man = {
    'name': 'Ben Affleck',
    'age': 48,
    'profession': 'actor'
}

// 2. Добавляем два новых ключа и значения
man['Batman'] = true;
man['growth'] = '192';

// 3. Выводим длину
console.log('Array length:' + ' ' + (Object.keys(man).length));

// 4. Удаляем второй и пятый
delete man.age;
delete man.growth;

// 5. Очищаем
man = {};


// Object
let man2 = {
    name: 'Jared Leto',
    'age': 49,
    'profession': 'actor'
}

// 2. Добавляем два новых значения
man2.Joker = true;
man2.growth = '180';

// 3. Удаляем второй и пятый
delete man2.age;
delete man2.growth;





// 3) Method Map
let arr1 = [5, 10, 15, 20, 25, 30, 35, 40];
let arrMap = arr1.map(function(x) {
    return x / 5;
});

console.log(arrMap);





// 4) Function Match
function getMax () {
    let arr2 = [5, 80, -44, 120, 60, -5, 206];
    return Math.max(...arr2);
}

console.log('Fourth task:' + ' ' + getMax());
