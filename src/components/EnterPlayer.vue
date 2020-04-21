<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <div class="text-center">
              <h1>WereWolf</h1>
              <h2>Enter Player Name</h2>
              <div id="enterField">    
                <v-text-field label="Solo" placeholder="Name" dark v-model="playerName" solo></v-text-field>
              </div>
              <div v-responsive.lg.xl.md>
                <v-btn v-if = "countPlayerObjects < 10" class="mb-10" x-large color="#AA5F2C" dark id="addButton" v-on:click="addPlayer">
                add</v-btn>
                <v-btn v-else disabled class="mb-10" x-large color="#AA5F2C" dark id="addButton">
                add</v-btn>
              </div>
              <div v-responsive.sm.xs>
                <v-btn v-if = "countPlayerObjects < 10" class="mb-10" medium color="#AA5F2C" dark id="addButtonSm" v-on:click="addPlayer">
                add</v-btn>
                <v-btn v-else disabled class="mb-10" x-large color="#AA5F2C" dark id="addButtonSm">
                add</v-btn>
              </div>
            </div>   
          </v-col>
        </v-row>
        <!-- <v-row justify="center">
          <div class="text-center">
            <h2>Number of players: {{countPlayerObjects}}</h2>
            <v-flex sm12 md12 mb-3 pl-0 class="playerFlex">
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
        </v-row> -->
        <div v-responsive.lg.xl id="playerContainer">
          <v-container>
            <v-row justify="center">
              <div class="text-center">
                <h2>Number of players: {{countPlayerObjects}}</h2>
                <v-row>
                  <v-col cols="6" v-for="(player, index) in playerObjects" :key="index">
                    <v-card dark class="px-5 d-flex align-center" id="players">
                      <v-card-text class="headline" >{{player.name}}</v-card-text> 
                      <v-btn @click="deletePlayer(index)" id="deleteBtn"><v-icon color="red">mdi-delete</v-icon></v-btn> 
                    </v-card> 
                  </v-col>
                </v-row>
              </div>        
            </v-row>
          </v-container>
        </div>
        <div v-responsive.md id="playerContainerMd">
          <v-container>
            <v-row justify="center">
              <div class="text-center">
                <h2>Number of players: {{countPlayerObjects}}</h2>
                <v-row>
                  <v-col cols="6" v-for="(player, index) in playerObjects" :key="index">
                    <v-card dark class="px-5 d-flex align-center" id="playersMd">
                      <v-card-text class="headline" >{{player.name}}</v-card-text> 
                      <v-btn @click="deletePlayer(index)" id="deleteBtn"><v-icon color="red">mdi-delete</v-icon></v-btn> 
                    </v-card> 
                  </v-col>
                </v-row>
              </div>        
            </v-row>
          </v-container>
        </div>
        <div v-responsive.sm.xs id="playerContainerSm">
          <v-container>
            <v-row justify="center">
              <div class="text-center">
                <h2>Number of players: {{countPlayerObjects}}</h2>
                <v-row>
                  <v-col cols="12" v-for="(player, index) in playerObjects" :key="index">
                    <v-card dark class="px-5 d-flex align-center" id="playersSm">
                      <v-card-text class="headline" >{{player.name}}</v-card-text> 
                      <v-btn @click="deletePlayer(index)" id="deleteBtn"><v-icon color="red">mdi-delete</v-icon></v-btn> 
                    </v-card> 
                  </v-col>
                </v-row>
              </div>        
            </v-row>
          </v-container>
        </div>
      
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

#addButton {
  padding-left: 135px;
  padding-right: 135px;
  border-radius: 40px;
  font-size: 25px;
  margin-bottom: 2rem;
}

#addButtonSm {
  padding-left: 145px;
  padding-right: 145px;
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

#playerContainer{
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

#playerContainerMd{
  width: 100%;
  padding-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
}

#playerContainerSm{
  width: 100%;
  padding-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
}

#players {
  width: 100%;
  min-width: 316.5px;
  min-height: 64px;
  text-align: left;
}

#playersMd {
  width: 100%;
  min-width: 360px;
  min-height: 64px;
  text-align: left;
}

#playersSm {
  width: 100%;
  min-width: 336px;
  min-height: 64px;
  text-align: left;
}

#enterField {
  width: 335px;
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
      }
    }
  }
</script>
