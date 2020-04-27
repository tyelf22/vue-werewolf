<template>
  <v-app v-bind:class="[isActive ? 'night' : 'day']">
    <v-content>
      <v-row align="center" justify="center">
          <v-col>
            <div class="text-center">
              <h1 id="phaseTitle">{{ gamePhaseTitle }}</h1>
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
              <v-card-text class="title" v-if="winner">
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
                <router-link to="/GameHistory">
                <v-btn
                  color="#aa602c"
                  text
                  @click="toggleDiv = false"
                >
                  End Game
                </v-btn>
                </router-link>
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

      <v-row align="center" justify="center" pb-4>
          <div v-responsive.lg.xl.md>
            <v-btn fab x-large rounded color="#AA5F2C" dark id="button" @click="toggleClass()" @click.native="updateValues()">Next Phase</v-btn>
          </div>
          <div v-responsive.sm.xs>
            <v-btn class="mb-4" fab medium rounded mb-2 color="#AA5F2C" dark id="buttonSm" @click="toggleClass()" @click.native="updateValues()">Next Phase</v-btn>
          </div>
      </v-row>
       
    </v-content>
  </v-app>
</template>

<script>

import { mapState, mapGetters, mapMutations } from "vuex";
import vueFlashcard from './Vue-Flashcard.vue';

export default {
  name: "Game",
  components: {vueFlashcard},

  data: () => ({
    toggleDiv: false,
    werewolves: [],
    isActive: true,
    gamePhaseTitle: 'Night Phase'
  }),

  mounted() {

    this.playerObjects.map(players => {
      if (players.role.name === 'werewolf' && players.inGame === true) {
        this.werewolves.push(players.name)
      }
    })
  },


  computed: {
    ...mapState(["playerObjects"]),
    ...mapState(["gameInfo"]),
    ...mapState(["winner"]),
    ...mapGetters(["countPlayerObjects"])
  },


  methods: {

    ...mapMutations(["inGameMut"]),
    ...mapMutations(["declareWinner"]),

    test(index, player) {
      this.inGameMut(index)

      if (player.role.name === 'werewolf' && player.inGame === false) {
        this.werewolves.splice(0, 1)

      } else if (player.role.name === 'werewolf' && player.inGame === true) {
        this.werewolves.push(player.name)
      }
      this.logGameEvent(player);
      this.gameOver();
    },
    gameOver() {
      let winner = '';
      let falseTruth = this.playerObjects.map(players => {
        return players.inGame
      })
      let falsy = falseTruth.filter(v => v).length - this.werewolves.length
      if (this.werewolves.length >= falsy) {
        winner = "Werewolves won!"
        this.toggleDiv = true
      } else if (this.werewolves.length == 0) {
        winner = "Villagers won!"
        this.toggleDiv = true
      }
      this.declareWinner(winner);
    },
    toggleClass: function () {
      this.isActive = !this.isActive;

      if (this.gamePhaseTitle === "Night Phase" || this.gamePhaseTitle === "") {
        this.gamePhaseTitle = "Day Phase";
      } else {
        this.gamePhaseTitle = "Night Phase";
      }
    },
    updateValues() {
      let gameInfo = [this.$store.state.gameInfo.gameId, this.playerObjects];
      this.$store.dispatch('updateGameDB', gameInfo);
    },
    clearGameInfo() {
      this.$store.dispatch('clearState', this.$store.state.gameInfo.gameId);
    },
    logGameEvent(player) {
      let gameEventStr;
      let gameInfo = this.$store.state.gameInfo;
      let newGameInfo;

      if (this.gamePhaseTitle === 'Night Phase' || this.gamePhaseTitle === "") {
        let werewolfNames = this.werewolves;

        let werewolfWord = this.werewolves.length < 2 ? 'f' : 'ves'
        let secondWerewolf = this.werewolves.length === 2 ? ' & ' + werewolfNames[1] : "";

        gameEventStr = 'The werewol' + werewolfWord + ' (' + werewolfNames[0] + secondWerewolf + ') killed ' + player.name + ' (' + player.role.name + ')!';

      } else if (this.gamePhaseTitle === 'Day Phase') {
        gameEventStr = 'The villagers killed ' + player.name + ' (' + player.role.name + ')!';
      }
      if (!player.inGame){
        gameInfo.gameLog.push(gameEventStr)
        newGameInfo = [gameInfo.gameId, gameInfo.gameLog];
        this.$store.dispatch('logGameEventDB', newGameInfo);
      }
    }
  }
}
</script>


<style scoped>

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

.day{
   background-image: url('day4.png');
   background-size: cover;
}

.night{
 background-image: url('night11.png');
 background-size: cover;
}
</style>