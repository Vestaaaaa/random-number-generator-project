import "./style.css";

const mainContainer = document.createElement("div");
mainContainer.className = "main-container";

const heading = document.createElement("h1");
heading.className = "heading";
heading.textContent = "Random Number";

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
  const from = parseInt(inputRangeFrom.value);
  const to = parseInt(inputRangeTo.value);

  if (!isNaN(from) && !isNaN(to) && from < to) {
    const randomNumber = Math.floor(Math.random() * (to - from + 1)) + from;
    result.textContent = `${randomNumber}`;
  } else {
    result.textContent = `Please enter a valid range`;
  }
});

// Добавляем элементы в контейнер
mainContainer.append(heading, rangeContainer, result, buttonGenerate);

// Добавляем контейнер на страницу
document.body.append(mainContainer);
