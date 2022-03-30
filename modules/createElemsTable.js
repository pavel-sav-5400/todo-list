import {appContainer} from './createElemsForm.js';

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

const createRow = () => {
  const tr = document.createElement('tr');
  tr.classList.add('table-light');
  const tdNum = document.createElement('td');
  tdNum.classList.add('number');
  tdNum.textContent = '';

  const tdTask = document.createElement('td');
  tdTask.classList.add('task');
  tdTask.textContent = '';

  const tdStatus = document.createElement('td');
  tdStatus.classList.add('status');
  tdStatus.textContent = 'В процессе';

  const tdAction = document.createElement('td');
  tdAction.classList.add('action');

  const btnDel = document.createElement('button');
  btnDel.classList.add('btn', 'btn-danger');
  btnDel.textContent = 'Удалить';

  const btnEnd = document.createElement('button');
  btnEnd.classList.add('btn', 'btn-success');
  btnEnd.textContent = 'Завершить';
  tdAction.append(btnDel, btnEnd);

  tr.append(tdNum, tdTask, tdStatus, tdAction);
  return tr;
};

const createTbody = () => {
  const tbody = document.createElement('tbody');
  tbody.append(createRow());
  table.append(tbody);
  return tbody;
};

export {
  createMain,
  createTable,
  createTheader,
  createTbody,
  createRow,
};
