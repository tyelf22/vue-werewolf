<template>
    <v-toolbar color="#AA5F2C" dense height="45px">
  
      <v-spacer></v-spacer>
 
        <router-link to="/">
          <v-toolbar-title class="headline text-uppercase">
              <span class="font-weight-bold">Werewolf - </span>
              <span class="font-weight-light">DGM3780</span>
          </v-toolbar-title>
        </router-link>
        
      <v-spacer></v-spacer>
      <router-link to="/EnterPlayer" class="none">
        <p class="head"> Start Over </p>
      </router-link>
    </v-toolbar>
</template>

<script>


  export default {
    name: 'Header',
    

    data: () => ({
      
    }),
  }
</script>

<style>
  .v-application a {
    color: white!important;
    text-decoration: none;
  }

  .head{
    font-size: 16px;
    text-shadow: 1px 1px 2px #000000;
  }
</style>