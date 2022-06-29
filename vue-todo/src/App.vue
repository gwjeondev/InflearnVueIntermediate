<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:removeTodoItem="removeOneItem" v-on:completeTodoItem="completeOneItem"></todo-list>
    <todo-footer v-on:clearTodoItem="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    const ltLength = localStorage.length;
    if (ltLength > 0) {
      for (let i = 0; i < ltLength; i++) {
        const ltKey = localStorage.key(i);
        const ltValue = localStorage.getItem(ltKey);
        const parseJsonObj = JSON.parse(ltValue);
        this.todoItems.push(parseJsonObj);
      }
    }
  },
  methods: {
    addOneItem(item) {
      const todoItem = {
        completed: false,
        content: item
      };
      const createJsonStr = JSON.stringify(todoItem);
      localStorage.setItem(todoItem.content, createJsonStr);
      this.todoItems.push(todoItem);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.content);
      this.todoItems.splice(index, 1);
    },
    completeOneItem(todoItem, index) {
      // todoItem 자체를 App component에서 props로 내렸다가 다시 올라온것이기 때문에, 이것을 그대로 변경해도 기능 동작에는 문제가 없다.
      // 하지만 자식 component에서 event bus를 통하여 올라온 data를 직접 수정하는것은 좋지 않은 패턴이다.
      // todoItem.completed = !todoItem.completed;
      // 자신의 data를 조작하는것이 좋은 패턴이다. 어차피 해당 값은 reactivity로 자식 props에게 내려간다.
      this.todoItems[index].completed = !this.todoItems[index].completed;
      const ltKey = localStorage.key(index);
      const createJsonStr = JSON.stringify(todoItem);
      localStorage.setItem(ltKey, createJsonStr);
    },
    clearAllItems() {
      this.todoItems = [];
      localStorage.clear();
    }
  }
};
</script>

<style>
body {
  background-color: #f6f6f6;
  text-align: center;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>