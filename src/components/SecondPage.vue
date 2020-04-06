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
  
  <div class="text-center">   
  <div v-responsive.lg.xl.md> 
  <p>Are you a moderator or player?</p>
  </div>
   <div v-responsive.sm.xs> 
  <p class="small">Are you a moderator or player?</p>
  </div>
  </div>
  <br>
  <br>
  <br>

     
<router-link to="/SecondPage" class="none">
<div v-responsive.lg.xl.md> 
    <v-btn fab x-large rounded color="#AA5F2C" dark class="start" id="start" v-on:click="method">
      Player</v-btn></div>
       <div v-responsive.sm.xs > <v-btn fab medium rounded color="#AA5F2C" dark class="start" id="startSm" v-on:click="method">
      Player</v-btn></div> 
      </router-link> 
</div>
<br>
<br>
<div>
      <router-link to="/EnterPlayer" class="none">
      <div v-responsive.lg.xl.md> 
     <v-btn fab x-large rounded color="#AA5F2C" dark class="start" id="start" v-on:click="method">
      Moderator</v-btn></div>
       <div v-responsive.sm.xs > <v-btn fab medium rounded color="#AA5F2C" dark class="start" id="startSm" v-on:click="method">
      Moderator</v-btn></div> 
     </router-link>
 
       </div>
          </v-col>
      
        </v-row>
      </v-container>
    </v-content>

   
</v-app>
</template>
<style scoped>
#startSm {
   padding-left: 150px;
   padding-right: 150px;
   border-radius: 40px;
   font-size: 20px;
}

h1 {
  letter-spacing: 2px;

}
.small{
   color: white;
   font-weight: 700px;
  letter-spacing: 1px;
  font-size: 16px;
  padding-left: 30px;
}
p {
   font-weight: 500px;
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