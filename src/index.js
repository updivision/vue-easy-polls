import Poll from './Poll';

export default {
  install: (Vue, options) => {
    Vue.component('vue2-poll', Poll);
  }
};