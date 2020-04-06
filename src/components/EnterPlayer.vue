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
                  v-model="newPlayer"
                  solo ></v-text-field>
              </div>
              <div>
                  <v-btn class="mb-10" x-large color="#AA5F2C" dark id="start" v-on:click="addPlayers">
                    add</v-btn>
              </div>
            </div>        
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <div class="text-center">
              <v-flex sm12 lg12 mb-3 pl-0>
                <v-container fluid>
                  <h2 style="color: #4BB543">In Game</h2>
                  <template v-for="(player, index) in groupOfPlayers">
                    <v-row class="mb-4 mt-3" align="center" justify="center" :key="index" style="color: #FFFFFF">
                      {{ player }}
                    </v-row>
                    </template>
              </v-container>
            </v-flex>
            <br>
            <br>
          </div>        
        </v-row>
        <v-row align="center" justify="center">
          <v-btn class="mb-5" x-large color="#AA5F2C" dark id="start" v-on:click="beginGame">begin game</v-btn>
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
  export default {
    name: 'AssignRoles',  
    data: () => ({
      title: 'This is the second page',
      newPlayer: "",
      groupOfPlayers: []
    }),
    computed: {
      players(){
        return this.$store.state.players
      }
    },
    created() {
      this.$store.dispatch('retrievePlayers');
    },
    methods: {
      addPlayers() {
        this.groupOfPlayers.push(this.newPlayer);
      },
      beginGame(){
        this.$store.dispatch('beginGame', this.groupOfPlayers);
      }
    }
  }
</script>
