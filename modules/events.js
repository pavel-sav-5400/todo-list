import {createTbody} from './createElemsTable.js';
import {getStorage, addTaskData, removeStorage} from './storage.js';

const data = getStorage();
const tbody = createTbody();

const form = document.querySelector('form');
const table = document.querySelector('table');


const createRow = (task) => {
  tbody.insertAdjacentHTML('beforebegin', `
  <tr class="table-light">
            <td class="number">${task.num + 1}</td>
            <td class="task">
              ${task.task}
            </td>
            <td class="status">
            В процессе
            </td>
            <td>
              <button class="btn btn-danger">
               Удалить
              </button>
              <button class="btn btn-success">
                Завершить
              </button>
            </td>
          </tr>
  `);
};


const renderTasks = data => data.map(createRow);
renderTasks(data);

const formSave = form.addEventListener('submit', (e) => {
  // eslint-disable-next-line require-jsdoc
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  e.preventDefault();
  const formData = new FormData(e.target);

  const newTask = Object.fromEntries(formData);
  newTask.id = getRandomIntInclusive(100000, 999999);
  newTask.task = document.querySelector('.form-control').value;
  newTask.num = data.length;
  console.log('newTask: ', newTask);

  addTaskData(newTask);
  createRow(newTask);
  form.reset();
},
);

const formClear = form.addEventListener('click', (e) => {
  if (e.target.closest('.btn-warning')) {
    form.reset();
  }
});

const delList = table.addEventListener('click', (e) => {
  if (e.target.closest('.btn-danger')) {
    const dataID = e.target.closest('tr');
    console.log('del: ', dataID);
    // dataID.remove();
    removeStorage();
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
  // formInput,
  formSave,
  formClear,
  delList,
  complete,
};
