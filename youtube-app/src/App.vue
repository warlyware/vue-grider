<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import axios from 'axios';

import SearchBar from './components/SearchBar';
const API_KEY = 'AIzaSyBDI8M5P-mKRv9TA6BLHcLWOLjaKoVg7UY';

export default {
  name: 'App',
  components: {
    SearchBar
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
      console.log(response);
    }
  }
}
</script>
