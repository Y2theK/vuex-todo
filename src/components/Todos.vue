<template>
  <div class="my-5">
    <h1 class="text-danger text-center">All Todos</h1>
    <div class="container">
      <div class="row">
        <AddTodo />
        <div class="col-md-4 my-4" v-for="todo in myTodos" :key="todo.id">
          <b-card bg-variant="success" text-variant="white" class="text-center">
            <b-card-text>{{ todo.title }}</b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddTodo from "./AddTodo.vue";
export default {
  components: {
    AddTodo,
  },
  methods: mapActions(["getTodos"]),

  computed: mapGetters(["myTodos"]),

  mounted() {
    this.getTodos();
  },
};
</script>

<style>
</style>