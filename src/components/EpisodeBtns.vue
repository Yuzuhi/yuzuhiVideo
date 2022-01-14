<template>
  <div class="btn-area">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        id="v-classify"
        :name="cls[0].type"
        v-for="(cls, i) in episodes"
        :key="i"
        :label="cls[0].type"
      >
        <span id="video-btn" v-for="(item, index) in cls" :key="index">
          <el-button
            id="element-btn"
            :type="item.episode == episode ? 'primary' : ''"
            @click="play(item.id)"
          >
            {{ item.episode }}
          </el-button>
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>




<script>
export default {
  props: {
    vid: {
      type: Number,
      required: true,
    },
    eid: {
      type: Number,
      required: true,
    },
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
    classify: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      activeName: "",
      classifies: [],
    };
  },
  methods: {
    play(eid) {
      if (eid == this.eid) {
        return;
      }

      let title = this.title;
      let vid = this.vid;
      this.$router.replace({
        name: "Video",
        params: { vid, eid },
        query: { title: title },
      });
      // this.$router.replace(0);
    },
    _getActiveName() {
      for (let i = 0; i < this.episodes.length; i++) {
        for (let j = 0; j < this.episodes[i].length; j++) {
          if (this.episodes[i][j].id == this.eid) {
            this.activeName = this.episodes[i][j].type;
          }
        }
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  watch: {
    "$route.path": function (to, from) {
      console.log(`new_path = ${to}, old_path = ${from}`);
      location.reload();
    },
    episodes: {
      handler() {
        this._getActiveName();
      },
    },
  },
};
</script>

<style lang="less" scoped>
#element-btn {
  min-width: 75px;

  margin: 5px -5px;
}
#btn-group-text {
  text-align: left;
  margin: 0px 2px 3px;
}
.btn-area {
  width: 340px;
  margin: 52px 10px;
  float: left;
  display: block;
  padding: 30px;
  background-color: #f4f4f4;
}
#video-btn {
  float: left;
  margin: 0px 10px;
}
</style>