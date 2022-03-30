import {renderTodoList} from './modules/render.js';
import {
  formInput,
  formSave,
  formClear,
  delList,
  complete} from './modules/events.js';

// const used = prompt('Введите Имя:');

const init = () => {
  const render = renderTodoList();
  return {
    render,
    formInput,
    formSave,
    formClear,
    delList,
    complete};
};
init();
