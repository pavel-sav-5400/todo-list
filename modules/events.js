import {createRow} from './createElemsTable.js';
const form = document.querySelector('form');
const table = document.querySelector('table');

const formInput = form.addEventListener('click', (e) => {
  if (e.target.closest('.form-group')) {
    console.log();
  }
});
const setStorage = contact => {
  localStorage.setItem('contacts', JSON.stringify(contact));
  console.log('storage');
};
const getStorage = () => (localStorage.getItem('contacts') ?
  JSON.parse(localStorage.getItem('contacts')) : []);

const addContactData = (contact) => {
  const data = getStorage();
  data.push(contact);
  setStorage(data);
  console.log(data);
};

const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

// eslint-disable-next-line require-jsdoc
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const formSave = form.addEventListener('submit', (e) => {
  e.preventDefault();
  const num = getRandomIntInclusive(100000, 999999);
  const inputVal = document.querySelector('.form-control').value;
  const formData = new FormData(e.target);

  const newContact = Object.fromEntries(formData);
  newContact.id = num;
  newContact.task = inputVal;
  console.log('newContact: ', newContact);

  addContactData(newContact);
  addContactPage(newContact, table);
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
    alert('удалить');
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
  formInput,
  formSave,
  formClear,
  delList,
  complete,
};
