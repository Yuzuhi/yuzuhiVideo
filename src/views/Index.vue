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
    <VideoList :page="page" />
    <Pagination :currentPage="Number(page)" />
    <Special />
  </div>
</template>

<script>
import Header from "@/components/Header";
import VideoList from "@/components/VideoList";
import Pagination from "@/components/Pagination";
import Special from "@/components/Special";
import Snowf from "vue-snowf";

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
      page: this.$route.params.page,
    };
  },
  methods: {},
};
</script>