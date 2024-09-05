// 1. to-do-list 버튼 기능
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  if (button.className === 'submit__btn') {
    button.addEventListener('click', createList);
  } else if (button.className === 'delete__btn') {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      deleteList(button.value);
    });
  }
});

// 2. 할 일 생성 (최대 5개)
const todoList = [];
let inputs = document.getElementsByClassName('lists__todo');
let checks = document.getElementsByClassName('lists__check');
let deletes = document.getElementsByClassName('delete__btn');

function createList() {
  if (todoList.length > 5) {
    alert('최대 5개까지 입력할 수 있어요!');
  } else {
    const input = document.getElementById('write');
    todoList.push(input.value);
    inputs[todoList.length - 1].value = input.value;
    checks[todoList.length - 1].disabled = false;
    deletes[todoList.length - 1].disabled = false;
    document.getElementById('write').value = '';
  }
  // console.log('create!');
}

// 3. 할 일 삭제
function deleteList(value) {
  let num = value;
  inputs[num].value = '';
  checks[num].disabled = true;
  deletes[num].disabled = true;
  console.log('delete!');
}
