<template>
  <div class="btn-group">
    <span id="video-btn" v-for="(item, index) in episodes" :key="index">
      <el-button
        :type="item == episode?'primary':''"
        round
        @click="video(item)"
      >
        第{{ item.split(".")[0] }}話
      </el-button>
    </span>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    episode: {
      type: String,
      required: true,
    },
    episodes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    video(episode) {
      if (episode == this.episode) {
        return;
      }

      let title = this.title;
      this.$router.push({
        name: "Video",
        params: { title, episode },
      });
      this.$router.go(0);
    },
  },
  watch: {
    "$route.path": function (to, from) {
      console.log(`new_path = ${to}, old_path = ${from}`);
      location.reload();
    },
  },
};
</script>

<style lang="less" scoped>
.btn-group {
  margin: 0px 0px;
  float: left;
}
#video-btn {
  margin: 0px 10px;
}

</style>