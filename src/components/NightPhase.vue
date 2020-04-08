<template>
  <v-app id="night">
   <v-content>
     <div class="text-center"><h2>Night Phase</h2></div>

     <div class="team">
    <v-container class="my-3">
    <v-layout row wrap>
 
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
<v-card-actions class="margin">

     <v-btn block medium rounded color="#0B98DE" dark>Save</v-btn>

      

 
    


</v-card-actions>
<v-card-actions>
<v-btn block medium rounded color="#ff2349" dark class="testing">Kill</v-btn>
  


</v-card-actions>
</v-card>
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


.testing {
  padding: 70px;
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
.v-toolbar_content {
  color: white;
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
</style>


<script>
import { mapState, mapGetters, mapMutations } from "vuex";
// import roles from "./assets/roles.js"

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
    // //Assign roles that is based on number of players playing
    // randomizeRolesAlg(num, ...roles) {
    //   const initialRoleTypes = [
    //       {
    //           "name": "werewolf",
    //           "description": "Take over the village",
    //           "imageURL": "./Werewolf.png"
    //       },
    //       {
    //           "name": "werewolf",
    //           "description": "Take over the village",
    //           "imageURL": "./Werewolf.png"
    //       },
    //       {
    //           "name": "doctor",
    //           "description": "Heal the innocent",
    //           "imageURL": "./Doctor.png"
    //       },
    //       {
    //           "name": "seer",
    //           "description": "Find the werewolves",
    //           "imageURL": "./Seer.png"
    //       },
    //       {
    //           "name": "villager",
    //           "description": "Defend the village",
    //           "imageURL": "./Villager.png"
    //       }
    //   ];
      // const roleTypes = initialRoleTypes.concat(roles); //concat the roles passed through rest operator to initial role types

    //   //Loop through player objects
    //   this.playerObjects.map(player => {
    //     let randomNum = Math.floor(Math.random() * num); //get random number determined by number of players playing
    //     player.role = roleTypes[randomNum]; //assign player role using array of roles
    //     roleTypes.splice(randomNum, 1); //delete by randomNum index
    //     num--; //decrement passed in number so next random number will account for the spliced role from array
    //   });
    // },
    //Switch statement to call algorithm based on number of players
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
  // //Mount the playerObjects with lifecycle hook
  // beforeMount() {
  //   this.assignRoles();
  // }
};
</script>
