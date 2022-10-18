<template>
  <header class="container-fluid" style="padding: 0;">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">

        <router-link to="/" class="navbar-brand text-white">
          <img src="../assets/logo.png" alt="Vue logo" width="30" height="24" id="img-logo">
          QuizHome
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap');

  header {
  font-family: 'Oswald', sans-serif;

    p {
      margin-left: 1rem;
    }
  }

  nav {
    width: 100%;
    background: linear-gradient(45deg, #002c53 0%, #011a38 100%)
  }

  #img-log {
    filter: saturate(8);
  }
</style>
