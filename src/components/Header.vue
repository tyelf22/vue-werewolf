<template>
    <v-toolbar dark>
      <v-toolbar-title class="headline text-uppercase">
          <span class="font-weight-bold">Werewolf - </span>
          <span class="font-weight-light">DGM3780 Darrin Harvard,Brooklyne, Tyler, Tyson</span>
          <span class="font-weight-light">Tyson</span>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script>
import {VToolbar, VToolbarTitle} from 'vuetify/lib'

  export default {
    name: 'Header',

    components: {
      VToolbar,
      VToolbarTitle, 
  },

    data: () => ({
      
    }),
  }
</script>

<style>
  .v-toolbar {
    max-height: 75px;
  }
</style>