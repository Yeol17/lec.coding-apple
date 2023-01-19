<template>

  <!-- 모달창 -->
  <!-- <div class="start" :class="{end: 모달창열렸니}">
    <Modal @closeModal="모달창열렸니=false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
  </div> -->
  <Transition name="fade">
    <Modal @closeModal="모달창열렸니=false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
  </Transition>

  <div class="menu">
    <a href="" v-for="(메뉴, i) in 메뉴들" :key="i">{{ 메뉴 + " / " + i}}</a>
  </div>
  
  <DiscBanner :이름="오브젝트.name" :나이="오브젝트.age"/>

  <Card @openModal="open" :원룸="원룸들[i]" v-for="(작명, i) in 원룸들" :key="i" />
 
</template>

<script>
import data from './assets/oneroom'
import DiscBanner  from '@/Discount'
import Modal from '@/Modal'
import Card from '@/Card'

export default {
  name: 'App',
  data() {
    return {
      오브젝트: {name: 'kim', age: 20},
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      메뉴들: [
        'Home', 'Shop', 'About'
      ],
    }
  },
  methods: {
    open(n) {
      this.모달창열렸니 = true;
      this.누른거 = n;
    }
  },
  components: {
    DiscBanner,
    Modal,
    Card
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

.start {
  opacity: 0;
  transition: all .6s; 
}
.end {
  opacity: 1
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all .4s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all .4s;
}
.fade-leave-to{
  opacity: 0;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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

</style>
