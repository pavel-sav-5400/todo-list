import {appContainer} from './createElemsForm.js';
import {getStorage} from './storage.js';

const data = getStorage();

const createMain = () => {
  const container = document.createElement('div');
  container.classList.add('table-wrapper');
  appContainer.append(container);
  return container;
};

const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');
  const container = createMain();
  container.append(table);
  return table;
};

const table = createTable();

const createTheader = () => {
  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
      <tr>
        <th>№</th>
        <th>Задача</th>
        <th>Статус</th>
        <th>Действия</th>
        </tr>
      `);
  table.append(thead);
  return thead;
};

const createTbody = () => {
  const tbody = document.createElement('tbody');
  table.append(tbody);
  return tbody;
};

const tbody = createTbody();

const createRow = task => {
  const row = `
            <td class="number">${task.id}</td>
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
  `;
  const tr = document.createElement('tr');
  tr.classList.add('table-light');
  tr.setAttribute('id', task.id);
  tr.innerHTML = row;
  tbody.append(tr);
};


const renderTasks = data => data.map(createRow);
renderTasks(data);

export {
  createMain,
  createTable,
  createTheader,
  createTbody,
  createRow,
  renderTasks,
};
