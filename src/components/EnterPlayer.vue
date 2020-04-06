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
              <div>
                  <v-btn class="mb-10" x-large color="#AA5F2C" dark id="start" v-on:click="addPlayer">
                    add</v-btn>
              </div>
            </div>        
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <div class="text-center">
              <v-flex sm12 lg12 mb-3 pl-0>
                <v-container fluid>
                  <h2 style="color: #4BB543">Number of players: {{countPlayerObjects}}</h2>
                      <v-card dark class="mt-3 px-5" v-for="(player, index) in playerObjects" :key="index">
                        <v-card-text class="headline" >{{player.name}}</v-card-text> 
                      </v-card>
              </v-container>
            </v-flex>
            <br>
            <br>
          </div>        
        </v-row>
        <v-row align="center" justify="center">
          <v-btn to="/AssignRoles" class="mb-5" x-large color="#AA5F2C" dark id="start" v-on:click="assignRoles">begin game</v-btn>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
 
<style scoped>
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
        'addPlayerObjects'
      ]),
      addPlayer() {
        this.addPlayerObjects(
          {
            name: this.playerName,
            // role: this.assignRoles()
          }
        )
      },
      randomizeRolesAlg(num, ...roles) {
        const initialRoleTypes = ['werewolf', 'werewolf', 'doctor', 'seer', 'villager']
        const roleTypes = initialRoleTypes.concat(roles)
        console.log(roleTypes)

        //Loop through player objects
        this.playerObjects.map(player => {
          let randomNum = Math.floor(Math.random() * num)
          player.role = roleTypes[randomNum]
          roleTypes.splice(randomNum, 1)
          num--
        })

      },
      assignRoles() {
        switch(this.countPlayerObjects) {
          case 5:
            // code block
            this.randomizeRolesAlg(5)
            break;
          case 6:
            // code block
            this.randomizeRolesAlg(6, 'villager')
            break;
          case 7:
            // code block
            this.randomizeRolesAlg(7, 'villager', 'villager')
            break;
          case 8:
            // code block
            this.randomizeRolesAlg(8, 'villager', 'villager', 'villager')
            break;
          case 9:
            //code block
            this.randomizeRolesAlg(9, 'villager', 'villager', 'villager', 'villager')
            break
          default:
          console.log('there was an error!!!!!!')
            // code block
        }
        console.log(this.playerObjects)
      }
    }
  }
</script>
