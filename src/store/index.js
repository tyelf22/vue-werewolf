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
    beginGame: (context, addedPlayers) => {
      addedPlayers.forEach(item => {
        db.collection('players').add({
          name: item.name,
          role: item.role,
          inGame: true
        })
      });  
      context.dispatch('getPlayersFromDb', addedPlayers);
    }
  },
  modules: {}
})
