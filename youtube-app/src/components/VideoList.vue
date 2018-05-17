<template>
  <ul>
    <VideoListItem
      v-for="video in videos"
      :video="video"
      :key="video.etag"
    >
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
  name: 'VideoList',
  data() {
    return {
      myCoolData: 'cool data!',
    }
  },
  props: {
    videos: Array
  },
  components: {
    VideoListItem
  }
}
</script>

<style scoped>

</style>
