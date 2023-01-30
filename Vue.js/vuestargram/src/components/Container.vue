<template>
  <div>
    <div v-if="step == 0">
      <Post
        :data="data[i]"
        v-for="(item, i) in data"
        :key="i"
      />
      <button @click="more">더보기</button>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div
        :class="filterName"
        class="upload-image"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>
      <div class="filters">
        <FilterBox
          :img="img"
          :filter="filter"
          v-for="filter in filters"
          :key="filter"
        >
          <span>{{ filter }}</span>
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div
        :class="filterName"
        class="upload-image"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
write!
        </textarea>
      </div>
    </div>
  </div>
</template>
<script>
import Post from "./Post";
import FilterBox from "./FilterBox.vue";

export default {
  name: "Container",
  data() {
    return {
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    data: Array,
    step: Number,
    img: String,
    more: Function,
    filterName: String,
  },
};
</script>
<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
