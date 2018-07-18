import PollView from './PollView.vue';
import PollCreator from './PollCreator.vue'

module.exports = {
  install: function (Vue, options) {
    Vue.component('poll-view', PollView);
    Vue.component('poll-creator', PollCreator);
  }
};