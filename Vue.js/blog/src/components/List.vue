<template>
  <div v-for="리스트 in 블로그글" :key="리스트.number">
    <h5>
      <router-link to="detail">
        {{ 리스트.title }}
      </router-link>
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