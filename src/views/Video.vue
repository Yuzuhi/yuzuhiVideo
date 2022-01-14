<template>
  <div>
    <Header />
    <div class="v-wrap">
      <VidePlayer
        :src="src"
        :title="title"
        :episode="episode"
        :img="img"
        :vid="vid"
        :eid="eid"
        :timeline="timeline"
      />
      <EpisodeBtns
        :vid="vid"
        :eid="eid"
        :episodes="episodes"
        :title="title"
        :episode="episode"
        :classify="classify"
      />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import VidePlayer from "@/components/VidePlayer";
import EpisodeBtns from "@/components/EpisodeBtns";
import axios from "axios";
import API from "../const/const";

export default {
  name: "Video",
  components: {
    Header,
    VidePlayer,
    EpisodeBtns,
  },
  data() {
    return {
      vid: Number(this.$route.params.vid),
      eid: Number(this.$route.params.eid),
      timeline: Number(this.$route.query.timeline),
      title: this.$route.query.title,
      episodes: [],
      src: "",
      img: "",
      episode: "",
      classify: "",
    };
  },
  methods: {
    _getVideoInfo(vid, eid) {
      const that = this;
      axios.get(`${API.backendAPI}v1/video/${vid}/byClassify`).then(
        function (response) {
          let responseData = response.data.data;
          that.episodes = responseData;
          let breaked = false;
          for (let i = 0; i < responseData.length; i++) {
            if (breaked) {
              break;
            }

            for (let j = 0; j < responseData[i].length; j++) {
              if (responseData[i][j].id == eid) {
                that.src = responseData[i][j].src;
                that.episode = String(responseData[i][j].episode);
                that.classify = responseData[i][j].type;
                breaked = true;
                break;
              }
            }
          }
        },
        function (err) {
          console.log(err);
        }
      );
    },
  },

  created() {
    this._getVideoInfo(this.vid, this.eid);
    var _this = this;
    this.timer = setInterval(function () {
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mm = new Date().getMinutes();
      let ss = new Date().getSeconds();
      let nowTime = dd + "/" + hh + ":" + mm + ":" + ss;
      let targetTime = "25/0:0:1";
      if (nowTime == targetTime) {
        alert("メリークリスマス( ´∀｀ )");
      }
    }, 1000);
  },
  beforeDestory() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="less" scoped>
.v-wrap {
  width: 1280px;
  height: 720px;
  margin: 0 auto;
}
</style>