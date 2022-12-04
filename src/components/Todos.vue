<template>
  <div class="my-5">
    <h1 class="text-dark text-center">All Todos</h1>
    <div class="container">
      <AddTodo />
      <FilterTodo />
      <div class="row">
        <div class="col-md-4 my-4" v-for="todo in myTodos" :key="todo.id">
          <b-card
            @dblclick="toggleTodo(todo)"
            text-variant="white"
            class="text-center"
            :class="[todo.completed ? 'bg-dark' : 'bg-success']"
          >
            <b-card-text class="d-flex justify-content-between">
              <span>{{ todo.title }}</span>
              <span @click="deleteTodo(todo.id)"
                ><b-icon icon="trash-fill" variant="danger"></b-icon
              ></span>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddTodo from "./AddTodo.vue";
import FilterTodo from "./FilterTodo.vue";
export default {
  components: {
    AddTodo,
    FilterTodo,
  },
  methods: {
    toggleTodo(todo) {
      todo.completed = !todo.completed;
      this.updateTodo(todo);
    },
    ...mapActions(["getTodos", "deleteTodo", "updateTodo"]),
  },

  computed: mapGetters(["myTodos"]),

  mounted() {
    this.getTodos();
  },
};
</script>

<style>
</style>