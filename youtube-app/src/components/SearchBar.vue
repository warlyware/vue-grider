<template>
  <div>
    <input v-on:input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: (event) => {
      console.log(event.target.value);
    }
  }
}
</script>

<style scoped>

</style>
