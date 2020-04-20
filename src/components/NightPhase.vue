
<template>

   <v-app id="night" v-bind:class="[isActive ? 'night' : 'day']"> 
    <v-content>
      <v-row align="center" justify="center">
          <v-col>
            <div class="text-center">
              <h1 id="phaseTitle">Night Phase</h1>
            </div>   
          </v-col>
        </v-row>

        <!-- ************ V-DIALOG ************* -->
      <div> 
        <v-row justify="center">
          <v-dialog
            v-model="toggleDiv"
            max-width="290"
          >
            <v-card>
              <v-card-title class="display-1">Game Over</v-card-title>
              <v-card-text class="title" >
                {{ winner }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#aa602c"
                  text
                  @click="toggleDiv = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="#aa602c"
                  text
                  @click="toggleDiv = false"
                >
                  Restart Game
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>

      <v-container class="my-3">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 class="players" justify="center" v-for="(player, index) in playerObjects" :key="index">
            <vueFlashcard
            @click.native="test(index, player)"
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
       
        <!-- <router-link to="/DayPhase" class="none"> -->
          <div v-responsive.lg.xl.md>
            <v-btn fab x-large rounded color="#AA5F2C" dark id="button" @click="toggleClass()">Next Phase</v-btn>
       
          </div>
          <div v-responsive.sm.xs>
            <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm" @click="toggleClass()">Next Phase</v-btn>
          </div>
        <!-- </router-link> -->
      </v-row>
       
    </v-content>
  </v-app>
</template>

<script>

import { mapState, mapGetters, mapMutations } from "vuex";
import vueFlashcard from './Vue-Flashcard.vue';

export default {
  name: "NightPhase",
  components : { vueFlashcard },

  data: () => ({
    winner: '',
    toggleDiv: false, 
    werewolves: [],
    isActive: true
  
   
  

  }),
   
   
  

  mounted() {
   
    this.playerObjects.map(players => {
      if(players.role.name == 'werewolf' && players.inGame == true) {
        this.werewolves.push(players.name)
      }
    })
    console.log('werewolves initial length is: ' + this.werewolves)
  },


  computed: {
    ...mapState(["playerObjects"]),
    ...mapGetters(["countPlayerObjects"])
  },
  

  methods: {

       ...mapMutations(["inGameMut"]),
  
    test(index, player) {      
      this.inGameMut(index)  

      if(player.role.name == 'werewolf' && player.inGame == false){
        this.werewolves.splice(0, 1)
         
      }else if(player.role.name == 'werewolf' && player.inGame == true){
        this.werewolves.push(player.name)
      }
      console.log(this.werewolves.length)

      this.gameOver()
      
    },
    toggleClass: function(){
        this.isActive = !this.isActive;
 let title = new String()
 title = document.getElementById("phaseTitle").innerHTML
 if(title == "Night Phase"  || title == "")
    {

    title = document.getElementById("phaseTitle").innerHTML = "Day Phase"
  }
    else
    
       title = document.getElementById("phaseTitle").innerHTML = "Night Phase"

    },


    

    },


    gameOver() {

      let falseTruth = this.playerObjects.map(players => {
        return players.inGame
      })
      let falsy = falseTruth.filter(v => v).length - this.werewolves.length

      if(this.werewolves.length >= falsy){
        this.winner = "Werewolves won!"
        this.toggleDiv = true
      } else if (this.werewolves.length == 0) {
        this.winner = "Villagers won!"
        this.toggleDiv = true
      } 
    },
    

  
}
</script>


<style scoped>

.day{
   background-image: url('day4.png');
   background-size: cover;
  background-color: #323C46;
  background-position: bottom;
  transition: 0.4s;

    
}

.night{
 background-image: url('night11.png');
 background-size: cover;
  background-color: #323C46;
  background-position: bottom;
  transition: 0.4s;
      
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


</style>

