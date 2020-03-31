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

<<<<<<< HEAD
              <div>
                <v-text-field v-model="newPlayer" label="Solo" placeholder="Name" solo></v-text-field>
              </div>
              <div>
                <!-- <router-link to="/SecondPage" class="none"> -->
                  <v-btn @click="addPlayer" x-large color="#AA5F2C" dark id="start">add</v-btn>
                <!-- </router-link> -->
              </div>
              <br />
              <br />
              <v-list class="mt-2" v-for="(player, index) in allPlayers" :key="index">
                <v-list-item >
                  <v-list-item-content > 
                    <v-list-item-title v-text="player.name" ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item> 
              </v-list>
              <!-- <div>
                Number of Players: {{countPlayers}}
              </div> -->
            </div>
=======
 
  <div>
                    
          <v-text-field
            label="Solo"
            placeholder="Name"
            solo 
          ></v-text-field>
    
      </div>
<div>
<router-link to="/SecondPage" class="none">
    <v-btn x-large color="#AA5F2C" dark id="start">
      add</v-btn></router-link> 
      <v-flex sm12 lg12 mb-3 pl-0 pr-4>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Role</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(player, index) in players" :key="index"  style="height: 75px">
            <td>{{ player.name }}</td>
            <td>{{ player.role }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-flex>
</div>
<br>
<br>
 
  </div>    
       
>>>>>>> firebase-setup
          </v-col>
        </v-row>
        <router-link to="/AssignRoles" class="next">Next Step</router-link>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "AssignRoles",
  data() {
    return {
      newPlayer: '',
    }
  },

  computed: {
    ...mapGetters(['allPlayers', 'countPlayers']),
  },
  methods: {
    ...mapMutations([
      'ADD_PLAYER'
    ]),
    addPlayer: function() {
      this.ADD_PLAYER(
        {
          name: this.newPlayer
        }
      )
      this.newPlayer = ''
    }
  },
}
</script>



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
<<<<<<< HEAD
=======
<script>
  export default {
    name: 'AssignRoles',


    data: () => ({
      title: 'This is the second page'
    }),
    computed: {
      players(){
        return this.$store.state.players
      }
    },
    created() {
      this.$store.dispatch('retrievePlayers');
    }
  }
</script>
>>>>>>> firebase-setup
