import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        players: [
            {
                name: 'Player 1',
                role: 'Werewolf'
            },
            {
                name: 'Player 2',
                role: 'Civilian'
            }
        ]
        
    },
    getters: {
        allPlayers: (state) => state.players,
        countPlayers: (state) => state.players.length,
    },

    mutations: {
        ADD_PLAYER: (state, player) => state.players.push(player)
    },

    actions: {

    }
})