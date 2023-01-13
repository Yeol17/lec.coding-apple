<template>

  <!-- 모달창 -->
  <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" :modalToggle="modalToggle"/>

  <div class="menu">
    <a href="" v-for="(메뉴, i) in 메뉴들" :key="i">{{ 메뉴 + " / " + i}}</a>
  </div>
  
  <DiscBanner />

  <Card :원룸들="원룸들" :detailView="detailView" :modalToggle="modalToggle"/>

</template>

<script>
import data from './assets/oneroom'
import DiscBanner from '@/Discount'
import Modal from '@/Modal'
import Card from '@/Card'

export default {
  name: 'App',
  data() {
    return {
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      메뉴들: [
        'Home', 'Shop', 'About'
      ],
    }
  },
  methods: {
    
    detailView(i) {
      this.modalToggle();
      this.누른거 = i
    },
    modalToggle() {
      if (this.모달창열렸니) {
        this.모달창열렸니 = false;
      } else {
        this.모달창열렸니 = true;
      }
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
