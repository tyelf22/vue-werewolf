<template>
    <v-toolbar class="toolbar" color="#AA5F2C" dense>

      <v-spacer></v-spacer>
 
        <router-link to="/">
          <v-toolbar-title class="headline text-uppercase">
              <span class="font-weight-bold">Werewolf - </span>
              <span class="font-weight-light">DGM3780</span>
          </v-toolbar-title>
        </router-link>
        
      <v-spacer></v-spacer>
      <router-link to="/EnterPlayer" class="none">
        <p class="head hidden-sm-and-down"> Start Over </p>
        <v-icon class="hidden-md-and-up" color="white">mdi-exit-to-app</v-icon>
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
  .toolbar {
      height: 45px;
  }
  @media only screen and (max-width: 960px) {
      .toolbar {
          height: 100px;
      }
  }

</style>