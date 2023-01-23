<template lang="">
  <div>
    <h3>{{ 블로그글[0].title }}</h3>
    <p>{{ 블로그글[0].date }}</p>
    <p>{{ 블로그글[0].content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    블로그글: Array
  }
}
</script>

<style lang="">
  
</style>