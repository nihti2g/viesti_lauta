<template>
  <b-container>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Navbar from './Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
