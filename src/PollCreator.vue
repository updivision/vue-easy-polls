<template>
    <div class="poll-view">
        <div class="poll-view__title">
            New poll
        </div>
        <div class="poll-view__inner">
            <div class="poll-view__question">
                <input v-model="poll.question" type="text" placeholder="Your Question...">
            </div>
            <div class="poll-view__answers">
                <div v-for="(answer, index) in poll.answers" :key="index" class="answer" :style="{zIndex: poll.answers.length - index}">
                    <input :placeholder="'Answer ' + (index + 1)" @focus="createNewInput(index)" v-model="poll.answers[index].answer" type="text">
                    <span class="delete" @click="deleteInput(index)">delete</span>
                </div>
            </div>
        </div>
        <div class="poll-view__options">
            <label class="checkbox">Allow multiple votes
                <input v-model="poll.multipleVotes" type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="poll-view__submit">
            <button @click="createPoll">Create</button>
        </div>
        <div class="poll-view__info" :class="{'success' : success === true, 'error' : success === false}" v-if="success !== null">
            <div v-if="success === true">Created</div>
            <div v-if="success === false">Error</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "poll-creator",
    props: {
        savePollUrl: {
            type: String
        },
        dev: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            poll: {
                question: "How old are you?",
                answers: [
                    { answer: "10-20" },
                    { answer: "21-30" },
                    { answer: "31-40" },
                    { answer: "" }
                ],
                multipleVotes: false
            },
            isValid: false,
            success: null
        };
    },
    mounted () {
        if (this.poll.answers.length == 0) {
            this.poll.answers.push({answer: ""})
        }
    },
    methods: {
        createNewInput(index) {
            if (this.poll.answers.length - 1 == index) {
                this.poll.answers.push({ answer: "" });
            }
        },
        deleteInput(index) {
            if (index > 0 || this.poll.answers.length > 1) {
                this.poll.answers.splice(index, 1);
            }
        },
        createPoll() {
            this.validate();

            // Develop only -----TO REMOVE--------------
            if (this.dev && this.isValid) {
                this.alert(true)
                setTimeout(() => {this.resetPoll()}, 1500)
            // --------------------------------
            } else if (this.dev && !this.isValid) {
                this.alert(false)
                setTimeout(() => {this.resetPoll()}, 1500)
            } else {
                if (this.isValid) {
                    axios.post(this.savePollUrl, {
                        poll: this.poll
                    })
                    .then((response) => {
                        this.alert(true)
                        setTimeout(() => {this.resetPoll()}, 1500)
                    })
                    .catch((error) => {
                        this.alert(false)
                    });
                } else {
                    this.alert(false)
                }
            }
        },
        resetPoll() {
            this.poll.multipleVotes = false;
            this.poll.answers = [];
            this.poll.answers.push({answer: ""})
            this.poll.answers.push({answer: ""})
            this.poll.answers.push({answer: ""})
            this.poll.answers.push({answer: ""})
            this.poll.question = ""
            this.isValid = false
        },
        validate () {
            this.poll.answers = this.poll.answers.filter((answer) => {
                if (answer.answer.length > 0) {
                    return answer;
                }
            });
            var count = this.poll.answers.length
            if (count > 1) {
                this.isValid = true;
            } else  {
                this.isValid = false;
            }
        },
        alert(success) {
            this.success = success
            setTimeout(() => {this.success = null}, 3000)
        }
    }
};
</script>

<style lang="scss">
@import "./poll.scss";
</style>
