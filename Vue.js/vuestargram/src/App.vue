<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :data="data" />

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/Container'
import Data from './assets/data'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      data: Data,
      cnt: 0
    }
  },
  components: {
    Container,
  },
  methods: {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.cnt}.json`)
        .then(결과 => {
          this.data.push(결과.data);
          this.cnt++
        })
    }
  }
}
</script>

<style>
@import './style.css';
</style>
