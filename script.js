const main = document.querySelector('main');

const examples_list = document.querySelector('.examples_list');

//////////////////////////////////////////////BINARY SEARCH

const binary_search_index = document.querySelector('.search_index');
const binary_attempt_amount = document.querySelector('.attempt_amount');

const binary_array_length = document.getElementById('array_length');
const binary_search_number = document.getElementById('search_number');

//////////////////////////////////////////////RECURSION & STACK

const recursion_article = document.querySelector('.recursion_article');
const factorial_input_value = document.querySelector('.factorial_input_value');

main.addEventListener('click', mainClickOpenHandler);
main.addEventListener('click', mainClickCloseHandler);

function mainClickOpenHandler(e) {
  const targetClass = e.target.classList[0];

  switch(targetClass) {
    case 'show_examples':
      examples_list.classList.add('show');
    case 'show_recursion':
      recursion_article.classList.add('show_recursion_block');
    case 'play_factorial_animation':
      console.log(factorial_input_value.value);
    case 'binary_find':
      runBinaryAlgorithm();
  };
};

function mainClickCloseHandler(e) {
  const targetClass = e.target.classList[0];

  switch(targetClass) {
    case 'hide_examples':
      examples_list.classList.remove('show');
    case 'hide_recursion':
      recursion_article.classList.remove('show_recursion_block');
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

const selectionSortInput = document.getElementById('selection_sort_input');
const selectionSortBtn = document.querySelector('.selection_sort_btn');
const selectionSortPre = document.getElementById('selection_sort_pre');

selectionSortBtn.addEventListener('click', () => {
  const content = selectionSortInput.value;

  const contentArr = content.trim().match(/\d+/g);

  if (contentArr){
    selectionSortPre.innerText = selectionSort(contentArr.map(el => +el));

    return;
  };


  selectionSortPre.innerText = 'Чет не вижу чисел...'
});

function smallestIndexInArr(arr) {
  let smallest_el = arr[0];
  let smallest_index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (smallest_el > arr[i]){
      smallest_el = arr[i];

      smallest_index = i;
    };
  }; 

  return smallest_index;
};

function selectionSort(arr) {
  const newArr = [];

  while (arr.length){
    let smallest = smallestIndexInArr(arr);
    
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  };

  return newArr;
};

//////////////////////////////////////////////RECURSION SECTION