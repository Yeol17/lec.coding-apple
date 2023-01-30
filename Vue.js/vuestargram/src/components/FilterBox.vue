<template>
  <div :class="filter + ' filter-item'" :style="`background-image:url(${img})`">
    <slot></slot>
    <button @click="fire">버튼</button>
  </div>
</template>
<script>
export default {
  name: "filterBox",
  data() {
    return {
      msg: 'filterBox',
    }
  },
  methods: {
    fire() {
      this.emitter.emit('작명', this.filter)
    }
  },
  props: {
    img: String,
    filter: String,
  },
};
</script>
<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
