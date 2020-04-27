<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col>
            <div class="text-center">
              <h1>Game Log</h1>
              <h2>{{ winner }}</h2>
              <img v-if="winner === 'Werewolves won!'" src="./werewolf-trans.png" alt="werewolf image" height="150"/>
              <img v-else-if="winner === 'Villagers won!'" src="./villager-trans.png" alt="villagers image"  height="150"/>
            </div>
          </v-col>
        </v-row>
        <div id="playerContainer">
          <v-container>
            <v-row justify="center">
              <div class="text-center">
                <v-simple-table dark>
                  <template v-slot:default>
                    <thead>
                    </thead>
                    <tbody>
                    <tr v-for="(event, index) in gameInfo.gameLog" :key="index">
                      <td v-if="index % 2 === 0" align="left" style="border-right: 6px solid #323C46">Night</td>
                      <td v-else align="left" style="border-right: 6px solid #323C46">Day</td>
                      <td align="left">{{ event }}</td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-row>
                </v-row>
              </div>
            </v-row>
          </v-container>
        </div>
        <v-row align="center" justify="center">
          <router-link to="/EnterPlayer" class="none" v-on:click.native="restartGame()">
            <div v-responsive.lg.xl.md>
              <v-btn fab x-large rounded color="#AA5F2C" dark id="button">Restart Game</v-btn>
            </div>
            <div v-responsive.sm.xs>
              <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm">Restart Game</v-btn>
            </div>
          </router-link>
        </v-row>
        <v-row align="center" justify="center">
          <router-link to="/EnterPlayer" class="none" v-on:click.native="clearGameInfo()">
            <div v-responsive.lg.xl.md>
              <v-btn fab x-large rounded color="#AA5F2C" dark id="button">New Game</v-btn>
            </div>
            <div v-responsive.sm.xs>
              <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm">New Game</v-btn>
            </div>
          </router-link>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


  <script>

import { mapState } from "vuex";

export default {
  name: "GameHistory",
  components : {  },

  data: () => ({
    toggleDiv: false,
    werewolves: [],
    isActive: true
  }),
   
  mounted() {
  },


  computed: {
    ...mapState(["gameInfo"]),
    ...mapState(["winner"]),
    ...mapState(["playerObjects"]),
  },
  

  methods: {
    restartGame(){
      let newPlayers = this.newPlayers();
      let gameInfo = [this.$store.state.gameInfo.gameId, newPlayers]
      this.$store.dispatch('restartGame', gameInfo);
    },
    clearGameInfo(){
      this.$store.dispatch('clearState', this.$store.state.gameInfo.gameId);
    },
    newPlayers() {
      let newObj;
      let tempArr = [];
      for (let i = 0; i < this.playerObjects.length; i++) {
        newObj =
            {
              name: this.playerObjects[i].name,
              inGame: true,
            }
        tempArr.push(newObj);
      }
      return tempArr;
    }
  }
};
</script>


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
    padding: 0 0 2rem;
  }
  h2 {
    padding-bottom: .2rem;
    color: white;
  }
  h2 span {
    font-size: 1rem;
  }
  #button {
    padding-left: 200px;
    padding-right: 200px;
    border-radius: 40px;
    font-size: 25px;
    margin-bottom: 2rem;
  }
  #buttonSm {
    padding-left: 150px;
    padding-right: 150px;
    border-radius: 40px;
    font-size: 20px;
    margin-bottom: 2rem;
  }
  #playerContainer{
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
</style>