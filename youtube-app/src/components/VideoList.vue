<template>
  <ul class="list-group">
    <VideoListItem
      v-for="video in videos"
      :video="video"
      :key="video.etag"
      @videoSelected="onVideoSelected"
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
  },
  methods: {
    onVideoSelected(video) {
      this.$emit('videoSelected', video);
    }
  }
}
</script>

<style scoped>

</style>
