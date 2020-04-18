import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // players: []
    playerObjects: [],
  },
  getters: {
    countPlayerObjects: state => {
      return state.playerObjects.length
    }
  },
  mutations: {
    retrievePlayers(state, players){
      state.players = players;
    },
    getPlayersFromDb(state, players) {
      state.players = players;
    },
    addPlayerObjects: (state, player) => {
      state.playerObjects.push(player)
    },
    deletePlayerObject: (state, player) => {
      state.playerObjects.splice(player, 1)
    },
    inGameMut: (state, index) => {
      state.playerObjects[index].inGame == true ? state.playerObjects[index].inGame = false : state.playerObjects[index].inGame = true
    }
  },
  actions: {
    getPlayersFromDb(context) {
      db.collection('players').get().then(querySnapshot => {
        let tempArr = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          console.log(doc.data().name);
          const playerData = {
            name: doc.data().name,
            role: doc.data().role
          };
          tempArr.push(playerData);
        });
        context.commit('getPlayersFromDb', tempArr);
      });
    },
    beginGame: (context, gameInfo) => {
      console.log(gameInfo);
      db.collection('game_sessions').add({
        players: gameInfo[0],
        phase: gameInfo[1],
        isRunning: gameInfo[2]
      })
      // context.dispatch('getPlayersFromDb', gameInfo);
    }
  },
  modules: {}
})
