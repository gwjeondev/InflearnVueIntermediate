import Vue from 'vue';
import Vuex from 'vuex';

//vue plugin 사용 부분 vue.use란 vue 전역에서, vue를 사용하는 모든 영역에 사용할 라이브러리등을 명세
Vue.use(Vuex);
//어떠한 컴포넌트에서 this.$store로 접근 가능

export const store = new Vuex.Store({
  //
});