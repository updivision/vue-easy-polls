import Poll from './Poll.vue';
import PollCreator from './PollCreator.vue'

export default {
  install: (Vue, options) => {
    Vue.component('poll', Poll);
    Vue.component('poll-creator', PollCreator);
  }
};