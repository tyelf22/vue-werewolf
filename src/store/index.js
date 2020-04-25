import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameInfo: {},
    playerObjects: [],
    gameID: ' ',
    gameLog: {},
    winner: ''
  },
  getters: {
    countPlayerObjects: state => {
      return state.playerObjects.length
    }
  },
  mutations: {
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
    },
    restartGame: (state, players) => {
      state.gameInfo = {};
      state.playerObjects = players;
    },
    declareWinner: (state, winner) => {
      state.winner = winner;
    }
  },
  actions: {
    getGameInfo(context, gameID) {
      db.collection('game_sessions').doc(gameID).get().then(query => {
        let queryData = query.data();
        const gameInfo = {
          players: queryData.players,
          gameLog: queryData.gameLog,
          gameId: query.id
        };
        context.commit('getGameInfo', gameInfo);
      });
    },
    beginGame: (context, gameInfo) => {
      db.collection('game_sessions').doc(gameInfo[1]).set({
        players: gameInfo[0],
        gameLog: []
      });
      context.dispatch('getGameInfo', gameInfo[1]);
    },
    updateGameDB: (context, gameInfo) => {
      console.log(gameInfo);
      db.collection('game_sessions').doc(gameInfo[0]).update({
        players: gameInfo[1],
      });
      context.dispatch('getGameInfo', gameInfo[0]);
    },
    logGameEventDB: (context, gameInfo) => {
      console.log(gameInfo);
      db.collection('game_sessions').doc(gameInfo[0]).update({
        gameLog: gameInfo[1]
      });
      context.dispatch('getGameInfo', gameInfo[0]);
    },
    deleteGameFromDB: (context, gameID) => {
      db.collection('game_sessions').doc(gameID).delete();
    },
    restartGame: (context, gameInfo) => {
      context.commit('restartGame', gameInfo[1]);
      context.dispatch('deleteGameFromDB', gameInfo[0]);
    },
    clearState: (context, gameID) => {
      context.commit('clearState');
      context.dispatch('deleteGameFromDB', gameID);
    }
  },
  modules: {}
})
