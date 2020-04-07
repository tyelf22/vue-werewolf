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
        <v-row class="players" justify="center" v-for="(player, index) in playerObjects" :key="index">
            <v-col align="center" cols="2" sm="2" v-if="player">
                {{ player.name }}
<!--                <img class="imageCard" :src="require('../assets/' + player.role.imageURL)">-->
            </v-col>
            <v-col align="center" cols="12" sm="2">
                <span :class="{'werewolf-color' : player.role.name === 'werewolf'}">{{ player.role.name }}</span>
            </v-col>
        </v-row>
        <v-row align="center" justify="center" class="mt-10">
            <div v-responsive.lg.xl.md>   <v-btn fab x-large rounded color="#AA5F2C" dark id="start" @click="beginGame()">begin game</v-btn></div>
            <div v-responsive.sm.xs>   <v-btn fab medium rounded color="#AA5F2C" dark id="startSm" @click="beginGame()">begin game</v-btn></div>
        </v-row>
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
.players {
    font-size: 26px;
    font-variant: all-small-caps;
    color: white;
}
.werewolf-color {
    color: #AA5F2C;
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
          {
              "name": "werewolf",
              "description": "Take over the village",
              "imageURL": "Werewolf.png"
          },
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
          }
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
  //Mount the playerObjects with lifecycle hook
  beforeMount() {
    this.assignRoles();
  }
};
</script>
