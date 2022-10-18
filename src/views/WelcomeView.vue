<template>
  <app-background>
    <div class="container">
      <div class="row align-items-center welcome-row">
        <div class="col-12 welcome-message text-white text-uppercase text-center">
          <h1>Welcome</h1>
          <p>Start your quiz to be one of the top scored users</p>
          <router-link to="/quiz">
            <button class="btn btn-outline-light">
              Start Quiz
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </app-background>
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap');

.welcome-row {
  height: 100vh;
}

.welcome-message {
  font-family: 'Oswald', sans-serif;
  font-size: 16px;

  h1 {
    font-size: 140px;
    font-weight: bold;
  }

  button {
    font-size: 18px;
  }
}

@media only screen and (max-width: 600px) {
  .welcome-message {
    font-size: 12px;

    h1 {
      font-size: 70px;
    }

    button {
      font-size: 16px;
    }
  }
}

@media only screen and (min-width: 600px) {
  .welcome-message {
    font-size: 16px;

    h1 {
      font-size: 100px;
    }

    button {
      font-size: 18px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .welcome-message {
    font-size: 18px;

    h1 {
      font-size: 120px;
    }

    button {
      font-size: 20px;
    }
  }
}

@media only screen and (min-width: 992px) {
  .welcome-message {
    font-size: 20px;

    h1 {
      font-size: 140px;
    }

    button {
      font-size: 22px;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .welcome-message {
    font-size: 22px;

    h1 {
      font-size: 160px;
    }

    button {
      font-size: 24px;
    }
  }
}

@media only screen and (min-width: 1600px) {
  .welcome-message {
    font-size: 26px;

    h1 {
      font-size: 190px;
    }

    button {
      font-size: 28px;
    }
  }
}

@media only screen and (min-width: 2150px) {
  .welcome-message {
    font-size: 32px;

    h1 {
      font-size: 220px;
    }

    button {
      font-size: 34px;
    }
  }
}
</style>
