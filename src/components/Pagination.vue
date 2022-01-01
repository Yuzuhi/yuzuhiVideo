<template>
  <el-pagination
    class="v-pagination"
    background
    layout="prev, pager, next"
    :total="100"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
  >
  </el-pagination>
</template>


<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleCurrentChange: function (cPage) {
      //   this.currentPage = cPage;
      console.log(cPage);
      this.$router.push({
        name: "Index",
        params: { page: cPage },
      });
      this.$router.go(0);
    },
  },
};
</script>

<style lang="less" scoped>
.v-pagination {
  margin-top: 10px;
}
</style>