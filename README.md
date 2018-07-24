# vue-easy-polls

> A Vue.js component for creating polls, voting and showing results. It’s easy to implement and easy to customize.

### Demo
See live demo [here](todo)

## Prerequisites
- [Vue.js 2](https://vuejs.org/)
- [Axios](https://github.com/axios/axios)

## Installing

Using npm:

```bash
$ npm install vue-easy-polls
```

### Example (NPM)

```vue
<template>
  <div id="app">
    <poll-creator savePollUrl="post-poll-url" />
    <hr>
    <poll-view getPollUrl="get-poll-url" saveVoteUrl="post-save-url"/>
  </div>
</template>

<script>
import {PollView, PollCreator} from 'vue-easy-polls'

export default {
    name: 'app',
    components: {
        PollCreator,
        PollView
    }
}
</script>
```

## Poll Attributes
#### PollCreate.vue

| Attribute | Description | Accepted values | HTTP verb | Required | Default |
| --------- | ----------- | --------------- | --------- | -------- | ------- |
| savePollUrl | This is the endpoint where your server will save the current poll | URL (string) | POST | required | - |

#### PollView.vue

| Attribute | Description | Accepted values | HTTP verb | Required | Default |
| --------- | ----------- | --------------- | --------- | -------- | :-----: |
| saveVoteUrl | This is the endpoint where your server will save the vote for the current poll | URL (string) | POST | required | - |
| getPollUrl | This is the endpoint from where your server will return the poll | URL (string) | GET | required | - |

### Database schema example
![Database schema](https://raw.githubusercontent.com/updivision/vue-easy-poll/master/demo/schema.png "Database schema")

### Screenshots
![vue-easy-polls](https://raw.githubusercontent.com/gabistanciu/vue2-poll/master/demo/schema.png "vue-easy-polls")
![vue-easy-polls](https://raw.githubusercontent.com/gabistanciu/vue2-poll/master/demo/schema.png "vue-easy-polls")
![vue-easy-polls](https://raw.githubusercontent.com/gabistanciu/vue2-poll/master/demo/schema.png "vue-easy-polls")

### LICENSE

---
[MIT License](todo)
