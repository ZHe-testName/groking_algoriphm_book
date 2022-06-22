const main = document.querySelector('main');

const examples_list = document.querySelector('.examples_list');

//////////////////////////////////////////////BINARY SEARCH

const binary_search_index = document.querySelector('.search_index');
const binary_attempt_amount = document.querySelector('.attempt_amount');

const binary_array_length = document.getElementById('array_length');
const binary_search_number = document.getElementById('search_number');

main.addEventListener('click', mainClickOpenHandler);
main.addEventListener('click', mainClickCloseHandler);

function mainClickOpenHandler(e) {
  const targetClass = e.target.classList[0];

  switch(targetClass) {
    case 'show_examples':
      examples_list.classList.add('show');
    case 'binary_find':
      runBinaryAlgorithm();
  };
};

function mainClickCloseHandler(e) {
  const targetClass = e.target.classList[0];

  switch(targetClass) {
    case 'hide_examples':
      examples_list.classList.remove('show');
  };
};

function binarySearch(arr, item) {
  //low и high хранять границы списка в котором идет поиск
  let low = 0,
    high = arr.length - 1,
    iterationCount = 0;

  while(low <= high) {//пока границы не сохранятся до одного элемента
    iterationCount++;

    const mid = Math.floor((low + high) / 2);//проверяем средний
    const guess = arr[mid];

    //значение найдено
    if (guess == item) {
      return {
        index: mid,
        count: iterationCount,
      };
    };

    if (guess > item) {//много
      high = mid - 1;
    } else{//мало
      low = mid + 1;
    }
  };

  //Такое значение отсутствует
  return {
    index: 'Гонишь... Такого значения нету.',
    count: iterationCount,
  }
};

function arrayCreator(length) {
  let count = 0;
  const arr = [];

  while(count < length) {
    arr.push(++count);
  };

  return arr;
};

function runBinaryAlgorithm() {
  const arrLength = binary_array_length.value;
  const searchNumber = binary_search_number.value;

  const arr = arrayCreator(arrLength);

  const resultObj = binarySearch(arr, searchNumber);

  binary_attempt_amount.innerText =resultObj.count;
  binary_search_index.innerText = resultObj.index;
};

//////////////////////////////////////////////SELECTION SORT