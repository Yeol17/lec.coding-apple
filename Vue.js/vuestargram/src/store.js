import { createStore } from "vuex";
import axios from 'axios';

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 30,
      likes: [
        { like: 10, isLike: false },
        { like: 20, isLike: false },
        { like: 30, isLike: false },
      ],
      more: {

      },
    }
  },
  mutations: {
    이름변경(state) {
      state.name = 'park'
    },
    증가(state) {
      state.age++;
    },
    incLike(state, idx) {
      if (!state.likes[idx].isLike) {
        state.likes[idx].isLike = !state.likes[idx].isLike;
        state.likes[idx].like++;
      } else {
        state.likes[idx].isLike = !state.likes[idx].isLike;
        state.likes[idx].like--;
      }
    },
    setMore(state, data) {
      state.more = data
    }
  },
  actions: {
    getData(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((a) => {
          console.log(a.data);
          console.log("context: " + context);
          context.commit('setMore', a.data)
        })
    }
  },
});

export default store;
