<template>
  <div class="page-content">
    <div class="card-list">
      <div class="v-card" v-for="(item, index) in videoList" :key="index">
        <div class="card" @click="video(item.id, item.firstEp, item.title)">
          <div
            id="video-pic"
            :style="{
              backgroundImage: 'url(' + item.img + ')',
            }"
          ></div>
          <div class="title-wrap">
            <h3 id="title">{{ item.title }}({{ item.episodes }})</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import API from "../const/const";
export default {
  name: "VideoList",
  props: {
    page: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      videoList: [],
      publicPath: process.env.BASE_URL,
    };
  },

  methods: {
    _getVideoList() {
      const that = this;
      axios.get(`${API.backendAPI}v1/videos/${Number(this.page)}/info?page_size=9`).then(
        function (response) {
          that.videoList = response.data.data;
          console.log(that.videoList);
        },
        function (err) {
          console.log(err);
        }
      );
    },
    // 点击跳转
    video(vid, eid, title) {
      // 如果当前视频没有第一话，则从数据库中获取到的eid为-1
      if (eid == -1) {
        return;
      }
      this.$router.push({
        name: "Video",
        params: { vid, eid },
        query: {
          title: title,
        },
      });
    },
  },
  created() {
    this._getVideoList();
  },
};
</script>

<style  scoped>
.page-content {
  margin: 0 auto;
  max-width: 1200px;
  /* padding: 10px 10%; */
  /* min-height: 100%; */
  /* width: 80%; */
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin: 0px auto;
  width: calc(100% - 20px);
}

.v-card {
  flex: 0 0 33%;
  max-width: 33%;
  /* margin: 1% 1%; */

  /* padding: 1em 2em; */
}

.card {
  position: relative;
  /* overflow: hidden; */
  padding:10px 20px;
  border-radius: 2px;
  cursor: pointer;
}

#video-pic {
  /* width: 100%; */
  min-height: 140px;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgb(235, 194, 11) 0px 0px 10px inset;
  background-position: center;
}

.title-wrap {
  position: absolute;
  bottom: 7%;
  left: 7%;
  /* right: 5px; */
  /* height: 30px; */
  /* width: 100%; */
}

#title {
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
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