



// let money = 10000
// let acc = 77777

// let name = prompt(`ведите логин`)

// if (name === `rahim`) {
//     let account = prompt(`ведите номер счета`)
//     if (account == acc) {
//         console.log(`на счету = ` + money);
//         let bnm = prompt(`сколько обналичить`)
//         if (bnm > money) {
//             console.log(`на вашем счету недостаточно средств`);
//         }
//         else if (bnm < 0) {
//             console.log(`вы не самый умный`);
//         }
//         else {
//             console.log(`вы сняли - ` + bnm);
//             console.log(`осталось - ` + (money - bnm));
//         }
//     }
//     else {
//         console.log(`счет не найден`);
//     }
// }
// else {
//     console.log(`счет не найден`);
// }






// ввод имени
let name = prompt(`ведите имя`);
// начала условия
if (name[0] === `A` || name[0] === `a`) {
    // ввод возраста и баланса
    let age = prompt(`ведите возраст`);
    if (age >= 20 && age < 40) {
        let money = prompt(`сколько у вас с собой`);
        if (money >= 100) {
            // запрос количества людей
            let num = prompt(`сколько вас в группе`);
            if (num < 10) {
                // полажительный ответ
                console.log(`добро пажаловать`);
            }
            // альтернатива
            else {
                // отрицательный ответ
                console.log(`вас слишком много`);
            }
        }
        // альтернатива
        else {
            // отрицательный ответ
            console.log(`вы не проходите`);
        }
    } else {
        // отрицательный ответ
        console.log(`вы не проходите`);

    }
}
// альтернатива
else {
    // отрицательный ответ
    console.log(`вы не проходите`);
}










// ввод переменной
let str = "HELLOWORLD";
// изминение переменной
str = str.toLocaleLowerCase();
// выбор первго знака
let str1 = str[0].toLocaleUpperCase();
// отбор первого знака
str = str.slice(1);
// соединение переменных
let str2 = str1 + str;



// разделения слов
let str3 = str2.replace(/o/, "o ");
// проверка
console.log(str3);



// // выбор первого слова
// let str3 = str2.slice(0, 5);
// // выбор второго слова
// let str4 = str.slice(4, 9);
// // проверка
// console.log(`${str3} ${str4} `);