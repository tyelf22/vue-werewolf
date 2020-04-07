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
        <v-row justify="center" >
          <v-col cols="12" md="6" lg="3" >
            <h2 class="text-center">Roles</h2>
            <v-card dark class="mt-3 px-5" v-for="(player, index) in playerObjects" :key="index">
              <v-card-title class="headline" >{{player.name}} - {{player.role.toUpperCase()}} </v-card-title> 
            </v-card>
          </v-col>
        </v-row>    
        <v-row align="center" justify="center">
          <router-link to="/NightPhase" class="none">
            <div v-responsive.lg.xl.md>
              <v-btn fab x-large rounded color="#AA5F2C" dark id="button" v-on:click="assignRoles">Begin Game</v-btn>
            </div>
            <div v-responsive.sm.xs>
              <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm" v-on:click="assignRoles">Begin Game</v-btn>
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
}

h2 {
  padding-bottom: .2rem;
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
        "werewolf",
        "werewolf",
        "doctor",
        "seer",
        "villager"
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
      switch (this.countPlayerObjects) {
        case 5:
          this.randomizeRolesAlg(5);
          break;
        case 6:
          this.randomizeRolesAlg(6, "villager"); //add another villager to array. We can add whatever extra roles provided the amount of players playing
          break;
        case 7:
          this.randomizeRolesAlg(7, "villager", "villager");
          break;
        case 8:
          this.randomizeRolesAlg(8, "villager", "villager", "werewolf");
          break;
        case 9: //max players is set to 9 as of right now. We can adjust the cases and roles however we'd like.
          this.randomizeRolesAlg(9, "villager", "villager", "werewolf", "villager");
          break;
        default:
          console.log("there was an error!");
      }
      console.log(this.playerObjects);
    }
  },
  //Mount the playerObjects with lifecycle hook
  beforeMount() {
    this.assignRoles();
  }
};
</script>
