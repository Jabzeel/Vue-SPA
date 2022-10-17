import { createStore } from 'vuex'
import questions from '@/data/questions'
import scores from '@/data/scores'

export default createStore({
  state: {
    count: 0,
    userScore: 0,
    questionListSorted: questions.sort(() => Math.random() - 0.5),
    optionSelected: null,
    userAnswers: [],
    scoreList: scores
  },
  getters: {
  },
  mutations: {
    INCREASE_COUNT (state) {
      state.count++
    },
    DECREMENT_COUNT (state) {
      state.count--
    },
    INCREASE_SCORE (state) {
      state.userScore++
    },
    DECREMENT_SCORE (state) {
      state.userScore--
    },
    UPDATE_OPTIONSELECTED (state, payload) {
      state.optionSelected = payload
    },
    UPDATE_USERANSWERS (state, payload) {
      state.userAnswers = payload
    },
    UPDATE_SCORES (state, payload) {
      state.scoreList = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
