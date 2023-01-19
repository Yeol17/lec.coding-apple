<template>
  <div class="black-bg" v-if="(모달창열렸니 === true)">
    <div class="white-bg">
      <DiscBanner></DiscBanner>
      <img :src="원룸들[누른거].image" class="img-size" alt="">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <input v-model="month">
      <p>{{ month }} 개월 선택함 : {{ 원룸들[누른거].price * month }}</p>
      <button type="button" @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
import DiscBanner from './Discount.vue'

export default {
  name: "Modal",
  data() {
    return {
      month: 1,
    }
  },
  watch: {
    month(a) {
      if (a >= 13) {
        alert('13개월 미만만 가능합니다.');
        alert(typeof(a));
        return this.month = 1;
      }
      if (isNaN(a)) {
        alert('숫자만 입력해 주세요.');
        return this.month = 1;
      }
    }
  },
  props: {
    원룸들: Object,
    누른거: Number,
    모달창열렸니: Boolean,
    modalToggle: Object
  },
  components: {
    DiscBanner: DiscBanner
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