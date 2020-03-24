<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
        <span class="mr-2">Werewolf</span>
    </v-app-bar>
    
    <v-content>
      <router-view></router-view> <!--router views-->
    </v-content>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
};
</script>

<style scoped>

</style>


