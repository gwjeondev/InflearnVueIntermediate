<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    // clearTodo() {
    //   //this.$emit('clearTodoItem');
    //   //this.$store.commit('clearAllItems');
    //   //this.clearAllItems();
    // },
    ...mapMutations({ clearTodo: 'clearAllItems' })
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}
.clearAllBtn {
  color: #e20303;
  /* 추가 */
  display: block;
}
</style>