<template>
  <v-app id="night">
   <v-content>
      <v-row align="center" justify="center">
          <v-col>
            <div class="text-center">
              <h1>Night Phase</h1> 
            </div>
          </v-col>
        </v-row>
      <v-container class="my-3">
        <v-layout row wrap>
          <v-flex xs6 sm4 md4 lg3 class="players" justify="center" v-for="(player, index) in playerObjects" :key="index">
            <v-card flat class="text-xs-center ma-4" id="border">
              <v-responsive class="pt-2">
                <div class="text-center">
                  <div class="subheading">
                    <div class="text-center"> {{ player.name }}</div>
                  </div>
                  <img :src="'./'+player.role.name.toLowerCase()+'.png'" width="100px" class="cen" />  
                </div>
              </v-responsive> 
              <v-card-text>
                <div class="gray--text"><div class="text-center">{{ player.role.name }}</div></div>
                  </v-card-text>    
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>        
      <v-row align="center" justify="center">
        <router-link to="/DayPhase" class="none">
          <div v-responsive.lg.xl.md>
            <v-btn fab x-large rounded color="#AA5F2C" dark id="button" @click="beginGame()">Next</v-btn>
          </div>
          <div v-responsive.sm.xs>
            <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm" @click="beginGame()">Next</v-btn>
          </div>
        </router-link>
      </v-row>
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
  padding: 1rem 0 5rem;
}
.players {
    font-size: 26px;
    font-variant: all-small-caps;
    color: white;
}
.werewolf-color {
    color: #AA5F2C;
}
#border {
  border-radius: 13px;
  background-color:white;
}
.gray--text {
  color: #AA5F2C;
  letter-spacing: 1px;
  font-size:28px;
  font-weight: 900px;
}
.subheading {
  color: darkgray;
  font-size: 23px;
  font-weight: 700;
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
}
#night {
  background-image: url('night11.png');
  background-size: cover;
  background-color: #323C46;
  background-position: bottom;
  transition: 0.4s;
}
</style>


<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "AssignRoles",

  data: () => ({
  }),

  computed: {
    ...mapState(["playerObjects"]),
    ...mapGetters(["countPlayerObjects"])
  },

  methods: {
    ...mapMutations(["addPlayerObjects"]),
    addPlayer() {
      this.addPlayerObjects({
        name: this.playerName
      });
    },
  },
};
</script>
