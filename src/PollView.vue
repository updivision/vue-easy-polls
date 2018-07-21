<template>
    <div class="poll-view">
        <div class="poll-view__title">
            How old are you?
        </div>
        <div class="poll-view__inner">
            <div class="poll-view__answers">
                <div v-for="(answer, index) in poll.answers" :key="answer.id" class="answer">
                    <label class="w3checkbox">{{ answer.answer }}
                        <input type="checkbox" v-model="poll.answers[index].voted" @change="validate(index)">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="poll-view__vote">
                <button @click="vote">Vote</button>
            </div>
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
                    {id: 1, answer: "10-20", voted: false},
                    {id: 2, answer: "21-30", voted: false},
                    {id: 3, answer: "31-40", voted: false},
                ],
                options: {
                    multipleVotes: false   
                }
            }
        };
    },
    methods: {
        vote() {
            // vote
        },
        validate(index) {
            if (this.poll.options.multipleVotes == true) {
                return
            } else {
                const nrOfVotes = this.poll.answers.filter(ans => ans.voted == true).length
                if (nrOfVotes > 1) {
                    this.poll.answers[index].voted = false;
                }
            }
        }
    }
};
</script>

<style lang="scss">
$primary: #90ee90;
// $primary: #a390ee;

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
    &__answers {
        .answer {
            padding-bottom: 5px;
            display: block;
            position: relative;
            background-color: #fff;
        }
    }
    &__vote {
        text-align: center;
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
</style>
