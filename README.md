# Vue2-poll

> A Vuejs component for voting. Create polls -> Vote.

### Demo
See live demo [here](). todo

## Prerequisites
- [Vue.js 2](https://vuejs.org/)
- [Axios](https://github.com/axios/axios)

## Installing

Using npm:

```bash
$ npm install vue2-poll
```

Using cdn:

```html
<!-- TODO -->
<script src="something"></script>
```

### Example (NPM)

Define `vue2-poll` component markup inside your custom component:

```html
<template>
    <div>
        <poll-creator savePollUrl="post-poll-url" />
        <hr>
        <poll-view getPollUrl="get-poll-url" saveVoteUrl="post-save-url"/>
    </div>
</template>

<script> 
    
    import {PollView, PollCreator} from 'vue2-poll'
    
    export default {        
        components: {
            PollView,
            PollCreator
        }
    }
</script>
```

### Example (CDN)

```html
<body>
    <div id="app">
        <poll-creator savePollUrl="post-poll-url" />
        <hr>
        <poll-view getPollUrl="get-poll-url" saveVoteUrl="post-save-url"/>
    </div>
    <!-- Getting Vue2Poll from cdn -->
    <script src="todo"></script>
    
    <script> 

        Vue.use(Vue2Poll);

        new Vue({
            el: '#app'
        });
    </script>
</body>
```

# Props
#### PollCreate.vue

| Attribute | Description | Accepted values | HTTP verb | Required | Default |
| --------- | ----------- | --------------- | --------- | -------- | ------- |
| savePollUrl | This is the endpoint where your server will save the current poll | URL (string) | POST | required | - |

#### PollView.vue

| Attribute | Description | Accepted values | HTTP verb | Required | Default |
| --------- | ----------- | --------------- | --------- | -------- | :-----: |
| saveVoteUrl | This is the endpoint where your server will save the vote for the current poll | URL (string) | POST | required | - |
| getPollUrl | This is the endpoint from where your server will return the poll | URL (string) | GET | required | - |


### LICENSE

---
MIT License

Copyright (c) 2018 Stanciu Gabriel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

