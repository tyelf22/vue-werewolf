<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <div class="text-center">
              <h1>WereWolf</h1>
              <router-link to="/SecondPage" class="none">
                <div v-responsive.lg.xl.md>  <v-btn fab x-large rounded color="#AA5F2C" dark  id="button" v-on:click="method">
                Start Game</v-btn></div> 
                <div v-responsive.sm.xs>  <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm" v-on:click="method">
                Start Game</v-btn></div> 
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
#buttonSm {
   padding-left: 168px;
   padding-right: 168px;
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
