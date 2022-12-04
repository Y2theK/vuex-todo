<template>
  <select
    class="form-select"
    placeholder="Select limit"
    v-model="limit"
    @change="filterTodo(limit)"
  >
    <option selected disabled>Select limit</option>
    <option value="5">5</option>
    <option value="50">50</option>
    <option value="100">100</option>
    <option value="200">200</option>
  </select>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      limit: null,
    };
  },
  methods: mapActions(["filterTodo"]),
};
</script>

<style>
</style>