<template>
  <div class="my-5">
    <h1 class="text-danger text-center">All Todos</h1>
    <div class="container">
      <div class="row">
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
export default {
  //if we have 10 getters we will need to write 10 computed properties -> not good
  //use mapGetters for that cases
  // computed: {
  //   myTodos() {
  //     return this.$store.getters.myTodos;
  //   },
  // }, OR
  //  computed: {
  //   //user spread operator if you have local computed properties.
  //   ...mapGetters(["myTodos"]),
  // },
  methods: mapActions(["getTodos"]),

  computed: mapGetters(["myTodos"]),

  mounted() {
    this.getTodos();
  },
};
</script>

<style>
</style>