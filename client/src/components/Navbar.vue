<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Todo list</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" v-show="!isLoggedIn">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item" v-show="!isLoggedIn">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item" v-show="isLoggedIn">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item" v-show="isLoggedIn">
          <router-link class="nav-link" @click="logout" to="/" >Logout</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/json">JSON output</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
  computed:{
    ...mapGetters(["isLoggedIn"])
  },
  methods:{
    ...mapActions(["logout"])
  }
}
</script>

<style>

</style>