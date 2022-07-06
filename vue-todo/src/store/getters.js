const storedTodoItem = (state) => {
  return state.todoItems;
};

const originalPrice = (state) => {
  return state.price;
};

const doublePrice = (state) => {
  return state.price * 2;
};

const triplePrice = (state) => {
  return state.price * 3;
};

export { storedTodoItem, originalPrice, doublePrice, triplePrice };
