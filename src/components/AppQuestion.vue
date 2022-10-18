<template>
  <div v-if="count < 5">
    <h3>Question {{ count+ 1}}</h3>
    <h4 >
        {{ questionList[count].question }}
    </h4>
    <div v-if="count < 5" class="row" role="group" aria-label="Options">
      <div v-for="(option, i) in questionList[count].options" :key="i" class="col-6 col-sm-3 d-grid mt-3">
        <input
          type="radio"
          class="btn-check"
          :name="'radio-group' + (count + 1)"
          :id="'radio' + (i + 1)"
          :value="option"
          v-model="optionSelected"
        >
        <label
          class="btn btn-outline-light"
          v-bind:for="'radio' + (i + 1)"
        >
          {{ option }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import store from '@/store/index'

export default {
  data () {
    return {
      userAnswers: [],
      buttonText: 'Next',
      answeredQuestion: {}

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
    const questionList = computed(() => store.state.questionListSorted)

    return {
      questionList,
      count,
      incrementCount: () => store.commit('INCREASE_COUNT'),
      decrementCount: () => store.commit('DECREASE_COUNT')
    }
  }
}
</script>
