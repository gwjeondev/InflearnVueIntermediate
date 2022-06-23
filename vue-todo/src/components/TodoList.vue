<template>
  <ul>
    <li
      v-for="(todoItem, index) in todoItems"
      v-bind:key="todoItem.content"
      class="shadow"
    >
      {{ todoItem.content }}
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
      todoItems: [],
    };
  },
  created() {
    const ltLength = localStorage.length;
    if (ltLength > 0) {
      for (let i = 0; i < ltLength; i++) {
        const ltKeyName = localStorage.key(i);
        const createJsonStr = JSON.parse(localStorage.getItem(ltKeyName));
        this.todoItems.push(JSON.parse(createJsonStr));
      }
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem.content);
      this.todoItems.splice(index, 1);
    },
  },
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
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
</style>