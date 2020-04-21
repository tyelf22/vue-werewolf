import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameInfo: {},
    playerObjects: [],
    gameID: ' '
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
    getGameInfo(state, gameInfo) {
      state.gameInfo = gameInfo;
    },
    addPlayerObjects: (state, player) => {
      state.playerObjects.push(player)
    },
    deletePlayerObject: (state, player) => {
      state.playerObjects.splice(player, 1)
    },
    inGameMut: (state, index) => {
      state.playerObjects[index].inGame == true ? state.playerObjects[index].inGame = false : state.playerObjects[index].inGame = true
    },
    getGameID: (state, id) => {
      state.gameID = id;
    },
    clearState: (state) => {
      state.gameInfo = {};
      state.playerObjects = [];
    }
  },
  actions: {
    getGameInfo(context, gameID) {
      db.collection('game_sessions').doc(gameID).get().then(query => {
        console.log(query.data());
        let queryData = query.data();
        const gameInfo = {
          players: queryData.players,
          phase: queryData.phase,
          isRunning: queryData.isRunning,
          gameId: query.id
        };
        context.commit('getGameInfo', gameInfo);
      });
    },
    beginGame: (context, gameInfo) => {
      db.collection('game_sessions').doc(gameInfo[1]).set({
        players: gameInfo[0],
      });
      context.dispatch('getGameInfo', gameInfo[1]);
    },
    deleteGameFromDB: (context, gameID) => {
      db.collection('game_sessions').doc(gameID).delete();
    },
    clearState: (context, gameID) => {
      context.commit('clearState');
      context.dispatch('deleteGameFromDB', gameID);
    }
  },
  modules: {}
})
