<template>
  <div>
    <Header />
    <VideoList/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import VideoList from "@/components/VideoList";

export default {
  name: "Home",
  components: {
    Header,
    VideoList
  },
};
</script>
