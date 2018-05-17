<template>
  <li class="list-group-item media"
    @click="onVideoSelect"
  >
    <img class="mr-3"
      :src="thumbnailUrl"
    />
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: Object
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelected', this.video);
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
    margin-top: 0;
  }
  li:hover {
    background-color: #f6f6f6
  }
  .media-body {
    padding-left: 16px;
  }
</style>
