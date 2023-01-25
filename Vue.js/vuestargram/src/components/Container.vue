<template>
  <div>
    <Post :data="data[i]" v-for="(item, i) in data" :key="i" />
  </div>
</template>
<script>
import Post from './Post'

export default {
  name: 'Container',
  components: {
    Post,
  },
  props: {
    data: Array
  }
}
</script>
<style>

</style>