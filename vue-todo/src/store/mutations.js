

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.content);
  state.todoItems.splice(payload.index, 1);
};

const completeOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  const ltKey = localStorage.key(payload.index);
  const createJsonStr = JSON.stringify(payload.todoItem);
  localStorage.setItem(ltKey, createJsonStr);
};

const clearAllItems = (state) => {
  state.todoItems = [];
  localStorage.clear();
};

export { removeOneItem, completeOneItem, clearAllItems };
