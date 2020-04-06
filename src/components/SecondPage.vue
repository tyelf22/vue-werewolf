<template>
  <v-app id="inspire">

<v-content>
<v-container
        class="fill-height"
        fluid
      >
   
<v-row
          align="center"
          justify="center"
        >
          <v-col class="shrink">
            
                   <div class="text-center">
  <h1>WereWolf</h1>
  <br>
  <br>
  <br>
  
  <div class="text-center">   <p>Are you a moderator or player?</p></div>
  <br>
<br>
  <br>

     
<router-link to="/SecondPage" class="none">
    <v-btn fab x-large rounded color="#AA5F2C" dark class="start" id="start" v-on:click="method">
      Player</v-btn></router-link> 
</div>
<br>
<br>
<div>
      <router-link to="/EnterPlayer" class="none">
    <v-btn fab x-large rounded color="#AA5F2C" dark class="start" id="start" v-on:click="method">
      Moderator</v-btn></router-link> 
      </div>
  
       
          </v-col>
      
        </v-row>
      </v-container>
    </v-content>

   
</v-app>
</template>
<style scoped>

h1 {
  letter-spacing: 2px;

}
p {
  color: white;
  letter-spacing: 1px;
  font-size:20px;
  padding-left: 45px;
}
</style>
<script>
  export default {
    name: 'SecondPage',


    data: () => ({
      title: 'This is the second page'
    }),
  }
</script>