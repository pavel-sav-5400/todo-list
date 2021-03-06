import {getStorage, addTaskData, removeStorage} from './storage.js';
import {createRow} from './createElemsTable.js';

const form = document.querySelector('form');
const table = document.querySelector('table');

// добавление дела

const formSave = form.addEventListener('submit', (e) => {
  const data = getStorage();

  e.preventDefault();
  const formData = new FormData(e.target);

  const newTask = Object.fromEntries(formData);
  newTask.task = document.querySelector('.form-control').value;
  newTask.id = data.length + 1;
  newTask.ready = false;

  if (newTask.task === '') {
    alert('Поле ввода пустое, введите значение!');
  } else {
    addTaskData(newTask);
    createRow(newTask);
    form.reset();
  }
},
);

// очиска формы

const formClear = form.addEventListener('click', (e) => {
  if (e.target.closest('.btn-warning')) {
    form.reset();
  }
});

// удаление дела

const delList = table.addEventListener('click', (e) => {
  const dataID = e.target.closest('tr').id;
  if (e.target.closest('.btn-danger')) {
    e.target.closest('tr').remove();
    removeStorage(+dataID);
  }
});

// статус задания

const complete = table.addEventListener('click', (e) => {
  const status = e.target.closest('tr').querySelector('.status');
  const task = e.target.closest('tr').querySelector('.task');
  const tr = e.target.closest('tr');
  if (e.target.closest('.btn-success')) {
    tr.classList.toggle('table-success');
    tr.classList.toggle('table-light');
    task.classList.toggle('text-decoration-line-through');
    if (task.classList.contains('text-decoration-line-through')) {
      status.innerHTML = 'Завершено';
    } else {
      status.innerHTML = 'В процессе';
    }
  }
});

export {
  formSave,
  formClear,
  delList,
  complete,
};
