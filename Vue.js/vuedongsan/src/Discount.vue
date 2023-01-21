<template>
  <div class="discount">
    <h4>지금 결제하면 {{ disRate }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: 'DiscBanner',
  props: {
    disRate: Number
  }
}
</script>

<style>

</style>