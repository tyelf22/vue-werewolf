<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <div class="text-center">
              <h1>WereWolf</h1>
              <br/>
              <br/>

              <p>Enter Player Name:</p>
              <br/>
              <br/>
              <div>    
                <v-text-field
                  label="Solo"
                  placeholder="Name"
                  v-model="playerName"
                  solo ></v-text-field>
              </div>
              
                <div v-responsive.lg.xl.md>
                  <v-btn class="mb-10" x-large color="#AA5F2C" dark id="start" v-on:click="addPlayer">
                    add</v-btn>
                    </div>
                    <div v-responsive.sm.xs>
                  <v-btn class="mb-10" medium color="#AA5F2C" dark id="startSm_2" v-on:click="addPlayer">
                    add</v-btn>
              </div>
              </div>
                  
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <div class="text-center">
              <v-flex sm12 lg12 mb-3 pl-0>
                <v-container fluid>
                  <!-- <h2 style="color: #4BB543">In Game</h2> -->
                  <h2 style="color: #bcf603">Number of players: {{countPlayerObjects}}</h2>
                  <!-- <template v-for="(player, index) in groupOfPlayers">
                    <v-row class="mb-4 mt-3" align="center" justify="center" :key="index" style="color: #FFFFFF">
                      {{ player }}
                    </v-row>
                    </template> -->
<!-- #4BB543 -->
                    
                      <v-card dark class="mt-3 px-5 d-flex align-center" v-for="(player, index) in playerObjects" :key="index">
                            <v-card-text class="headline" >{{player.name}}</v-card-text> 
                            <v-btn @click="deletePlayer(index)"><v-icon color="red">mdi-delete</v-icon></v-btn> 
                      </v-card>
                   
              </v-container>
            </v-flex>
            <br>
            <br>
          </div>        
        </v-row>
       
       
        <v-row align="center" justify="center">
           <div v-responsive.lg.xl.md>   <v-btn to="/AssignRoles" fab x-large rounded color="#AA5F2C" dark id="start" v-on:click="assignRoles">begin game</v-btn></div>
          <div v-responsive.sm.xs>   <v-btn to="/AssignRoles" fab medium rounded color="#AA5F2C" dark id="startSm" v-on:click="assignRoles">begin game</v-btn></div>

        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
 
<style scoped>
#startSm_2 {
     padding-left: 125px;
   padding-right: 12px;
   border-radius: 40px;
   font-size: 20px;
}

#startSm {
   padding-left: 150px;
   padding-right: 150px;
   border-radius: 40px;
   font-size: 20px;
   
}
.next {
  padding-left: 190px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  letter-spacing: 0.4px;
}
.field {
  color: white;
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
