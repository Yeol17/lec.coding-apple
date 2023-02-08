<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div class="post-header" v-for="itm in follower" :key="itm">
      <div class="profile" :style="{ backgroundImage: `url(${itm.image})`}"></div>
      <span class="profile-name">{{ itm.name }}</span>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "mypage",
  setup() {
    let follower = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
      });
    });

    return { follower };
  },
  data() {
    return {};
  },
};
</script>
<style></style>
