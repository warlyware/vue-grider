<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Imagerie
    </a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <a href="" class="ui item">Galleries</a>
        <a href="" class="ui item">Upload</a>
        <a href="" class="ui item">Logout</a>
      </div>
      <a v-else href=""
      @click="login"
      class="ui item">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: mapActions(['login']),
  computed: mapGetters(['isLoggedIn'])
}
</script>

<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }
</style>
