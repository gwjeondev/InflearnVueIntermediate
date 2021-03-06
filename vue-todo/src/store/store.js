import Vue from 'vue';
import Vuex from 'vuex';
// import * as getters from './getters'
// import * as mutations from './mutations'
// import { addOneItem } from './addOneItem'
import todoApp from './modules/todoApp'

//vue plugin 사용 부분 vue.use란 vue 전역에서, vue를 사용하는 모든 영역에 사용할 라이브러리등을 명세
Vue.use(Vuex);
//어떠한 컴포넌트에서 this.$store로 접근 가능

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
})
// const storage = {
//   fetch() {
//     const arr = [];
//     const ltLength = localStorage.length;

//     if (ltLength > 0) {
//       for (let i = 0; i < ltLength; i++) {
//         const ltKey = localStorage.key(i);
//         const ltValue = localStorage.getItem(ltKey);
//         const parseJsonObj = JSON.parse(ltValue);
//         arr.push(parseJsonObj);
//       }
//     }

//     return arr;
//   }
// };

// export const store = new Vuex.Store({
//   state: {
//     todoItems: storage.fetch(),
//     price: 100
//   },
//   getters,
//   mutations: {
//     addOneItem,
//     ...mutations
//   }
// });
