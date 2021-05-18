
// ///// TASK 1 /////Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, 
// пока результат не станет меньше 10. Пусть функция возвращает количество итераций,
// которое потребовалось для достижения результата.//
function calcIteration(num) {
    let i = 0; 
    for (; num >= 10;i++){
      num/=2;
    }
    return console.log(`Потребовалось ${i} итераций`);
}
calcIteration(1000);




///// TASK 2 /////
// - запрашивает у пользователя число от 1 до 10
// - генерирует рандомное число от 1 до 10(именно целое число, чтобы без десятых, сотых и т.д.)
// - выводит в алерт юзеру сообщение о том, что он угадал число, если числа совпали. и, соответственно - нет, если не угадали

// требования к выполнению этой задачи:
// - генерирование числа должно быть написать в функции - getRandomNumber
// - сравнение числа введенного юзера и сгенерированное программой должно происходить в функции - areNumbersEqual
// - функции getRandomNumber и areNumbersEqual должны быть описаны в отдельном от основной программы файле
// - если юзер ввел некорректно число (> 10, или какую-нибудь строку) - сказать ему об этом и предложить сыграть еще раз


// let userNum = prompt('Enter number from 1 to 10');
// while (userNum < 1 || userNum > 10) {
//     userNum = prompt('Enter correct number')
// }
// let randomNum = getRandomNumber()
// areNumbersEqual()



///// TASK 3 /////
// Напишите функцию, которая будет принимать строку, нужно вернуть новую строку, которая будет делать заглавным 
// первый символ каждого слова.
function createUpperLetter(str) {
  let words = str.split(' ');
  let newWord = '';
  let word = '';
  let newStr = '';
  for (let i = 0; i < words.length; i++){
    word = words[i];
    newWord = word[0].toUpperCase() + word.slice(1);
    newStr+=newWord+' '
  }
    return console.log(newStr);
  }
createUpperLetter('good day, egor. how are you?');




///// TASK 4 /////
// Написать функцию, которая принимает любое количество чисел и возввращает их сумму.
function sumArg() {
  let result = 0;
    for (let i=0; i < arguments.length; i++){
      result += arguments[i];
    }
  return console.log(result);
}
sumArg(1, 2, 3, 4, 5);




///// TASK 5 /////
// Написать функцию которая будет принимать число ( дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
// Для 2021 это будет 5.
function sumNumber(number=2000) {
    let result=0;
    number = String(number);
    for(let i=0; i<number.length; i++){
      result+=+(number[i]);
    }
      return console.log(result);
  }
  sumNumber();


///// TASK 6 /////
// Написать функцию, которая преобразуем любую строку в строку написанную
// кебаб кейсом(все буквы с маленькой и на месте пробелов - тире).Например ‘Hello World’ - ‘hello - world’;
function creatLowerStr(stroka) {
    stroka=stroka.toLowerCase();
    return console.log (stroka.replace(/ /g,'-'));
  }
 creatLowerStr('MASHA AND BEARS');



///// TASK 7 /////
// Написать функцию, которая из любой фразы сделает и вернёт её аббревиатуру. 
// Например: ‘Республика беларусь’ -> ‘РБ’
// ‘Минск’ -> ‘М’
function creatAbbr(str) {
  let words=str.split(' ');
  let word = '';
  let abbr = '';
    for(let i =0; i<words.length; i++){
      word = words[i];
      abbr += word[0];
    }
  return console.log(abbr.toUpperCase());
  }
  creatAbbr('организация объединённых наций');
