<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <div class="text-center">
              <h1>WereWolf</h1>
              <h2> Are you a moderator or player?</h2>
              <div>
                <router-link to="/" class="none">
                  <div v-responsive.lg.xl.md> 
                    <v-btn fab x-large rounded color="#AA5F2C" dark id="button">
                      Player</v-btn>
                  </div>
                  <div v-responsive.sm.xs > 
                    <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm">
                    Player</v-btn>
                  </div> 
                </router-link> 
              </div>
              <div>
                <router-link to="/EnterPlayer" class="none">
                  <div v-responsive.lg.xl.md> 
                    <v-btn fab x-large rounded color="#AA5F2C" dark id="button">
                    Moderator</v-btn>
                  </div>
                  <div v-responsive.sm.xs > 
                    <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm">
                    Moderator</v-btn>
                  </div> 
                </router-link>
              </div>
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

h2 {
  padding-bottom: .2rem;
  color:white;
}

#button {
  padding-left: 200px;
  padding-right: 200px;
  border-radius: 40px;
  font-size: 25px;
  margin-bottom: 16px;
}

#buttonSm {
   padding-left: 150px;
   padding-right: 150px;
   border-radius: 40px;
   font-size: 20px;
   margin-bottom: 16px;
}
</style>


<script>
  export default {
    name: 'SecondPage',
    
    data: () => ({
      title: 'This is the second page'
    }),
  }
</script>