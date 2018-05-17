<template>
  <div class="col-md-8">
    <div class="details" v-if="video">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" :src="videoUrl" frameborder="0"></iframe>
      </div>
      <h4>
        {{ video.snippet.title }}
      </h4>
      <p>
        {{ video.snippet.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    video: Object
  },
  computed: {
    videoUrl() {
      return `http://youtube.com/embed/${this.video.id.videoId}`
    }
  }
}
</script>

<style scoped>
  .details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>
