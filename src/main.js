// 1. to-do-list 버튼 기능
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  if (button.className === 'submit__create') {
    button.addEventListener('click', createList);
  } else if (button.className === 'lists__delete') {
    button.addEventListener('click', deleteList);
  }
});

// 2. todolist array 생성 (최대 5개)
let todoList = [];
const listLength = todoList.length;

// 3. create list
function createList() {
  if (listLength === 5) {
    alert('최대 5개까지 입력할 수 있어요!');
  } else {
    const input = document.getElementById('write');
    todoList.push(input.value);
  }
  console.log('create!');
}

// 4. todolist array에 있는 리스트가 목록에 반영
let inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  if (input.className === 'lists__todo') {
    input.value = todoList;
  } else if (input.type === 'checkbox') {
    // changeCheck();
    console.log('changeCheck!');
  }
});

function writeList(index) {
  value = todoList[index];
}

// function changeCheck(index) {
//   input.value = '';
//   todoList.pop();
// }

// 5. delete list
function deleteList() {
  console.log('delete!');
}
