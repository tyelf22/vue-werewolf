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
        <v-flex xs12 sm6  md4 lg3 class="players" justify="center" v-for="(player, index) in playerObjects" :key="index">
          <v-card flat id="border">
            <v-responsive class="pt-2">
              <div class="text-center">
                <div class="subheading">
                  <div class="text-center"> {{ player.name }}</div>
                </div>
                <img :src="'./'+player.role.name.toLowerCase()+'.png'" width="200px" class="cen" />  
              </div>
            </v-responsive> 
            <v-card-text>
              <div class="roleName">
                <div class="text-center">{{ player.role.name }}</div>
              </div>
              <div class="roleDescription">
                <div class="text-center">{{ player.role.description }}</div>
              </div>
            </v-card-text>    
          </v-card>
        </v-flex> 
        
      

        <v-row align="center" justify="center">
          <router-link to="/Game" class="none" v-on:click.native="beginGame()">
              <div v-responsive.lg.xl.md>
                  <v-btn fab x-large rounded color="#AA5F2C" dark id="button">Begin Game</v-btn>
              </div>
              <div v-responsive.sm.xs>
                  <v-btn class="mb-4" fab medium rounded color="#AA5F2C" dark id="buttonSm">Begin Game</v-btn>
              </div>
          </router-link>
        </v-row>
        <v-row align="center" justify="center">
          <router-link to="/EnterPlayer" class="none">
              <div v-responsive.lg.xl.md>
                  <v-btn fab x-large rounded color="#AA5F2C" dark id="button">Back</v-btn>
              </div>
              <div v-responsive.sm.xs>
                  <v-btn class="mb-4" fab medium rounded color="#AA5F2C" dark id="buttonSm">Back</v-btn>
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
  padding: 0 0 1rem;
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

  cursor: pointer;
    border-radius: 10px;
    margin: 20px;
    padding: 25px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    text-align: center;
}
.roleName {
  color: #AA5F2C;
  letter-spacing: 1px;
  font-size:26px;
  font-weight: 900px;
}
.roleDescription {
  color: #AA5F2C;
  letter-spacing: 1px;
  font-size:13px;
}
.subheading {
  color: darkgray;
  font-size: 23px;
  font-weight: 700;
}
.center {
    text-align: center;
}

.flashcard {
    cursor: pointer;
    border-radius: 10px;
    margin: 20px;
    padding: 25px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    text-align: center;
}

</style>


<script>
import { mapState, mapGetters } from "vuex";
// import roles from "./assets/roles.js"

export default {
  name: "AssignRoles",

  data: () => ({
      phase: false,
      isRunning: true
  }),

  computed: {
    ...mapState(["playerObjects"]),
    ...mapGetters(["countPlayerObjects"])
  },

  methods: {
    //Assign roles that is based on number of players playing
    randomizeRolesAlg(num, ...roles) {
      const initialRoleTypes = [
          {
              "name": "werewolf",
              "description": "Decide on a victim to kill",
              "imageURL": "Werewolf.png"
          },
          {
              "name": "doctor",
              "description": "Choose a character to protect",
              "imageURL": "Doctor.png"
          },
          {
              "name": "seer",
              "description": "Investigate other villagers",
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
            "description": "Decide on a victim to kill",
            "imageURL": "../assets/Werewolf.png"
        };
        const seerObj = {
            "name": "seer",
            "description": "Investigate other villagers",
            "imageURL": "../assets/Seer.png"
        };
        switch (this.countPlayerObjects) {
            case 5:
              this.randomizeRolesAlg(5);
              break;
            case 6:
              this.randomizeRolesAlg(6, werewolfObj); 
              break;
            case 7:
              this.randomizeRolesAlg(7, seerObj, werewolfObj,);
              break;
            case 8:
              this.randomizeRolesAlg(8, seerObj, villagerObj, werewolfObj);
              break;
            case 9: 
              this.randomizeRolesAlg(9, seerObj, villagerObj, villagerObj, werewolfObj,);
              break;
              case 10: //Max players is set to 10 as of right now.
              this.randomizeRolesAlg(10, seerObj, villagerObj, villagerObj, villagerObj, werewolfObj,);
              break;
            default:
              console.log("there was an error!");
        }
    },
    create_UUID(){
        let dt = new Date().getTime();
        let uuid = 'xxxxxxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
            let r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c =='x' ? r :(r&0x3|0x8)).toString(16);
      });
      return uuid;
    },
    beginGame(){
        let gameID = this.create_UUID();
        let gameInfo = [this.playerObjects, gameID];
        this.$store.dispatch('beginGame', gameInfo);
    }
  },
  //Mount the playerObjects with lifecycle hook
  beforeMount() {
    this.assignRoles();
  }
};
</script>
