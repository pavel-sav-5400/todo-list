const appContainer = document.querySelector('.app-container');
appContainer.classList.add('vh-100', 'w-100', 'd-flex',
    'align-items-center', 'justify-content-center', 'flex-column');

const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  appContainer.append(form);
  return form;
};
const form = createForm();

const createLabel = () => {
  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');
  form.append(label);
  return label;
};

const createInput = () => {
  const input = document.createElement('input');
  input.classList.add('form-control');
  input.placeholder = 'Введите текст';
  input.type = 'text';
  const label = createLabel();
  label.append(input);
  return input;
};

const createButtonsForm = () => {
  const btnSave = document.createElement('button');
  btnSave.classList.add('btn', 'btn-primary', 'me-3');
  btnSave.type = 'submit';
  btnSave.textContent = 'Сохранить';
  const btnClear = document.createElement('button');
  btnClear.classList.add('btn', 'btn-warning');
  btnClear.type = 'reset';
  btnClear.textContent = 'Очистить';
  form.append(btnSave, btnClear);
  return {btnSave, btnClear};
};
export {
  appContainer,
  createForm,
  createLabel,
  createInput,
  createButtonsForm,
};
