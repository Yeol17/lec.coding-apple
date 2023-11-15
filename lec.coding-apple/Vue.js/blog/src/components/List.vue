<template>
  <div v-for="(리스트, i) in 블로그글" :key="i">
    <h5 @click="$router.push(`/detail/${i}`)">
      {{ 리스트.title }}
    </h5>
    <p>{{ 리스트.date }}</p>
    
  </div>
 
</template>

<script>

export default {
  name: 'BlogList',
  props: {
    블로그글: Array
  }
}
</script>

<style>

</style>