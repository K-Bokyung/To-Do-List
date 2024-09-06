// 1. to-do-list 버튼 기능
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  if (button.className === 'submit__btn') {
    button.addEventListener('click', createList);
  } else if (button.className === 'delete__btn') {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      deleteList(button);
    });
  }
});

// 2. 할 일 생성 (최대 5개)
const todoList = [];
let inputs = document.getElementsByClassName('lists__todo');
let checks = document.getElementsByClassName('lists__check');
let deletes = document.getElementsByClassName('delete__btn');

function createList() {
  const input = document.getElementById('write');
  if (todoList.length > 5) {
    alert('최대 5개까지 입력할 수 있어요!');
  } else if (input.value.length === 0) {
    alert('내용을 입력해주세요!');
  } else {
    todoList.push(input.value);
    inputs[todoList.length - 1].value = input.value;
    checks[todoList.length - 1].disabled = false;
    deletes[todoList.length - 1].disabled = false;
    document.getElementById('write').value = '';
  }
}

// 3. 할 일 삭제
function deleteList(button) {
  let num = button.value;
  todoList.splice(num, 1);

  todoList.forEach((item, index) => {
    console.log(item, index);
    inputs[index].value = item;
    checks[index].checked = checks[index].disabled;
    deletes[index].disabled = deletes[index].disabled;
  });

  inputs[todoList.length].value = '';
  checks[todoList.length].disabled = true;
  deletes[todoList.length].disabled = true;
}
