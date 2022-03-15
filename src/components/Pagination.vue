<template>
  <el-pagination
    class="v-pagination"
    background
    layout="prev, pager, next"
    :total="totalPage * 9"
    :page-size="9"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
  >
  </el-pagination>
</template>


<script>
export default {
  name: "Pagination",
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleCurrentChange: function (cPage) {
      //   this.currentPage = cPage;
      console.log(this.totalPage);
      console.log("hello");
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
  margin-top: 20px;
}
</style>