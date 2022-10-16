<template>
  <header class="container-fluid" style="padding: 0;">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">

        <router-link to="/" class="navbar-brand text-white">
          <img src="../assets/logo.png" alt="Vue logo" width="30" height="24" id="img-logo">
          QuizSPA
        </router-link>

        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active text-white">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-white">About</router-link>
            </li>
          </ul>
        </div> -->

      </div>
    </nav>
  </header>
</template>

<style lang="scss">
  header {
    p {
      margin-left: 1rem;
    }
  }

  nav {
    width: 100%;
  }

  #img-log {
    filter: saturate(8);
  }
</style>
