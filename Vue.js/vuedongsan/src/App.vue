<template>

  <!-- 모달창 -->
  <div class="black-bg" v-if="(모달창열렸니 === true)">
    <div class="white-bg">
      <h4>{{ 원룸들[0]}}</h4>
      <p>상세페이지 내용임</p>
      <button type="button" @click="모달창열렸니 = !모달창열렸니">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a href="" v-for="(메뉴, i) in 메뉴들" :key="i">{{ 메뉴 + " / " + i}}</a>
  </div>


  <div v-for="(v, i) in 원룸들" :key="i">
    <img :src="원룸들[i].image" alt="" class="room-img"  @click="모달창열렸니 = true">
    <h4 class="red" :style="스타일">{{ 원룸들[i].title }} 원룸</h4>
    <p>{{ 원룸들[i].price }} 원</p>
  </div>

</template>

<script>
import data from './assets/oneroom'


export default {
  name: 'App',
  data() {
    return {
      원룸들: data,
      모달창열렸니: false,
      메뉴들: [
        'Home', 'Shop', 'About'
      ],
    }
  },
  components: {

  }
}
</script>

<style>
body {
  margin: 0;
  text-align: center;
}
div {
  box-sizing: border-box;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
  text-align: center;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

/* 모달 */
</style>
