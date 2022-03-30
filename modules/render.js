import {
  appContainer,
  createForm,
  createLabel,
  createInput,
  createButtonsForm,
} from './createElemsForm.js';

import {
  createMain,
  createTable,
  createTheader,
  createTbody} from './createElemsTable.js';

const createTitle = () => {
  const title = document.createElement('h3');
  appContainer.prepend(title);
  title.textContent = ('Todo-List');
  return title;
};

export const renderTodoList = () => {
  const title = createTitle();
  const form = createForm;
  const label = createLabel;
  const input = createInput();
  const buttonForm = createButtonsForm();
  const container = createMain;
  const table = createTable;
  const thead = createTheader();
  const tbody = createTbody();

  return {
    title,
    form,
    label,
    input,
    buttonForm,
    container,
    table,
    thead,
    tbody,
  };
};
