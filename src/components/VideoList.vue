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
export default {
  name: "VideoList",
  props: {
    page: {
      type: String,
      required: true,
    },
    videoList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // 点击跳转
    video(vid, eid, title) {
      // 如果当前视频没有第一话，则从数据库中获取到的eid为-1
      // 从localStorage中获取vid
      if (eid == -1) {
        return;
      }
      let timeline = 0;
      if (localStorage.getItem(vid)) {
        let item = JSON.parse(localStorage.getItem(vid));
        eid = item.eid;
        timeline = item.timeline;
      }

      this.$router.push({
        name: "Video",
        params: { vid, eid },
        query: {
          title,
          timeline,
        },
      });
    },
  },
};
</script>

<style  scoped>
.page-content {
  margin: 0 auto;
  height: 80%;
  max-width: 80%;
  min-height: 480px;
  /* padding: 10px 10%; */
  /* min-height: 100%; */
  /* width: 80%; */
}
.card-list {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin: 0px auto;
  width: calc(100% - 20px);
}

.v-card {
  flex: 0 0 33%;
  max-width: 33%;
  height: 30%;
  /* margin: 1% 1%; */

  /* padding: 1em 2em; */
}

.card {
  position: relative;
  /* overflow: hidden; */
  padding: 10px 20px;
  border-radius: 2px;
  cursor: pointer;
  height: 100%;
}

#video-pic {
  /* width: 100%; */
  height: 100%;
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