<template>
  <AppHeader />
  <app-background>
    <div class="container score-container">
      <div class="row justify-content-center score-row">
        <div class="col-12">
          <div class="card text-center">
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <h1 v-if="finalScore < 60" class="text-uppercase pt-2 pb-1"> Oh no!<br/>You Fail the Test </h1>
                  <h1 v-else class="text-uppercase pt-2 pb-1"> Congratulations!<br/>You Passed </h1>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h2 class="pb-2"> Here your score: <span style="color: #043562">{{ userScore }}</span> / 5 </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4 pb-5">
        <div class="col-12 col-lg-4 col-xl-5">
          <div class="card text-center ">
            <div class="card-body">
              <PieChart />
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 col-xl-7 xt-chart-col">
          <div class="card text-center">
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap');

.score-container {
  font-family: 'Oswald', sans-serif;

  .score-row {
    padding-top: 75px;
  }

  h2 {
    color: #b14773;
  }

  .xt-chart-col{
    margin-top: 15px;
  }
}

@media only screen and (max-width: 575px) {
  .score-container {
    font-family: 'Oswald', sans-serif;

    .score-row {
      padding-top: 75px;
    }

    h1 {
      font-size: 30px;
    }

    h2 {
      color: #b14773;
    }
  }
}

@media only screen and (min-width: 992px) {
  .score-container {
    h1 {
      font-size: 40px;
    }

    .xt-chart-col{
      margin-top: 0;
    }
  }
}
</style>
