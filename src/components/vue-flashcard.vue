<template>
    <div>
        <div @click="isToggle=!isToggle" v-bind:style="{backgroundColor: colorFront, color: colorTextFront}" v-show="!isToggle" class="animated flipInX flashcard">
            <!-- <div class="card-header" style="padding-bottom: 15px;"> {{headerFront}} </div> -->
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeFront,fontWeight: 'bold'}">{{ player.name }}</p>
                <img v-if="imgFront!=''" :src="'./'+player.role.name.toLowerCase()+'.png'" >
            </div>
            <div class="card-footer">{{ player.name }}</div>
        </div>
        <div @click="isToggle=!isToggle" v-bind:style="{backgroundColor: colorBack, color: colorTextBack}" v-show="isToggle" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{ player.name }}</div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeBack, fontWeight: 'bold'}">{{back}}</p>
                <img v-if="imgBack!=''" :src="imgBack" width="200" height="200">
            </div>
            <div class="card-footer">{{ player.name }}</div>
        </div>
    </div>
</template>



<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
    name: "AssignRoles",
    data() {
        return {
            isToggle: false,
        }
    },
    
    computed: {
    ...mapState(["playerObjects"]),
    ...mapGetters(["countPlayerObjects"])
  },
      methods: {
    ...mapMutations(["addPlayerObjects"]),
    addPlayer() {
      this.addPlayerObjects({
        name: this.playerName
      });
    },
      assignRoles() {
        const villagerObj = {
            "name": "villager",
            "description": "Defend the village",
            "imageURL": "./Villager.png"
        };
        const werewolfObj = {
            "name": "werewolf",
            "description": "Take over the village",
            "imageURL": "./Werewolf.png"
        };
        switch (this.countPlayerObjects) {
            case 5:
              this.randomizeRolesAlg(5);
              break;
            case 6:
              this.randomizeRolesAlg(6, villagerObj); //add another villager to array. We can add whatever extra roles provided the amount of players playing
              break;
            case 7:
              this.randomizeRolesAlg(7, villagerObj, villagerObj);
              break;
            case 8:
              this.randomizeRolesAlg(8, villagerObj, villagerObj, werewolfObj);
              break;
            case 9: //max players is set to 9 as of right now. We can adjust the cases and roles however we'd like.
              this.randomizeRolesAlg(9, villagerObj, villagerObj, werewolfObj, villagerObj);
              break;
            default:
              console.log("there was an error!");
        }
            console.log(this.playerObjects);
    },
    beginGame(){
        this.$store.dispatch('beginGame', this.playerObjects);
    },
    getImage(path) {
        console.log("Hit me!" + path);
        return require(path)
    }
  },
    props: {
        imgFront: {
            type: String,
            default: ''
        },
        imgBack: {
            type: String,
            default: ''
        },
        front: {
            type: String,
            default: ''
        },
        back: {
            type: String,
            default: 'HEy'
        },
        textSizeFront: {
            type: String,
            default: '2em'
        },
        textSizeBack: {
            type: String,
            default: '2em'
        },
        colorTextFront: {
            type: String,
            default: 'black'
        },
        colorTextBack: {
            type: String,
            default: 'white'
        },
        colorFront: {
            type: String,
            default: 'white'
        },
        colorBack: {
            type: String,
            default: '#2ecc71'
        },
        headerFront: {
            type: String,
            default: ''
        },
        headerBack: {
            type: String,
            default: 'Whats up'
        },
      
       
    }
}
</script>


<style scoped>
.center {
    text-align: center;
}
.flashcard {
    cursor: pointer;
    border-radius: 10px;
    margin: 20px;
    padding: 25px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    text-align: center;
}
.flashcard:hover {
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.8);
}
.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}
@keyframes flipInX {
    from {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        animation-timing-function: ease-in;
    }
    60% {
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
    }
    80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
        transform: perspective(400px);
    }
}
.flipInX {
    backface-visibility: visible !important;
    animation-name: flipInX;
}
</style>


