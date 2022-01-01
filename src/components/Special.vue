<template>
  <img id="new-year-text" src="../assets/NewYear.jpg" alt="" @click="_go()" />
</template>

<script>
export default {
  name: "Special",
  methods: {
    _go() {
      console.log("haha");
      this.$router.push({
        name: "Special",
      });
    },
  },
};
</script>

<style lang="less" scoped>
#new-year-text {
  position: absolute;
  width: 8%;
  left: 0;
  bottom: 50px;
  transform: rotate(45deg);
  cursor: pointer;
}
</style>