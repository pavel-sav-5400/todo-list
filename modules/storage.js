

const setStorage = task => {
  localStorage.setItem('tasks', JSON.stringify(task));
};
const getStorage = () => (localStorage.getItem('tasks') ?
    JSON.parse(localStorage.getItem('tasks')) : []);

const removeStorage = id => {
  const data = getStorage('tasks');
  const newData = data.filter(item => item.id !== id);
  setStorage(newData);
};
const addTaskData = (task) => {
  const data = getStorage();
  data.push(task);
  setStorage(data);
  console.log(data);
};
export {removeStorage, addTaskData, getStorage};
