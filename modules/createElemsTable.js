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

const createTbody = () => {
  const tbody = document.createElement('tbody');
  table.append(tbody);
  return tbody;
};

export {
  createMain,
  createTable,
  createTheader,
  createTbody,
};
