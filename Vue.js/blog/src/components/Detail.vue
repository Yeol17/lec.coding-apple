<template lang="">
  <div>
    <h3>{{ 블로그글[$route.params.id].title }}</h3>
    <p>{{ 블로그글[$route.params.id].date }}</p>
    <p>{{ 블로그글[$route.params.id].content }}</p>
    <router-view></router-view>
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