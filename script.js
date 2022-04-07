import {renderTodoList} from './modules/render.js';
import {
  formSave,
  formClear,
  delList,
  complete} from './modules/events.js';

const init = () => {
  const render = renderTodoList();
  return {
    render,
    formSave,
    formClear,
    delList,
    complete};
};
init();
