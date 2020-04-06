import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    retrievePlayers(state, players){
      state.players = players;
    },
    getPlayersFromDb(state, players){
      state.players = players;
    }
  },
  
  actions: {
    retrievePlayers(context) {
      
    },
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
          name: item
        })
      });  
      context.dispatch('getPlayersFromDb', addedPlayers);
    }
  },
  modules: {
  }
})
