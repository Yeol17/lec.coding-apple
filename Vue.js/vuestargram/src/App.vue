<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="backHome">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="this.step == 1" @click="nextPage">Next</li>
      <li v-if="this.step == 2" @click="publish">글쓰기</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :data="data" :step="step" :img="img" :more="more" @write="content = $event" />



  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
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
      img: '',
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
      let url = URL.createObjectURL(file[0]);
      this.img = url;
      this.step = 1;
    },
    nextPage() {
      if (this.step == 1) return this.step++
    },
    publish() {
      console.log(this.content)
      var 내게시물 = {
        name: "Han Seungyeol",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: `${this.img}`,
        likes: 0,
        date: `Jan 27`,
        liked: false,
        content: this.content,
        filter: "perpetua",
      };
      this.data.unshift(내게시물);
      this.step = 0;
    },
    backHome() {
      this.step = 0;
      this.img == '';
      console.log(this.$data)
    }
  },
};
</script>

<style>
@import "./style.css";
</style>
