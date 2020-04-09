<template>
  <v-app id="day">
   <v-content>
     <div class="text-center"><h2>Day Phase</h2></div>

     <div class="team">
    <v-container class="my-3">
    <v-layout row wrap>
 
    <v-flex xs12 sm6 md4 lg3 class="players" justify="center" v-for="(player, index) in playerObjects" :key="index">

     <vueFlashcard 
      :headerFront="player.role.name"
      :headerBack="player.role.name"
      :imgFront="'./'+player.role.name.toLowerCase()+'.png'" 
      colorFront="white"
      colorBack="Black"
      :imgBack="'./'+player.role.name.toLowerCase()+'.png'"  
      :footerFront="player.name"
      :footerBack="player.name"
      colorTextFront="#AA5F2C"
     
     />
</v-flex>
</v-layout>
</v-container>
<br/>
              
 <v-card
    class="mx-auto"
    color="#AA5F2C"
    width="200px"
     border-radius="20px"
  >
  <div class="text-center">
    <v-card-text>
     <router-link to="/DayPhase" class="center" >
      Next Step
      </router-link>
    </v-card-text>
    </div>
  </v-card>
<br/>
</div>

      
    </v-content>
  </v-app>
</template>


<style scoped>

.cen{
  width: 50px;
}
.next {
  padding-top:12px;
 font-size: 7px;
}


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


p {
  color: white;
  letter-spacing: 1px;
  font-size:20px;
  font-weight: 600px;
}
.next {
padding-left: 190px ;
text-decoration: none;
color: white;
font-size: 20px;
letter-spacing: .4px;

}
h2 {
color: white;
font-size: 30px;
text-shadow: 2px 2px #595858;
   
}
#night {
  background-image: url('night11.png');
  background-size: cover;
  background-color: #323C46;
  background-position: bottom;
  transition: 0.4s;
  background-color: #323C46;


}
#app {
  background-image: url('/img/night11.png');
  background-size: cover;
  background-color: #323C46;
  background-position: bottom;
  transition: 0.4s;
}

#none {
  text-decoration: none;
}


h1 {

  font-style: normal;
  font-weight: 700;
  color:white;
  
  font-size: 45px;
}
header.v-sheet.v-sheet--tile.theme--dark.v-toolbar.v-app-bar.v-app-bar--fixed {
   color: white;
}
#app {
  color: orange;
}

.theme--dark.v-application {
  color: orange;
}



#start {
  padding-left: 200px;
  padding-right: 200px;
  border-radius: 40px;
  font-size: 20px;
}

.start {
  padding-left: 200px;
  padding-right: 200px;
  border-radius: 40px;
  font-size: 20px;
}

.v-toolbar_content {  color: white;
}

.v-button_content{
  color: white;
}
.v-content_wrap{
  background-color: white;
}
header {
   color: orange;
}
.v-app-bar--fixed {
   color: white;
}
.top {
 color: orange;

}
#day {
  background-image: url('day4.png');
  background-size: cover;
  background-color: #323C46;
  background-position: bottom;
  transition: 0.4s;



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
  hidden: false,
    

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
