# Vue2-poll

> A Vuejs component for voting. Create polls -> Vote.

### Demo
See live demo [here]().

## Prerequisites
- [Vue.js 2](https://vuejs.org/)

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
        <vue-poll v-bind="options" @addvote="addVote"/>
    </div>
</template>

<script> 
    
    import Vue2Poll from 'vue2-poll'
    
    export default {        
        data() {
            return {
                poll: {
                    question: "What is your favourite <strong>PHP</strong> framework?",
                    answers: [
                        {id: 1, answer: "Laravel", votes: 34021, voted: false},
                        {id: 2, answer: "Symfony", votes: 3210, voted: false},
                        {id: 3, answer: "Phalcon", votes: 321, voted: false},
                        {id: 4, answer: "FuelPhp", votes: 200, voted: false},
                        {id: 5, answer: "Zend Framework", votes: 31, voted: false},
                        {id: 6, answer: "PHPixie", votes: 21, voted: false},
                        {id: 7, answer: "CakePHP", votes: 12, voted: false}
                    ],
                    options: {
                        multipleVotes: false   
                    }
                }
            }
        },
        components: {
            Vue2Poll
        }
    }
</script>
```

### Example (CDN)

```html
<body>
    <div id="app">
        <vue2-poll/>
    </div>

    <script src="something"></script>
    <script> 

        Vue.use(Vue2Poll);

        new Vue({
            el: '#app'
            data: function() {
                return {
                    poll: {
                        question: "What is your favourite <strong>PHP</strong> framework?",
                        answers: [
                            {id: 1, answer: "Laravel", votes: 34021, voted: false},
                            {id: 2, answer: "Symfony", votes: 3210, voted: false},
                            {id: 3, answer: "Phalcon", votes: 321, voted: false},
                            {id: 4, answer: "FuelPhp", votes: 200, voted: false},
                            {id: 5, answer: "Zend Framework", votes: 31, voted: false},
                            {id: 6, answer: "PHPixie", votes: 21, voted: false},
                            {id: 7, answer: "CakePHP", votes: 12, voted: false}
                        ],
                        options: {
                            multipleVotes: false   
                        }
                    }
                }
            },
            methods: {
            }
        });
    </script>
</body>
```

### Props
#### PollCreate.vue

| Attribute | Description | Accepted values | Required | Default |
| --------- | ----------- | --------------- | -------- | ------- |
| savePollUrl | This is the endpoint where your server will save the current poll | URL (string) | required | - |

#### PollView.vue

| Attribute | Description | Accepted values | Required | Default |
| --------- | ----------- | --------------- | -------- | ------- |
| saveVoteUrl | This is the endpoint where your server will save the vote for the current poll | URL (string) | required | - |
| getPollUrl | This is the endpoint from where your server will return the poll | URL (string) | required | - |


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

