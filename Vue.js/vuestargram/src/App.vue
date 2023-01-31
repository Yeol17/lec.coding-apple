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

  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('이름변경')">버튼</button>

  <p>{{ $store.state.age }}</p>
  <button @click="$store.commit('증가')">증가</button>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기</button>

  <Container
    :filterName="filterName"
    :data="data"
    :step="step"
    :img="img"
    :more="more"
    @write="content = $event"
  />

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container";
import Data from "./assets/data";

export default {
  name: "App",
  data() {
    return {
      data: Data,
      cnt: 0,
      step: 0,
      img: "",
      filterName: "",
    };
  },
  mounted() {
    this.emitter.on('작명', (filter) => {
      this.filterName = filter
    });
  },

  components: {
    Container,
  },
  methods: {
    more() {
      this.axios
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
      if (this.step == 1) return this.step++;
    },
    publish() {
      console.log(this.content);
      var 내게시물 = {
        name: "Han Seungyeol",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: `${this.img}`,
        likes: 0,
        date: `Jan 27`,
        liked: false,
        content: this.content,
        filter: `${this.filterName}`,
      };
      this.data.unshift(내게시물);
      this.step = 0;
    },
    backHome() {
      this.step = 0;
      this.img == "";
      console.log(this.$data);
    },
  },
};
</script>

<style>
@import "./style.css";
</style>
