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

  <Container :data="data" :step="step" :url="url" />

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="tab == 0">내용0</div>
  <div v-if="tab == 1">내용1</div>
  <div v-if="tab == 2">내용2</div>
  <button @click="tabView(0)">버튼0</button>
  <button @click="tabView(1)">버튼1</button>
  <button @click="tabView(2)">버튼2</button> -->
</template>

<script>
import Container from "./components/Container";
import Data from "./assets/data";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      data: Data,
      cnt: 0,
      step: 0,
      url: '',
    };
  },
  components: {
    Container,
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.cnt}.json`)
        .then((결과) => {
          this.data.push(결과.data);
          this.cnt++;
        });
    },
    tabView(i) {
      this.tab = i;
    },
    upload(e) {
      let file = e.target.files;
      this.url = URL.createObjectURL(file[0]);
      this.step = 1;
    },
  },
};
</script>

<style>
@import "./style.css";
</style>
