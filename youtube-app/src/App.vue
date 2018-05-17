<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList :videos="videos" />
  </div>
</template>

<script>
import axios from 'axios';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const API_KEY = 'AIzaSyBDI8M5P-mKRv9TA6BLHcLWOLjaKoVg7UY';

export default {
  name: 'App',
  data() {
    return {
      videos: []
    }
  },
  components: {
    SearchBar,
    VideoList
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
    }
  }
}
</script>
