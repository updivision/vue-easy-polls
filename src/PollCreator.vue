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
            <label class="w3checkbox">Allow multiple votes
                <input v-model="poll.options.multipleVotes" type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="poll-view__create">
            <button @click="createPoll">Create</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "poll-view",
    props: {
        previw: {
            type: Boolean,
            default: true
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
                options: {
                    multipleVotes: false
                }
            }
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
                this.poll.answers.push({ answers: "" });
            }
        },
        deleteInput(index) {
            if (index > 0 || this.poll.answers.length > 1) {
                this.poll.answers.splice(index, 1);
            }
        },
        createPoll() {
            
        }
    }
};
</script>

<style lang="scss">
$primary: #90ee90;
// $primary: #a390ee;

@keyframes popup {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes popdown {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
.poll-view {
    font-family: Arial, Helvetica, sans-serif;
    border-top: 6px solid $primary;
    max-width: 500px;
    margin: auto;
    background-color: #fff;
    &__title {
        text-align: center;
        font-size: 32px;
        font-weight: 900;
    }
    &__inner {
        padding: 16px;
    }
    &__question {
        padding-bottom: 15px;
        input {
            box-sizing: border-box;
            background-color: transparent;
            width: 100%;
            color: #333;
            border: 2px solid #4e4c4b8f;
            border-radius: 0px;
            padding: 5px 40px 5px 10px;
            line-height: 30px;
            font-size: 30px;
            transition: border 0.2s ease-in-out;
            &:focus {
                outline: none;
                border: 2px solid #11a545b8;
            }
        }
    }
    &__answers {
        .answer {
            animation-name: popup;
            animation-duration: 1s;
            padding-bottom: 5px;
            display: block;
            position: relative;
            background-color: #fff;
            &.hide {
                animation-name: popdown;
                animation-duration: 1s;
            }
            .delete {
                position: absolute;
                bottom: 10px;
                right: 0;
                background-color: #fff;
                color: #ff0f00;
                font-weight: 500;
                line-height: 14px;
                font-size: 14px;
                &:hover {
                    cursor: pointer;
                }
            }
            input {
                box-sizing: border-box;
                background-color: transparent;
                width: 100%;
                color: #333;
                border: none;
                border-bottom: 1px solid #4e4c4b8f;
                border-radius: 0px;
                padding: 5px 40px 5px 10px;
                line-height: 24px;
                font-size: 24px;
                transition: border 0.2s ease-in-out;
                &:focus {
                    outline: none;
                    border-bottom: 3px solid $primary;
                }
            }
        }
    }
    &__options {
        padding: 16px;
        .w3checkbox {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
            }
            .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: #eee;
                &:after {
                    content: "";
                    position: absolute;
                    display: none;
                    left: 9px;
                    top: 5px;
                    width: 5px;
                    height: 10px;
                    border: solid white;
                    border-width: 0 3px 3px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
            }
            &:hover {
                input ~ .checkmark {
                    background-color: #ccc;
                }
            }
            input:checked ~ .checkmark {
                background-color: $primary;
                &:after {
                    display: block;
                }
            }
        }
    }
    &__create {
        text-align: center;
        padding: 16px;
        button {
            color: #fff;
            background-color: $primary;
            border: 1px solid lighten($primary, 15%);
            padding: 10px 16px;
            font-size: 30px;
            transition: background-color 0.2s ease-in-out;
            &:hover {
                cursor: pointer;
                background-color: darken($primary, 15%);
            }
        }
    }
}
</style>
