const storage = {
  fetch() {
    const arr = [];
    const ltLength = localStorage.length;

    if (ltLength > 0) {
      for (let i = 0; i < ltLength; i++) {
        const ltKey = localStorage.key(i);
        const ltValue = localStorage.getItem(ltKey);
        const parseJsonObj = JSON.parse(ltValue);
        arr.push(parseJsonObj);
      }
    }

    return arr;
  }
};

const state = {
  todoItems: storage.fetch(),
  price: 100
};

const getters = {
  storedTodoItem(state) {
    return state.todoItems;
  },
  originalPrice(state) {
    return state.price;
  },
  doublePrice(state) {
    return state.price * 2;
  },
  triplePrice(state) {
    return state.price * 3;
  }
};

const mutations = {
  removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem.content);
    state.todoItems.splice(payload.index, 1);
  },

  completeOneItem(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    const ltKey = localStorage.key(payload.index);
    const createJsonStr = JSON.stringify(payload.todoItem);
    localStorage.setItem(ltKey, createJsonStr);
  },
  clearAllItems(state) {
    state.todoItems = [];
    localStorage.clear();
  },
  addOneItem(state, item) {
    const todoItem = {
      completed: false,
      content: item
    };
    const createJsonStr = JSON.stringify(todoItem);
    localStorage.setItem(todoItem.content, createJsonStr);
    state.todoItems.push(todoItem);
  }
};

const actions = {};

export default { state, mutations, getters, actions };
