
const setStorage = task =>
  localStorage.setItem('tasks', JSON.stringify(task));

const getStorage = () => (localStorage.getItem('tasks') ?
    JSON.parse(localStorage.getItem('tasks')) : []);

const removeStorage = id => {
  const data = getStorage('tasks');
  const newData = data.filter(item => item.id !== id);
  newData.forEach((item, index) => {
    item.id = index + 1;
  });
  setStorage(newData);
  getStorage();
};

const addTaskData = task => {
  const data = getStorage();
  data.push(task);
  setStorage(data);
};
export {removeStorage, addTaskData, getStorage, setStorage};
