//1 Лінійний
console.log('Лінійний пошук задача №1');
const a = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів'];
const a1 = prompt('Яке обираєте місто з перелічених?: Київ, Херсон, Крим, Запоріжжя, Донецьк, Білгород, Львів');
let a2 = 0;
for (let i = 0; i < a.length; i++) {
    a2++;
    if(a1 === a[i]) {
        console.log('знайшов, index:', i);
        break } else  (a1 !==a[i]) 
        console.log('не знайшов індекс', i);
    }  
    console.log('Дії', a2);
// Бінарний
console.log('Бінарний пошук задача №2');
const arr = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110];

const poisk = Number(prompt('Вести цифру із перелічених: 1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110'));
let rozr = 0;
let start = 0;
let end = arr.length-1;
// let center;
while (start <= end) {
    rozr++
    let center = Math.floor((start + end) / 2);
    if (arr[center] === poisk) {
        console.log('Цифра введена успішно');
        break;
    } else if (arr[center] > poisk ) {
        end = center - 1;
    } else if (arr[center] < poisk) {
        start = center + 1;
    } else if (arr[center] !==poisk) {
        console.log('цифру не знайдено', center);
        break;
    } else (arr[center] !==poisk)
    console.log('цифру не знайдено', center);
    
} console.log('Дії', rozr);

