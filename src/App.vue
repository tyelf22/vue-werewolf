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


