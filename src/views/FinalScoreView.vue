<template>
  <AppHeader />
  <app-background>
    <div class="container">
      <div class="row justify-content-center score-row">
        <div class="col-12">
          <div class="card text-center">
            <div class="card-body">
              <h1 v-if="finalScore < 60" class="text-uppercase pt-2 pb-1"> Sorry, You Fail the Test </h1>
              <h1 v-else class="text-uppercase pt-2 pb-1"> Congratulations, You Passed! </h1>
              <h2 class="pb-2"> Here your score: {{ userScore }} / 5 </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-5">
          <div class="card text-center ">
            <div class="card-body">
              <PieChart />
            </div>
          </div>
        </div>
        <div class="col-7">
          <div class="card text-center ">
            <div class="card-body">
              <XYChart/>
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
import PieChart from '@/components/PieChart.vue'
import XYChart from '@/components/XYChart.vue'
import { computed } from 'vue'
import store from '@/store/index'

export default {
  components: {
    AppHeader,
    AppBackground,
    PieChart,
    XYChart
  },
  data () {
    const finalScore = (this.userScore / this.questionList.length) * 100

    return { finalScore }
  },
  setup () {
    const userScore = computed(() => store.state.userScore)
    const questionList = computed(() => store.state.questionListSorted)

    return { userScore, questionList }
  }
  // mounted () {
  //   const finalScore = (this.userScore / this.questionList.length) * 100
  // }
}
</script>

<style lang="scss">
.score-row {
  padding-top: 75px;
}
</style>
