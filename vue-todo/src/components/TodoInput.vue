<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <alert-model v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <!-- <tag slot="element"></tag>는, alert-modal Component에 <slot name="element"></slot> 안의 내용과 치환된다. -->
      <h3 slot="header">
        INFO
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <span slot="body">Enter content in Todo</span>
      <span slot="footer">Copyright Vue.js gwjeondev</span>
    </alert-model>
  </div>
</template>

<script>
import AlertModel from './common/AlertModal.vue';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem) {
        //this.$emit('addTodoItem', this.newTodoItem);
        //this.$store.commit('addOneItem', this.newTodoItem);
        this.addOneItem(this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
    ...mapMutations(['addOneItem'])
  },
  components: {
    AlertModel
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #a10035;
  cursor: pointer;
}
</style>
