<template>
  <app-background>
    <div class="bg-text-centered text-white text-uppercase">
      <h1>Welcome</h1>
      <p>Start your quiz to be one of the top scored users</p>
      <router-link to="/quiz">
        <button class="btn btn-outline-light">
          Start Quiz
        </button>
      </router-link>
    </div>
  </app-background>

  <!-- <div class="wrapper">
    <router-link :to="{ name: 'AirportDetail', params: { code: airport.abbreviation} }" v-for="airport in airports" :key="airport.abbreviation" class="airport">
      <p>{{ airport.abbreviation }}</p>
      <p>{{ airport.name }}</p>
      <p>{{ airport.city }}, {{ airport.state }}</p>
    </router-link>
  </div> -->
</template>

<script lang="ts">
import { ref } from 'vue'
import allAirports from '@/data/scores'
import AppBackground from '@/components/AppBackground.vue'

export default {
  components: {
    AppBackground
  },
  setup () {
    const airports = ref(allAirports)
    return { airports }
  }
}
</script>

<style lang="scss">
.front-img {
  height: 100vh;
  object-fit: cover;
}

.bg-text-centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;

  h1 {
    font-size: 140px;
    font-weight: bold;
  }

  button {
    font-size: 18px;
  }
}
</style>
