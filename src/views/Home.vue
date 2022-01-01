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
      :zIndex="null"
      :resize="true"
      color="#fff"
    />
    <Header />
    <VideoList />
  </div>
</template>

<script>
import Header from "@/components/Header";
import VideoList from "@/components/VideoList";
import ChristmasTree from "@/components/ChristmasTree";
import Snowf from "vue-snowf";

export default {
  name: "Home",
  components: {
    Header,
    VideoList,
    ChristmasTree,
    Snowf,
  },
  methods: {},
  created() {
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
