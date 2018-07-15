import Poll from './Poll.vue';

export default {
  install: (Vue, options) => {
    Vue.component('vue2-poll', Poll);
  }
};