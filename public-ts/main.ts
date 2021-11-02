//Получая элемент, мы можем указать, какого он типа
//В данном случае - поле ввода
//Это говорит, что полученный элемент точно содержит свойства value и valueAsNumber, которые нам нужны
//Если мы не укажем тип HTMLInputElement, компилятор не поймет, что у этого элемента есть свойство value, и откажется компилировать
const num1 = <HTMLInputElement>document.getElementById("num1");
const num2 = <HTMLInputElement>document.getElementById("num2");

//Можно и не указывать тип элемента, если вам не нужны какие-то специфические свойства
const result = document.getElementById("result");
const btn = document.getElementById("btn");

//Пока ещё не все современные браузеры поддерживают стрелочные функции, но компилятор TypeScript заменит её на обычную анонимную функцию
//При условии, что в конфиге указана спецификация es5
btn.addEventListener("click", (e) => { Sum(); });

function Sum() {
  //В эту переменную можно добавить только числовое значение
  //Однако ввод всё равно стоит проверять, потому что пользователь может ввести что угодно вместо числа
  let sum: number = num1.valueAsNumber + num2.valueAsNumber;

  //Тип свойства innerHTML - string, поэтому мы должны конвертировать переменную sum в строку
  result.innerHTML = sum.toString();
}