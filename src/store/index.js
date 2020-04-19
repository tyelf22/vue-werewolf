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
      state.players = gameInfo;
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
        context.commit('getPlayersFromDb', gameInfo);
      });
    },
    beginGame: (context, gameInfo) => {
      db.collection('game_sessions').doc(gameInfo[3]).set({
        players: gameInfo[0],
        phase: gameInfo[1],
        isRunning: gameInfo[2]
      });
      context.dispatch('getPlayersFromDb', gameInfo[3]);
    }
  },
  modules: {}
})
