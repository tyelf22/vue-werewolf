<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <div class="text-center">
              <h1>WereWolf</h1>
              <router-link to="/SecondPage" class="none">
                <v-btn fab x-large rounded color="#AA5F2C" dark id="button" v-on:click="method">
                Start Game</v-btn>
              </router-link> 
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


<style scoped>
#inspire {
   background-color: #323C46;
}

h1 {
  letter-spacing: 1px;
  font-style: normal;
  font-weight: 700;
  color:white;
  font-size: 45px;
  padding: 0 0 5rem;
}

#button {
  padding-left: 200px;
  padding-right: 200px;
  border-radius: 40px;
  font-size: 25px;
}
#startSm {
   padding-left: 150px;
   padding-right: 150px;
   border-radius: 40px;
   font-size: 20px;
}

</style>


<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),

    created () {
      this.$vuetify.theme.dark = true
    },

  }
</script>
