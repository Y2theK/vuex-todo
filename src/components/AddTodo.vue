<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model="newTodo.title" />
    <div class="input-group-append">
      <button class="btn btn-success" @click="addTodo(newTodo)">
        Add Todo
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newTodo: {
        title: "",
      },
    };
  },
  methods: mapActions(["addTodo"]),
};
</script>

<style>
</style>