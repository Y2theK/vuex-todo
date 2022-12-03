<template>
  <div id="app">
    <h1>{{ $store.state.Todo.sayHello }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    console.log(this.$store.state.Todo);
  },
};
</script>

<style>
</style>
