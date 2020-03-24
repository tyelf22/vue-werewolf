<template>
  <v-container>
    <v-row>
      <v-col>
        {{title}}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FirstPage',

    data: () => ({
      title: 'This is the first page'
    }),
  }
</script>

<style scoped>

</style>
