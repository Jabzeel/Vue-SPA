<template>
  <AppHeader />
  <app-background>
    <div class="container">
      <div class="row justify-content-center score-row">
        <div class="col-12">
          <div class="card text-center score-card">
            <div class="card-body">
              <h1 class="text-uppercase pt-4 pb-3"> Congratulations, You Passed! </h1>
              <h2 class="pb-4"> Here your score: {{ userScore }} / 5 </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-6">
          <div class="card text-center ">
            <div class="card-body">
              <PieChart />
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card text-center ">
            <div class="card-body">
              <h1 class="text-uppercase pt-4 pb-3"> You Passed! </h1>
              <h2 class="pb-4"> Here your score: {{ userScore }} / 5 </h2>
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
import { computed } from 'vue'
import store from '@/store/index'

export default {
  components: {
    AppHeader,
    AppBackground,
    PieChart
  },
  setup () {
    const userScore = computed(() => store.state.userScore)

    return { userScore }
  }
}
</script>

<style lang="scss">
.score-row {
  padding-top: 100px;
}

.score-content {
  position: absolute;
  top: -200px;

  .row {
    padding: 0;
    margin: 0;
  }

}
</style>
