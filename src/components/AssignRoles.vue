<template>
  <v-app id="inspire">
   <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <div class="text-center">
              <h1>WereWolf</h1>
            </div>
          </v-col>
        </v-row>
        <v-flex xs6 sm4 md4 lg3 class="players" justify="center" v-for="(player, index) in playerObjects" :key="index">

    <v-card flat class="text-xs-center ma-4" id="border">
    <v-responsive class="pt-2">
    <div class="text-center">
      <div class="subheading"><div class="text-center"> {{ player.name }}</div></div>
     <img :src="'./'+player.role.name.toLowerCase()+'.png'" width="100px" class="cen" />  

    </div>

    </v-responsive> 
 

<v-card-text>

  

<div class="gray--text"><div class="text-center">{{ player.role.name }}</div></div>
</v-card-text>    
</v-card>
</v-flex>
        <v-row align="center" justify="center">
          <router-link to="/NightPhase" class="none">
              <div v-responsive.lg.xl.md>
                  <v-btn fab x-large rounded color="#AA5F2C" dark id="button" @click="beginGame()">Begin Game</v-btn>
              </div>
              <div v-responsive.sm.xs>
                  <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm" @click="beginGame()">Begin Game</v-btn>
              </div>
          </router-link>
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
}
.players {
    font-size: 26px;
    font-variant: all-small-caps;
    color: white;
}
.werewolf-color {
    color: #AA5F2C;
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
</style>


<script>
import { mapState, mapGetters, mapMutations } from "vuex";
// import roles from "./assets/roles.js"

export default {
  name: "AssignRoles",

  data: () => ({}),

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
    //Assign roles that is based on number of players playing
    randomizeRolesAlg(num, ...roles) {
      const initialRoleTypes = [
          {
              "name": "werewolf",
              "description": "Take over the village",
              "imageURL": "Werewolf.png"
          },
          {
              "name": "doctor",
              "description": "Heal the innocent",
              "imageURL": "Doctor.png"
          },
          {
              "name": "seer",
              "description": "Find the werewolves",
              "imageURL": "Seer.png"
          },
          {
              "name": "villager",
              "description": "Defend the village",
              "imageURL": "Villager.png"
          },
          {
              "name": "villager",
              "description": "Defend the village",
              "imageURL": "Villager.png"
          },
      ];
      const roleTypes = initialRoleTypes.concat(roles); //concat the roles passed through rest operator to initial role types

      //Loop through player objects
      this.playerObjects.map(player => {
        let randomNum = Math.floor(Math.random() * num); //get random number determined by number of players playing
        player.role = roleTypes[randomNum]; //assign player role using array of roles
        roleTypes.splice(randomNum, 1); //delete by randomNum index
        num--; //decrement passed in number so next random number will account for the spliced role from array
      });
    },
    //Switch statement to call algorithm based on number of players
    assignRoles() {
        const villagerObj = {
            "name": "villager",
            "description": "Defend the village",
            "imageURL": "../assets/Villager.png"
        };
        const werewolfObj = {
            "name": "werewolf",
            "description": "Take over the village",
            "imageURL": "../assets/Werewolf.png"
        };
        switch (this.countPlayerObjects) {
            case 5:
              this.randomizeRolesAlg(5);
              break;
            case 6:
              this.randomizeRolesAlg(6, werewolfObj); //add another villager to array. We can add whatever extra roles provided the amount of players playing
              break;
            case 7:
              this.randomizeRolesAlg(7, villagerObj, werewolfObj,);
              break;
            case 8:
              this.randomizeRolesAlg(8, villagerObj, villagerObj, werewolfObj);
              break;
            case 9: //max players is set to 9 as of right now. We can adjust the cases and roles however we'd like.
              this.randomizeRolesAlg(9, villagerObj, villagerObj, villagerObj, werewolfObj,);
              break;
              case 10: //max players is set to 9 as of right now. We can adjust the cases and roles however we'd like.
              this.randomizeRolesAlg(10, villagerObj, villagerObj, villagerObj, villagerObj, werewolfObj,);
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
  //Mount the playerObjects with lifecycle hook
  beforeMount() {
    this.assignRoles();
  }
};
</script>
