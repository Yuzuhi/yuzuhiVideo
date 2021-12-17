<template>
  <div>
    <Header />
    <h2 class="title">
      {{ title }}&nbsp;&nbsp;&nbsp;&nbsp;第{{ episode.split(".")[0] }}話
    </h2>
    <div class="v-wrap">
      <VidePlayer :src="src" />
      <EpisodeBtns :episodes="episodes" :title="title" :episode="episode" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import VidePlayer from "@/components/VidePlayer";
import EpisodeBtns from "@/components/EpisodeBtns";
import axios from "axios";
export default {
  name: "Video",
  components: {
    Header,
    VidePlayer,
    EpisodeBtns,
  },
  data() {
    return {
      title: this.$route.params.title,
      episode: this.$route.params.episode,
      episodes: [],
      src: "",
    };
  },
  methods: {
    _getVideoInfo(title, episode) {
      const that = this;
      axios
        .get("http://127.0.0.1:8021/v1/video/info", {
          params: {
            title,
            episode,
          },
        })
        .then(
          function (response) {
            let responseData = response.data;
            that.src = responseData.data.src;
            that.episodes = responseData.data.episodes;
            console.log(that.episodes);
          },
          function (err) {
            console.log(err);
          }
        );
    },
  },

  created() {
    this._getVideoInfo(this.title, this.episode);
  },
};
</script>

<style lang="less" scoped>
.v-wrap {
  width: 720px;
  margin: 0 auto;
  // margin: 0px 10;
}
</style>