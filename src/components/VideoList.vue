<template>
  <div class="card-list">
    <div class="v-card" v-for="(item, index) in videoList" :key="index">
      <div class="card" @click="video(item.title, item.episodes)">
        <img :src="item.img" />
        <div class="title">
          <p>{{ item.title }}({{ item.episodes.length }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VideoList",
  props: {},
  data() {
    return {
      videoList: [],
      publicPath: process.env.BASE_URL,
    };
  },

  methods: {
    _getVideoList() {
      const that = this;
      axios.get("http://127.0.0.1:8021/v1/videos/info").then(
        function (response) {
          console.log(response.data.data);
          that.videoList = response.data.data;
        },
        function (err) {
          console.log(err);
        }
      );
    },
    //页面跳转
    video(title, episodes) {
      if (episodes.length < 1) {
        return;
      }
      let episode = episodes[0];
      this.$router.push({
        name: "Video",
        params: { title, episode },
      });
    },
  },
  created() {
    this._getVideoList();
  },
};
</script>

<style  scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 3em;
}

.v-card {
  width: 19%;
  height: 300px;
  margin-left: 1%;
  padding: 1em 2em;
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
}

.card > img {
  top: 0;
  left: 0;
  width: 100%;
  height: 280px;
}

.title {
  position: absolute;
  bottom: 0;
  height: 30px;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
}

.title > p {
  font-size: 14px;
  color: #fff;
  padding-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

/*屏幕宽度大于1600px时的布局*/
/* @media screen and (min-width: 1600px) {
  .v-card {
    height: 190px;
  }
  .card > img {
    height: 170px;
  }
} */
</style>