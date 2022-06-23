<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:removeTodo="deleteTodo" v-on:completed="completeTodo"></todo-list>
    <todo-footer></todo-footer>
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
    deleteTodo(todoItem, index) {
      localStorage.removeItem(todoItem.content);
      this.todoItems.splice(index, 1);
    },
    completeTodo(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      const ltKey = localStorage.key(index);
      const createJsonStr = JSON.stringify(todoItem);
      localStorage.setItem(ltKey, createJsonStr);
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