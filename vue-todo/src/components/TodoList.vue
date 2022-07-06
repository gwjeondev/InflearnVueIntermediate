<template>
  <!-- tag="ul"이 해당 transition-group을 ul로 변경함 -->
  <!-- name="list"는 css class 이름과 관계 있음. list-xxxx... list-enter-active... -->
  <transition-group name="list" tag="ul">
    <!-- <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.content" class="shadow"> -->
    <li v-for="(todoItem, index) in storedTodoItem" v-bind:key="todoItem.content" class="shadow">
      <!-- todoItem.completed가 true이면 checkBtnCompleted를 class명으로 삽입한다. -->
      <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted: todoItem.completed }" v-on:click="toggleComplete({todoItem, index})"></i>
      <!-- todoItem.completed가 true이면 textCompleted를 class명으로 삽입한다. -->
      <span v-bind:class="{ textCompleted: todoItem.completed }">{{ todoItem.content }}</span>
      <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
        <i class="fas fa-trash-alt"></i>
      </span>
    </li>
  </transition-group>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    // removeTodo(todoItem, index) {
    //   //this.$emit('removeTodoItem', todoItem, index);
    //   // this.$store.commit('removeOneItem', {
    //   //   todoItem,
    //   //   index
    //   // });
    // },
    // toggleComplete(todoItem, index) {
    //   //this.$emit('completeTodoItem', todoItem, index);
    //   // this.$store.commit('completeOneItem', {
    //   //   todoItem,
    //   //   index
    //   // });
    // },
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'completeOneItem'
    })
  },
  computed: {
    ...mapGetters(['storedTodoItem'])
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

/* 리스트 트랜지션 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>