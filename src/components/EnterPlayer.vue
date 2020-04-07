<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <div class="text-center">
              <h1>WereWolf</h1>
              <h2>Enter Player Name</h2>
              <div>    
                <v-text-field label="Solo" placeholder="Name" dark v-model="playerName" solo></v-text-field>
              </div>
              <div>
                <v-btn x-large color="#AA5F2C" dark id="button" v-on:click="addPlayer">Add</v-btn>
              </div>
            </div>   
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <div class="text-center">
            <v-flex sm12 lg12 mb-3 pl-0>
              <v-container fluid>
                <!-- <h2 style="color: #4BB543">In Game</h2> -->
                <h2>Number of players: {{countPlayerObjects}}</h2>
                  <!-- <template v-for="(player, index) in groupOfPlayers">
                    <v-row class="mb-4 mt-3" align="center" justify="center" :key="index" style="color: #FFFFFF">
                      {{ player }}
                    </v-row>
                    </template> -->
<!-- #4BB543 -->
                      <v-card dark class="mt-3 d-flex align-center" v-for="(player, index) in playerObjects" :key="index">
                            <v-card-text class="headline" >{{player.name}}</v-card-text> 
                            <v-btn @click="deletePlayer(index)"><v-icon color="red">mdi-delete</v-icon></v-btn> 
                      </v-card>
                   
              </v-container>
            </v-flex>
          </div>        
        </v-row>
       
       
        <v-row align="center" justify="center">
          <router-link to="/AssignRoles" class="none">
            <div v-responsive.lg.xl.md>
              <v-btn fab x-large rounded color="#AA5F2C" dark id="button" v-on:click="assignRoles">Assign Roles</v-btn>
            </div>
            <div v-responsive.sm.xs>
              <v-btn fab medium rounded color="#AA5F2C" dark id="buttonSm" v-on:click="assignRoles">Assign Roles</v-btn>
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
  padding: 0 0 5rem;
}

h2 {
  padding-bottom: .2rem;
  color: white;
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

#players {
  width: 442px;
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
      title: 'This is the second page',
      playerName: "",
      // groupOfPlayers: []
    }),
    computed: {
      // players(){
      //   return this.$store.state.players
      // }
      ...mapState([
        'playerObjects'
      ]),
      ...mapGetters([
        'countPlayerObjects'
      ]),

    },
    // created() {
    //   this.$store.dispatch('retrievePlayers');
    // },
    methods: {
      // addPlayers() {
      //   this.groupOfPlayers.push(this.newPlayer);
      // },
      // beginGame(){
      //   this.$store.dispatch('beginGame', this.groupOfPlayers);
      // }

      ...mapMutations([
        'addPlayerObjects',
        'deletePlayerObject'
      ]),
      addPlayer() {
        this.addPlayerObjects(
          {
            name: this.playerName,
          }
        )
        this.playerName = ''
      },
      deletePlayer(index) {
        this.deletePlayerObject(index)
      }

    }
  }
</script>
