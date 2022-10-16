<template>
  <AppHeader/>
  <app-background>
    <div class="container-sm quiz-container rounded">
      <div class="container quiz-content">
        <div class="row">
          <div class="col-12 text-start pt-3 text-white">
            <app-question/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-12 d-grid">
            <button v-if="count > 0 && count < 5" class="btn btn-outline-light m-3" @click="onBack()"> Back </button>
          </div>
          <div v-if="count < 4" class="col-sm-6 col-12 d-grid">
            <button class="btn btn-outline-light m-3" @click="onNext(questionList[count].question, optionSelected)"> Next </button>
          </div>
          <div v-else class="col-sm-6 col-12 d-grid">
            <router-link to="/final-score">
              <button class="btn btn-outline-light m-3" @click="onNext(questionList[count].question, optionSelected)"> Submit </button>
            </router-link>
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
    const questionList = computed(() => store.state.questionListSorted)

    return {
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
      this.userAnswers.push({ question, opSelected })
      store.commit('UPDATE_USERANSWERS', this.userAnswers)

      this.incrementCount()

      this.answeredQuestion = this.questionList.filter(e => {
        if (e.question === question) {
          if (e.answer === opSelected) {
            this.incrementScore()
          }
        }
        return e.question
      })

      this.optionSelected = null

      // this.buttonText = (this.questionList.length - 1) === this.count ? 'Submit' : 'Next'
      console.log('userScore: ' + this.userScore)
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

      console.log('userScore: ' + this.userScore)
    }

  }
}
</script>

<style lang="scss">
.quiz-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.quiz-container::before{
    content: "";
    background-color: #d58298;
    opacity: 50%;
    position: absolute;
    width: 100%;
    height: 70vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 25px;
  }

.quiz-content {
  position: absolute;
  top: -200px;

  .row{
    padding: 0;
    margin: 0;
  }

}
</style>
