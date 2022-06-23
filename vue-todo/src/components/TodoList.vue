<template>
  <ul>
    <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.content" class="shadow">
      <!-- todoItem.completed가 true이면 checkBtnCompleted를 class명으로 삽입한다. -->
      <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted: todoItem.completed }" v-on:click="toggleComplete(todoItem, index)"></i>
      <!-- todoItem.completed가 true이면 textCompleted를 class명으로 삽입한다. -->
      <span v-bind:class="{ textCompleted: todoItem.completed }">{{ todoItem.content }}</span>
      <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
        <i class="fas fa-trash-alt"></i>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
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
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem.content);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      const ltKey = localStorage.key(index);
      const createJsonStr = JSON.stringify(todoItem);
      localStorage.setItem(ltKey, createJsonStr);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
  cursor: pointer;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
</style>