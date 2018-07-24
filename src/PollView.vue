<template>
    <div class="poll-view">
        <div class="poll-view__title" v-html="poll.question"></div>
        <div v-if="!result" class="poll-view__inner">
            <div class="poll-view__help">
                <span v-if="poll.multipleVotes">Choose many answers:</span>
                <span v-else>Choose one answer:</span>
            </div>
            <div class="poll-view__votes">
                <div v-for="(answer, index) in poll.answers" :key="answer.id" class="answer">
                    <label class="checkbox">{{ answer.answer }}
                        <input type="checkbox" v-model="poll.answers[index].voted" @change="multipleCheck(index)">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="poll-view__submit">
                <button @click="vote">Vote</button>
            </div>
            <div class="poll-view__info" :class="{'success' : success === true, 'error' : success === false}" v-if="success !== null">
                <div v-if="success === true">Voted</div>
                <div v-if="success === false">Error</div>
            </div>
        </div>
        <div v-if="result" class="poll-view__results">
            <div class="result" v-for="(answer, index) in this.poll.answers" :key="index">
                <div class="title">
                    {{ answer.answer }}
                    <span class="percent">{{ calculatePercent(answer.votes)}}% </span>
                    <span class="votes">({{ answer.votes }} votes)</span>
                </div>
                <div class="bar">
                    <div :style="{width: calculatePercent(answer.votes) + '%'}"></div>
                </div>
            </div>
        </div>
        <div v-if="demo" class="poll-view__footer">
            Made with &hearts; by
            <a href="https://updivision.com/">updivision.com</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "poll-view",
    props: {
        saveVoteUrl: {
            type: String
        },
        getPollUrl: {
            type: String
        },
        demo: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            poll: {
                id: 1,
                question: "What is your favourite <strong>PHP</strong> framework?",
                answers: [
                    {id: 1, answer: "Laravel", votes: 14021},
                    {id: 2, answer: "Symfony", votes: 3210},
                    {id: 3, answer: "Phalcon", votes: 3231},
                    {id: 4, answer: "FuelPhp", votes: 2004},
                    {id: 5, answer: "Zend Framework", votes: 3132},
                    {id: 6, answer: "PHPixie", votes: 2131},
                    {id: 7, answer: "CakePHP", votes: 1222}
                ],
                multipleVotes: true
            },
            totalVotes: 0,
            result: false,
            success: null,
            isValid: false
        };
    },
    mounted() {
        axios.get(this.getPollUrl)
        .then((response) => {
            this.poll = response
        })
        .catch((error) => {
            console.log(error)
        })
    },
    methods: {
        vote() {
            this.validate()
            // demo only ------
            if (this.demo && this.isValid) {
                this.alert(true)
                this.calculateTotalVotes();
            } else {
            // --------------
                if (this.isValid) {
                    axios.post(this.saveVoteUrl, {
                        pollId: this.poll.id,
                        votes: votes
                    })
                    .then((response) => {

                        this.calculateTotalVotes()
                        this.alert(true)
                    })
                    .catch((error) => {
                        this.alert(false)
                    });
                } else {
                    this.alert(false)
                }
            }
        },
        multipleCheck(index) {
            if (this.poll.multipleVotes == true) {
                return
            } else {
                const nrOfVotes = this.poll.answers.filter(ans => ans.voted == true).length
                if (nrOfVotes > 1) {
                    this.poll.answers[index].voted = false;
                }
            }
        },
        validate() {
            const votes = this.poll.answers.filter(answer => answer.voted == true).map(answer => answer.id).length
            if (votes > 0) {
                if (votes > 1) {
                    if (this.poll.multipleVotes == true) {
                        this.isValid = true
                    } else {
                        this.isValid = false;
                    }
                } else {
                    this.isValid = true
                }
            } else {
                this.isValid = false
            }
        },
        alert(success) {
            this.success = success
            setTimeout(() => {
                this.success = null
                this.result = success
            }, 1500)
        },
        calculatePercent(votes) {
            return parseInt(10000 * votes / this.totalVotes) / 100;
        },
        calculateTotalVotes() {
            this.poll.answers.forEach((answer) => {
                this.totalVotes += answer.votes
                if (answer.voted) {
                    this.totalVotes += 1
                }
            })
        }
    }
};
</script>

<style>
    @import "./assets/vue-easy-polls.scss";
</style>
