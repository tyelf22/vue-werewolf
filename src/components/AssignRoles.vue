<template>
  <v-app id="inspire">
   <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <div class="text-center">
              <h1>Roles</h1>
              <br />
              <br />
            
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" >
        <v-col cols="12" md="6" lg="3" >
        <v-card dark class="mt-3 px-5" v-for="(player, index) in playerObjects" :key="index">
        <v-card-title class="headline" >{{player.name}} </v-card-title> 
            <v-card-text class="text"> {{player.role}} </v-card-text>
          </v-card>
        </v-col>
    </v-row>
              
 <v-card
    class="mx-auto"
    color="#AA5F2C"
    width="200px"
     border-radius="20px"
  >
  <div class="text-center">
    <v-card-text>
     <router-link to="/NightPhase" class="center" >
      Next Step
      </router-link>
    </v-card-text>
    </div>
  </v-card>

        
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
.text {
  color:white;
}
.mx-auto {
  border-radius: 20px;
}
.center {
  color: white;
  font-size: 18px;
}
.bot {
  background-color:rgb(255, 255, 255);
}

.span {
  font-size: 19px;
  padding-top: 15px;
  color: white;
}

.next {
  padding-left: 190px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  letter-spacing: 0.4px;
}

h1 {
  letter-spacing: 2px;
}
p {
  color: white;
  letter-spacing: 1px;
  font-size: 20px;
}
#start {
  border-radius: 10px;
}
</style>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";

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
    //Algorithm to assign roles that is based on number of players playing
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
