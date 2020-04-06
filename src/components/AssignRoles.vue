<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer
      class="top"
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <div class="text-center">
              <h1>WereWolf</h1>
              <br />
              <br />

              <p>ROLES</p>
              <br />

              <br />
              <!-- <div>
                <v-text-field
                  label="Solo"
                  placeholder="Name"
                  solo
                ></v-text-field>
              </div> -->
              <!-- <div>
                <router-link to="/SecondPage" class="none">
                  <v-btn x-large color="#AA5F2C" dark id="start">add</v-btn>
                </router-link>
              </div> -->
              <br />
              <br />
            </div>
          </v-col>
        </v-row>
              <v-row justify="center" >
                <v-col cols="12" md="6" lg="3" >
                    <v-card dark class="mt-3 px-5" v-for="(player, index) in playerObjects" :key="index">
                      <v-card-title class="headline" >{{player.name}} </v-card-title> 
                      <v-card-text> {{player.role}} </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

        <router-link to="/NightPhase" class="next">Next Step</router-link>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
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
