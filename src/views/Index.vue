<template>
  <div class="body">
    <Snowf
      :amount="50"
      :size="5"
      :speed="1.5"
      :wind="0"
      :opacity="0.8"
      :swing="1"
      :image="null"
      :zIndex="-1"
      :resize="true"
      color="#fff"
    />
    <Header />
    <VideoList :page="page" :videoList="videoList" />
    <Pagination :currentPage="Number(page)" :totalPage="totalPage" />
    <Special />
  </div>
</template>

<script>
import Header from "@/components/Header";
import VideoList from "@/components/VideoList";
import Pagination from "@/components/Pagination";
import Special from "@/components/Special";
import Snowf from "vue-snowf";
import axios from "axios";
import API from "../const/const";

export default {
  name: "Index",
  components: {
    Header,
    VideoList,
    Snowf,
    Pagination,
    Special,
  },
  data() {
    return {
      totalPage: 0,
      videoList: [],
      publicPath: process.env.BASE_URL,
      page: this.$route.params.page,
    };
  },

  methods: {
    _getVideoList() {
      const that = this;
      axios({
        method: "get",
        url: `${API.backendAPI}v1/videos/${this.page}/info`,
        params: {
          page_size: 9,
        },
      }).then(
        function (response) {
          that.videoList = response.data.data.videos;
          that.totalPage = Number(response.data.data.totalPage);
        },
        function (err) {
          console.log(err);
        }
      );
    },
    // 清除本地过期的vid
    _clearLocalStorage() {
      axios.get(`${API.backendAPI}v1/videos/all`).then(
        function (response) {
          let vids = response.data.data;
          for (var key in localStorage) {
            key = Number(key);
            if (key == NaN) {
              continue;
            }
            if (vids.indexOf(key) == -1) {
              localStorage.removeItem(key);
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
    this._getVideoList();
    this._clearLocalStorage();
  },
};
</script>

<style lang="less" scoped>
.body {
  height: 100%;
}
</style>