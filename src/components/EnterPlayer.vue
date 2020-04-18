<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <div class="text-center">
              <h1>WereWolf</h1>
              <h2>Enter Player Name <span>(Up to 10 Players)</span></h2>
              <div>    
                <v-text-field label="Solo" placeholder="Name" dark v-model="playerName" solo></v-text-field>
              </div>
              <div v-responsive.lg.xl.md>
                  <v-btn class="mb-10" x-large color="#AA5F2C" dark id="button" v-on:click="addPlayer">
                  add</v-btn>
                </div>
                <div v-responsive.sm.xs>
                  <v-btn class="mb-10" medium color="#AA5F2C" dark id="buttonSm_2" v-on:click="addPlayer">
                  add</v-btn>
                </div>
            </div>   
          </v-col>
        </v-row>
        <v-row  justify="center">
          <div class="text-center">
            <v-flex sm12 md12 mb-3 pl-0 class="playerFlex">
                <h2>Number of players: {{countPlayerObjects}}</h2>
                    <div v-responsive.lg.xl.md>
                      <v-card dark class="mt-3 px-5 d-flex align-center" id="players" v-for="(player, index) in playerObjects" :key="index">
                        <v-card-text class="headline" >{{player.name}}</v-card-text> 
                        <v-btn @click="deletePlayer(index)" id="deleteBtn"><v-icon color="red">mdi-delete</v-icon></v-btn> 
                      </v-card>
                    </div>
                    <div v-responsive.sm.xs>
                      <v-card dark class="mt-3 px-5 d-flex align-center" id="players_Sm" v-for="(player, index) in playerObjects" :key="index">
                        <v-card-text class="headline" >{{player.name}}</v-card-text> 
                        <v-btn @click="deletePlayer(index)" id="deleteBtn"><v-icon color="red">mdi-delete</v-icon></v-btn> 
                      </v-card>
                    </div>
            </v-flex>
          </div>        
        </v-row>
        <v-row align="center" justify="center">
          <router-link to="/AssignRoles" class="none">
            <div v-responsive.lg.xl.md>
              <v-btn fab x-large rounded color="#AA5F2C" dark id="button">Assign Roles</v-btn>
            </div>
            <div v-responsive.sm.xs>
              <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm">Assign Roles</v-btn>
            </div>
          </router-link>
        </v-row>
        <v-row align="center" justify="center">
          <router-link to="/EnterPlayer" class="none">
            <div v-responsive.lg.xl.md>
              <v-btn fab x-large rounded color="#AA5F2C" dark id="button">Back</v-btn>
            </div>
            <div v-responsive.sm.xs>
              <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm">Back</v-btn>
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

#buttonSm_2 {
  padding-left: 125px;
  padding-right: 125px;
  border-radius: 40px;
  font-size: 20px;
}

.playerFlex{
  padding-bottom: 2rem;
}

#players {
  width: 442px;
  text-align: left;
}

#players_Sm {
  width: 295px;
  text-align: left;
}

.v-input {
  font-size: 20px!important;
}

.v-application .headline {
  font-size: 20px!important;
}
</style>


<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'EnterPlayer',

    data: () => ({
      playerName: "",
    }),
    computed: {
      ...mapState([
        'playerObjects'
      ]),
      ...mapGetters([
        'countPlayerObjects'
      ]),

    },
    methods: {
      ...mapMutations([
        'addPlayerObjects',
        'deletePlayerObject'
      ]),
      addPlayer() {
        this.addPlayerObjects(
          {
            name: this.playerName,
            inGame: true,
          }
        )
        this.playerName = ''
      },
      deletePlayer(index) {
        this.deletePlayerObject(index)
      },
      beginGame(){
        this.$store.dispatch('beginGame', this.playerObjects);
      }
    }
  }
</script>
