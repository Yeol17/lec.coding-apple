<template>
  <nav class="navbar navbar-expand-lg bg-light mb-4">
    <div class="container-fluid">
      <router-link to="/home" class="logo">
        <img src="./assets/logo.png" class="d-inline-block" width="30" alt="">
        <span class="d-inline-block me-n3">log</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home" class="nav-link active">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">리스트</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view :블로그글="블로그글"></router-view>

  <!-- <List :블로그글="블로그글[i]" v-for="(리스트, i) in 블로그글" v-bind:key="i"/> -->

</template>

<script>

import blog from "./assets/blog"

export default {
  name: 'App',
  data() {
    return {
      블로그글: blog
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-item a {
  text-decoration: none;
  color: #333;
}

.logo {
  text-decoration: none;
  color: #363
}
</style>
