<template>
  <v-app>
    <Header/>

    <v-content>
      <router-view></router-view> <!--router views-->
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    
  }),
};
</script>

<style scoped>

</style>


