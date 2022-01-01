<template>
  <div>
    <Header />
    <div class="v-wrap">
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";
import API from "../const/const";

export default {
  name: "Preload",
  components: {
    Header,
  },
  data() {
    return {
      id: this.$route.params.id,
      episodes: [],
      src: "",
      img: "",
    };
  },
  methods: {
    _getVideoInfo(id) {
      const that = this;

      axios.get(`${API.backendAPI}v1/video/${id}/byClassify`).then(
        function (response) {
          let responseData = response.data.data;
          that.episodes = responseData;
          that.src = responseData[0][0].src;
          console.log(that.src);
        },
        function (err) {
          console.log(err);
        }
      );
    },
  },

  created() {
    this._getVideoInfo(this.id);
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