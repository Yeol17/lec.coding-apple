<template>
  <div class="black-bg" v-if="(모달창열렸니 === true)">
    <div class="white-bg">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <img :src="원룸들[누른거].image" class="img-size" alt="">
      <p>{{ 원룸들[누른거].content }}</p>
      <p>{{ 원룸들[누른거].price }}</p>
      <DiscBanner></DiscBanner>
      <button type="button" @click="modalToggle">닫기</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Modal",
  props: {
    원룸들: Array,
    누른거: Number,
    모달창열렸니: Boolean,
    modalToggle: Object
  }
}
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  text-align: center;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.img-size {
  width: 100%;
}
</style>