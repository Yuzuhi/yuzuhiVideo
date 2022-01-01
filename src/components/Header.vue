<template>
  <div class="header">
    <div class="header-wrap">
      <img id="christmas-text" src="../assets/NewYearText.png" alt="" />
      <a href="/" class="logo">
        <img
          id="header-img"
          src="https://i.pinimg.com/originals/f3/d6/9b/f3d69b8211123cf35c10281465e86998.png"
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>


<style lang="less">
.header {
  margin: 0 auto;
  // height: 64px;
  // padding: 0 50px;
  // color: #000000d9;
  // line-height: 64px;
  // background: #001529;
  // margin-bottom: 100px;
  // background: url("../assets/christmas_text.png");
}
#christmas-text {
  width: 30%;
}
.header-wrap {
  // align-content: space-between;
  // align-items: center;
  // justify-content: space-between;
}
.logo {
  color: #2c3d50;
  //   font-size: 28px;
}
#header-img {
  width: 11%;
  // float: left;
  position:absolute;
  left: 4%;
}
</style>
