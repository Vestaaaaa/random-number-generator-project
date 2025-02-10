import "./style.css";

const mainContainer = document.createElement("div");
mainContainer.className = "main-container";

const heading = document.createElement("h1");
heading.className = "heading";
heading.textContent = "Random Number";

// Создаем контейнер для выбора метода генерации
const methodContainer = document.createElement("div");
methodContainer.className = "method-container";

// Создаем радиокнопки для выбора метода
const rangeOption = document.createElement("input");
rangeOption.type = "radio";
rangeOption.name = "generationMethod";
rangeOption.value = "range";
rangeOption.checked = true;

const rangeLabel = document.createElement("label");
rangeLabel.textContent = "Из диапазона чисел";
rangeLabel.appendChild(rangeOption);

// Создаем радиокнопки для выбора метода
const listOption = document.createElement("input");
listOption.type = "radio";
listOption.name = "generationMethod";
listOption.value = "list";

const listLabel = document.createElement("label");
listLabel.textContent = "Из списка чисел";
listLabel.appendChild(listOption);

methodContainer.append(rangeLabel, listLabel);

// Создаем контейнер для диапазона
const rangeContainer = document.createElement("div");
rangeContainer.className = "range-container";

const textFrom = document.createElement("p");
textFrom.textContent = "from";
const inputRangeFrom = document.createElement("input");
inputRangeFrom.type = "number";
inputRangeFrom.className = "input-range";

const textTo = document.createElement("p");
textTo.textContent = "to";
const inputRangeTo = document.createElement("input");
inputRangeTo.type = "number";
inputRangeTo.className = "input-range";

rangeContainer.append(textFrom, inputRangeFrom, textTo, inputRangeTo);

// Создаем контейнер для списка чисел
const listContainer = document.createElement("div");
listContainer.className = "list-container";
listContainer.style.display = "none"; // Скрываем по умолчанию

const textList = document.createElement("p");
textList.textContent = "Введите числа через запятую:";
const inputList = document.createElement("input");
inputList.type = "text";
inputList.className = "input-list";

listContainer.append(textList, inputList);

// Создаем элемент для отображения результата
const result = document.createElement("div");
result.className = "result";

// Создаем кнопку генерации
const buttonGenerate = document.createElement("button");
buttonGenerate.className = "button-generate";
buttonGenerate.id = "generate";
buttonGenerate.textContent = "Generate";

// Добавляем обработчик события на кнопку
buttonGenerate.addEventListener("click", () => {
  const selectedMethod = document.querySelector(
    //ищется эл который отмеченный checkedс name. Из этого элемента извлекается значение (value), которое затем сохраняется в переменной selectedMethod.
    'input[name="generationMethod"]:checked'
  ).value;

  if (selectedMethod === "range") {
    const from = parseInt(inputRangeFrom.value);
    const to = parseInt(inputRangeTo.value);

    if (!isNaN(from) && !isNaN(to) && from < to) {
      const randomNumber = Math.floor(Math.random() * (to - from + 1)) + from;
      result.textContent = `${randomNumber}`;
    } else {
      result.textContent = `Пожалуйста, введите корректный диапазон`;
    }
  } else if (selectedMethod === "list") {
    const numbers = inputList.value
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num));

    if (numbers.length > 0) {
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      result.textContent = `${randomNumber}`;
    } else {
      result.textContent = `Пожалуйста, введите корректный список чисел`;
    }
  }
});

// Добавляем обработчик для переключения между методами
methodContainer.addEventListener("change", (event) => {
  if (event.target.value === "range") {
    rangeContainer.style.display = "block";
    listContainer.style.display = "none";
  } else {
    rangeContainer.style.display = "none";
    listContainer.style.display = "block";
  }
});

// Добавляем элементы в контейнер
mainContainer.append(
  heading,
  methodContainer,
  rangeContainer,
  listContainer,
  result,
  buttonGenerate
);

// Добавляем контейнер на страницу
document.body.append(mainContainer);
