<template>
  <AppHeader/>
  <app-background>
    <div class="container">
      <div class="row align-items-center quiz-row">
        <div class="col-12 mt-5">
          <div class="card text-center quiz-card">
            <div class="card-body quiz-card-body">
              <div class="row">
                <div class="col-12 text-start pt-3 text-white">
                  <app-question/>
                </div>
              </div>
              <div class="row justify-content-center mt-5 mb-4">
                <div class="col-lg-3 col-sm-6 col-12 d-grid btn-back">
                  <button v-if="count > 0 && count < 5" class="btn btn-quiz" @click="onBack()"> Back </button>
                </div>
                <div v-if="count < 4" class="offset-lg-6 col-lg-3 col-sm-6 col-12 d-grid">
                  <button class="btn btn-quiz" @click="onNext(questionList[count].question, optionSelected)"> Next </button>
                </div>
                <div v-else class="offset-lg-6 col-lg-3 col-sm-6 col-12 d-grid">
                  <router-link
                    to="/final-score"
                    id="submitButton"
                    class="btn btn-quiz"
                    @click="onNext(questionList[count].question, optionSelected)">
                      Submit
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-background>
</template>

<script>
import AppBackground from '@/components/AppBackground.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppQuestion from '@/components/AppQuestion.vue'
import { computed } from 'vue'
import store from '@/store/index'

export default {
  components: {
    AppHeader,
    AppBackground,
    AppQuestion
  },
  data () {
    return {
      userAnswers: [],
      answeredQuestion: ''
    }
  },
  computed: {
    optionSelected: {
      get () {
        return store.state.optionSelected
      },
      set (value) {
        store.commit('UPDATE_OPTIONSELECTED', value)
      }
    }
  },
  setup () {
    const count = computed(() => store.state.count)
    const userScore = computed(() => store.state.userScore)
    const scoreList = computed(() => store.state.scoreList)
    const questionList = computed(() => store.state.questionListSorted)

    return {
      scoreList,
      questionList,
      count,
      userScore,
      incrementCount: () => store.commit('INCREASE_COUNT'),
      decrementCount: () => store.commit('DECREMENT_COUNT'),
      incrementScore: () => store.commit('INCREASE_SCORE'),
      decrementScore: () => store.commit('DECREMENT_SCORE')
    }
  },
  methods: {
    onNext (question, opSelected) {
      const userName = 'You'
      const score = this.userScore
      const submitButton = document.getElementById('submitButton')
      let answerEvaluation = ''

      this.incrementCount()

      this.answeredQuestion = this.questionList.filter(e => {
        if (e.question === question) {
          if (e.answer === opSelected) {
            this.incrementScore()
            answerEvaluation = 'Right'
          } else if (opSelected === null) {
            answerEvaluation = 'Skipped'
          } else {
            answerEvaluation = 'Wrong'
          }
        }
        return e.question
      })

      this.userAnswers.push({ question, opSelected, answerEvaluation })
      store.commit('UPDATE_USERANSWERS', this.userAnswers)

      this.optionSelected = null

      if (submitButton !== null) {
        this.scoreList.push({ username: userName, score: score })
        store.commit('UPDATE_SCORES', this.scoreList)
      }
    },
    onBack () {
      this.decrementCount()
      const lastAnswer = this.userAnswers.pop()

      this.answeredQuestion = this.questionList.filter(e => {
        if (e.question === lastAnswer.question) {
          if (e.answer === lastAnswer.opSelected) {
            this.decrementScore()
          }
        }
        return e.question
      })

      store.commit('UPDATE_USERANSWERS', this.userAnswers)

      this.optionSelected = null
    }

  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap');

.quiz-row {
  height: 100vh;
}

.quiz-card {
    background-color: #d58298;
    opacity: 90%;
  }

.quiz-card-body {
  font-family: 'Oswald', sans-serif;

  .row {
    padding: 0;
    margin: 0;
  }
}

.btn-quiz {
  background-color: #b14773;
  color: white;
}

.btn-quiz:hover {
  background-color: #043562;
  color: white;
}

@media only screen and (max-width: 575px) {
  .btn-back {
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 992px) {
  .bg-text-centered {
    font-size: 20px;

    h1 {
      font-size: 140px;
    }

    button {
      font-size: 22px;
    }
  }
}
</style>
