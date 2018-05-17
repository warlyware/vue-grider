<template>
  <li>{{ video.snippet.title }}</li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: Object
  }
}
</script>

<style scoped>

</style>
