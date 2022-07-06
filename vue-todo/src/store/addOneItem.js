export const addOneItem = (state, item) => {
  const todoItem = {
    completed: false,
    content: item
  };
  const createJsonStr = JSON.stringify(todoItem);
  localStorage.setItem(todoItem.content, createJsonStr);
  state.todoItems.push(todoItem);
};
