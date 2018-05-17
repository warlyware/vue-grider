<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList @videoSelected="onVideoSelected"
        :videos="videos"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyBDI8M5P-mKRv9TA6BLHcLWOLjaKoVg7UY';

export default {
  name: 'App',
  data() {
    return {
      videos: [],
      selectedVideo: null
    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  methods: {
    async onTermChange(searchTerm) {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      });
      this.videos = response.data.items;
    },
    onVideoSelected(video) {
      console.log(video);
      this.selectedVideo = video;
    }
  }
}
</script>
