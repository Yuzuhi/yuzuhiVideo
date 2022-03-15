<template>
  <div class="vide-player">
    <h2 id="video-title">
      {{ title }}&nbsp;&nbsp;&nbsp;&nbsp;第{{ episode }}話
    </h2>
    <div id="player-component">
      <div id="dplayer"></div>
      <div id="btn-wrap">
        <EpisodeBtns
          class="btn-group"
          :vid="vid"
          :eid="eid"
          :episodes="episodes"
          :title="title"
          :episode="episode"
          :classify="classify"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DPlayer from "dplayer";
import EpisodeBtns from "@/components/EpisodeBtns";
export default {
  name: "VidePlayer",
  components: {
    EpisodeBtns,
  },
  props: {
    vid: {
      type: Number,
      required: true,
    },
    eid: {
      type: Number,
      required: true,
    },
    src: {
      type: String,
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
    img: {
      type: String,
      required: true,
    },
    timeline: {
      type: Number,
      required: true,
    },
    classify: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dp: null,
      gapTime: 0,
      timer: "",
    };
  },

  methods: {
    _createPlayer() {
      if (!this.src) {
        return;
      }
      this.dp = new DPlayer({
        container: document.getElementById("dplayer"), //播放器容器
        mutex: false, //  防止同时播放多个用户，在该用户开始播放时暂停其他用户
        theme: "#b7daff", // 风格颜色，例如播放条，音量条的颜色
        loop: false, // 是否自动循环
        lang: "zh-cn", // 语言，'en', 'zh-cn', 'zh-tw'
        // screenshot: true, // 是否允许截图（按钮），点击可以自动将截图下载到本地
        hotkey: true, // 是否支持热键，调节音量，播放，暂停等
        preload: "auto", // 自动预加载
        volume: 0.7, // 初始化音量
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2, 3], //可选的播放速度，可自定义
        // logo: "https://qczh-1252727916.cos.ap-nanjing.myqcloud.com/pic/273658f508d04d488414fd2b84c9f923.png", // 在视频左角上打一个logo
        video: {
          url: this.src, // 播放视频的路径
          pic: this.img, // 视频封面图片

          // thumbnails:
          //   "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606462956126&di=2d87964d4faf656af55d09d938640d97&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201310%2F10%2F150326y7dzdd8d4kpjjdsd.jpg", // 进度条上的缩略图,需要通过dplayer-thumbnails来生成
        },
        // subtitle: {   //字幕
        //   url: "",   //字幕网址
        //   color:'#fff' 字幕颜色
        //   fontSize: "20px",
        //   bottom: "40px",
        // },

        contextmenu: [
          //  自定义上下文菜单
          // 右键菜单
          {
            text: "miss U",
          },
          {
            text: "お元気ですか",
          },
        ],
        highlight: [
          //进度条上的自定义时间标记
          // 进度条时间点高亮
          {
            text: "10M",
            time: 6,
          },
          {
            text: "20M",
            time: 12,
          },
        ],
      });
      if (this.timeline) {
        this.dp.seek(this.timeline);
      }

      this.dp.play();
    },
    _recordWatchTime() {
      this.gapTime++;
    },
  },
  mounted() {
    // 设置定时器
    this.timer = setInterval(this._recordWatchTime, 1000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
    // 如果观看时间超过10s,则将本次的观看进度保存至localStorage
    if (this.gapTime < 10) {
      return;
    }
    let timeline = Math.floor(this.dp.video.currentTime);
    if (timeline > 5) {
      timeline = timeline - 5;
    } else {
      timeline = 0;
    }
    let item = {
      timeline: timeline,
      eid: this.eid,
    };
    localStorage.setItem(this.vid, JSON.stringify(item));
  },

  watch: {
    src: {
      handler() {
        this._createPlayer();
      },
      immediate: false,
    },
  },
};
</script>

<style>
.vide-player {
  width: 90%;
  margin: 0 auto;
  min-width: 1200px;
  display: block;
}
#video-title {
  width: 50%;
  text-align: left;
  display: block;
  margin: 10px 0px;
  color: white;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 rgb(233, 25, 25),
    -1px -1px 0 #000;
}
#player-component {
  width: 100%;
  display: flex;
}
#dplayer {
  width: 64%;
  min-width: 720px;
  min-height: 405px;
  /* height: 50%; */
}
#btn-wrap {
  width: 36%;
  padding-left: 3%;
}
.btn-group {
  width: 340px;
  /* float: right; */
  /* margin: 0 0 0 0; */
  /* height: 100%; */
}
</style>