import PollView from './PollView.vue';
import PollCreator from './PollCreator.vue'

function install(Vue) {
  Vue.component('poll-view', PollView);
  Vue.component('poll-creator', PollCreator);
  window.PollView = PollView
  window.PollCreator = PollCreator
}

// Plugin
const plugin = {
  install
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
