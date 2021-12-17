<template>
  <div class="header">
    <div class="header-wrap">
      <a href="/" class="logo">
        <img src="@/assets/logo.png" alt="" />
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
  height: 64px;
  padding: 0 50px;
  color: #000000d9;
  line-height: 64px;
  background: #001529;
  margin-bottom: 70px;
}
.header-wrap {
  display: flex;
  align-content: space-between;
  align-items: center;
  justify-content: space-between;
}
.logo {
  color: #2c3d50;
//   font-size: 28px;
}
</style>
