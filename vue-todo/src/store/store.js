import Vue from 'vue';
import Vuex from 'vuex';

//vue plugin 사용 부분 vue.use란 vue 전역에서, vue를 사용하는 모든 영역에 사용할 라이브러리등을 명세
Vue.use(Vuex);
//어떠한 컴포넌트에서 this.$store로 접근 가능

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

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
    price: 100
  },
  getters: {
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
  },
  mutations: {
    addOneItem(state, item) {
      const todoItem = {
        completed: false,
        content: item
      };
      const createJsonStr = JSON.stringify(todoItem);
      localStorage.setItem(todoItem.content, createJsonStr);
      state.todoItems.push(todoItem);
    },
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
    }
  }
});
