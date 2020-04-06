import Vue from 'vue'
import Vuex from 'vuex'
// import db from '../firebase';

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
    // retrievePlayers(state, players){
    //   state.players = players;
    // }
    addPlayerObjects: (state, player) => {
      state.playerObjects.push(player)
    }
  },
  actions: {
    // retrievePlayers(context) {
      // db.collection('players').get().then(querySnapshot => {
      //   let tempArr = [];
      //   querySnapshot.forEach(doc => {
      //     console.log(doc.data());
      //     console.log(doc.data().name);
      //     const playerData = {
      //       name: doc.data().name,
      //       role: doc.data().role
      //     };
      //     tempArr.push(playerData);
      //   });
      //   context.commit('retrievePlayers', tempArr);
      // });
    },
    // beginGame: (context, addedPlayers) => {
    //   addedPlayers.forEach(item => {
    //     db.collection('players').add({
    //       name: item
    //     })
    //   });  
    //   context.dispatch('retrievePlayers', addedPlayers);
    // }
  // modules: {
  // }
})
