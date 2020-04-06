<template>
<v-app id="night">
<v-content>
<div class="text-center"><h2>Night Phase</h2></div>
<div class="team">
<v-container class="my-3">

<v-layout row wrap>

<v-flex xs6 sm4 md4 lg3 v-for="person in team" :key="person.name">

<v-card flat class="text-xs-center ma-4" id="border">
   <v-responsive class="pt-2">
      <div class="text-center">
      <img src="./villa.png" class="cen">
      </div>

</v-responsive> 
 

<v-card-text>
    <div class="subheading"><div class="text-center">{{ person.name }}</div></div>
    <div class="gray--text"><div class="text-center">{{ person.role }}</div></div>
</v-card-text>    
<v-card-actions>
    <!-- <v-btn flat color="grey">

    <v-icon small left></v-icon>
    <span>Message</span>
    </v-btn> -->
</v-card-actions>
</v-card>
</v-flex>
</v-layout>
</v-container>
<br/>
<br/>
<br/>
              
 <v-card
    class="mx-auto"
    color="#AA5F2C"
    width="200px"
     border-radius="20px"
  >
  <div class="text-center">
    <v-card-text>
     <router-link to="/DayPhase" class="center" >
      Next Step
      </router-link>
    </v-card-text>
    </div>
  </v-card>
<br/>
</div>
</v-content>
</v-app>
</template>

<script>
export default {
data() {
    return {
        team: [
            { name:'Brooklyne', role: 'WereWolf' },
            { name:'Court', role: 'Villager' },
            { name:'Sam', role: 'WereWolf' },
            { name:'Rudy', role: 'Doctor' },
            { name:'Randy', role: 'Villager' },

        ]

    }
}
  
};
</script>


<style scoped>
#border {
  border-radius: 13px;
  background-color:white;

}
.gray--text {
  color: gray;
  letter-spacing: 1px;
  font-size:20px;
  font-weight: 900px;

}
.subheading {
  color: gray;
}


p {
  color: white;
  letter-spacing: 1px;
  font-size:20px;
  font-weight: 600px;
}
.next {
padding-left: 190px ;
text-decoration: none;
color: white;
font-size: 20px;
 letter-spacing: .4px;

}
h2 {
    color: white;
    font-size: 30px;
    text-shadow: 2px 2px #595858;
   
}
#night {
  background-image: url('night11.png');
  background-size: cover;
  background-color: #323C46;
  background-position: bottom;
  transition: 0.4s;
  background-color: #323C46;


}
#app {
  background-image: url('/img/night11.png');
  background-size: cover;
  background-color: #323C46;
  background-position: bottom;
  transition: 0.4s;
}

#none {
  text-decoration: none;
}


h1 {

  font-style: normal;
  font-weight: 700;
  color:white;
  
  font-size: 45px;
}
header.v-sheet.v-sheet--tile.theme--dark.v-toolbar.v-app-bar.v-app-bar--fixed {
   color: white;
}
#app {
  color: orange;
}

.theme--dark.v-application {
  color: orange;
}



#start {
  padding-left: 200px;
   padding-right: 200px;
   border-radius: 40px;
   font-size: 20px;
}




.start {
  padding-left: 200px;
   padding-right: 200px;
   border-radius: 40px;
   font-size: 20px;
}
.v-toolbar_content {
  color: white;
}
.v-button_content{
  color: white;
}
.v-content_wrap{
  background-color: white;
}
header {
   color: orange;
}
.v-app-bar--fixed {
   color: white;
}
.top {
 color: orange;

}
</style>
