<template>
  <div>
    <Post :Data="Data[i]" v-for="(item, i) in Data" :key="i" />
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
    Data: Array
  }
}
</script>
<style>

</style>