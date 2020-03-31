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
