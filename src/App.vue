<template>
  <v-app>
  <v-toolbar color="#AA5F2C" dense height="19px">
  
  </v-toolbar>
  
    
    <v-content>
   <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  data: () => ({
    
  }),
};
</script>


<style>

</style>




