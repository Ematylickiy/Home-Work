// ///// TASK 1 (Презентация) /////Напишите функцию hello(), которая при вызове будет возвращать строку
// «Привет, JavaScript!».
function hello() {
    return console.log ('Привет, JavaScript!');
}
hello();

let helloArrow = () => console.log('Привет, JavaScript!');
helloArrow();


//

// ///// TASK 2 (Презентация) Напишите функцию hello2(), которая при вызове будет принимать переменную name
// // (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»). В случае 
// отсутствующего аргумента выводить «Привет, гость»/////
function hello2(name) {
    if (arguments[0] == undefined){
        name = 'гость!';
    }
    return console.log(`Привет, ${name}!!`);
}
hello2();




// ///// TASK 3 (Презентация) Создайте функцию rgb(), которая будет принимать три числовых аргумента и
// возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их
// равными нулю. Не проверять переменные на тип данных   /////
function rgb(a, b, c) {
    for (let i=0; i<3; i++){
      if (a==undefined){
        a=b=c=0;
      }else if (b==undefined){
        b = c = 0;
      } else if (c==undefined){
        c = 0;
      }
    }
     return console.log (`rgb(${a}, ${b}, ${c})`);
  }
  rgb();




///// TASK 4 (Презентация) 
// НАПИШИТЕ ФУНКЦИЮ MIN(A,B), КОТОРАЯ ВОЗВРАЩАЕТ МЕНЬШЕЕ ИЗ ЧИСЕЛ A И B./////
function min(a, b) {
    if (a<b){
      return console.log (a)
    } else {
      return console.log (b)
    }
  }
min(5, 2);




// ///// TASK 5 (Презентация)
// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или
// отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'. /////
function checkNum (num){
    if (num>0){
      return console.log ('+++')
    } else {
      return console.log ('---')
    }
  }
checkNum(-2);


  

///// TASK 6 (Презентация) /////
// СДЕЛАЙТЕ ФУНКЦИЮ, КОТОРАЯ ПАРАМЕТРАМИ ПРИНИМАЕТ 3 ЧИСЛА И ВЫВОДИТ НА ЭКРАН СУММУ ЭТИХ ЧИСЕЛ.
function summArgument(a, b, c) {
  let summ = a + b + c;
  return console.log(summ);
}
summArgument(10, 30, 60);