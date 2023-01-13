<template>
  <div v-for="(v, i) in 원룸들" :key="i">
    <img :src="v.image" alt="" class="room-img" @click="detailView(i)">
    <h4 class="red">{{ v.title }} 원룸</h4>
    <p>{{ v.price }} 원</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    원룸들: Array,
    detailView: Object,
    modalToggle: Object
  }
}
</script>

<style>

</style>