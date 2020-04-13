
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
          <v-flex xs12 sm6 md4 lg3 class="players" justify="center" v-for="(player, index) in playerObjects" :key="index">
            <vueFlashcard 
            :headerFront="player.name"
            :headerBack="player.name"
            :imgFront="'./'+player.role.name.toLowerCase()+'.png'"
            colorFront="white"
            colorBack="Black"
            :imgBack="'./'+player.role.name.toLowerCase()+'.png'"  
            :footerFront="player.role.name"
            :footerBack="player.role.name"
            colorTextFront="#AA5F2C"
            />
          </v-flex>
        </v-layout>
      </v-container> 

      <v-row align="center" justify="center">
        <router-link to="/DayPhase" class="none">
          <div v-responsive.lg.xl.md>
            <v-btn fab x-large rounded color="#AA5F2C" dark id="button" v-on:click="assignRoles">Next Phase</v-btn>
          </div>
          <div v-responsive.sm.xs>
            <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm" v-on:click="assignRoles">Next Phase</v-btn>
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
  padding: 0 0 1rem;
}

h2 {
  padding-bottom: .2rem;
}

.players {
    font-size: 26px;
    font-variant: all-small-caps;
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
  background-color: #323C46;
}
</style>


<script>
import vueFlashcard from 'vue-flashcard';
import { mapState, mapGetters, mapMutations } from "vuex";




// import roles from "./assets/roles.js"

export default {
  name: "AssignRoles",
   components : { vueFlashcard },

  

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
    assignRoles() {
        const villagerObj = {
            "name": "villager",
            "description": "Defend the village",
            "imageURL": "./Villager.png"
        };
        const werewolfObj = {
            "name": "werewolf",
            "description": "Take over the village",
            "imageURL": "./Werewolf.png"
        };
        switch (this.countPlayerObjects) {
            case 5:
              this.randomizeRolesAlg(5);
              break;
            case 6:
              this.randomizeRolesAlg(6, villagerObj); //add another villager to array. We can add whatever extra roles provided the amount of players playing
              break;
            case 7:
              this.randomizeRolesAlg(7, villagerObj, villagerObj);
              break;
            case 8:
              this.randomizeRolesAlg(8, villagerObj, villagerObj, werewolfObj);
              break;
            case 9: //max players is set to 9 as of right now. We can adjust the cases and roles however we'd like.
              this.randomizeRolesAlg(9, villagerObj, villagerObj, werewolfObj, villagerObj);
              break;
            default:
              console.log("there was an error!");
        }
        console.log(this.playerObjects);
    },
    beginGame(){
        this.$store.dispatch('beginGame', this.playerObjects);
    },
    getImage(path) {
        console.log("Hit me!" + path);
        return require(path)
    }
  },
};
</script>
