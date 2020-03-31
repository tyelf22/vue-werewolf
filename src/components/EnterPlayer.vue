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

   <p>Enter Player Name:</p>
  <br>
  <br>

 
  <div>
                    
          <v-text-field
            label="Solo"
            placeholder="Name"
            solo 
          ></v-text-field>
    
      </div>
<div>
<router-link to="/SecondPage" class="none">
    <v-btn x-large color="#AA5F2C" dark id="start">
      add</v-btn></router-link> 
      <v-flex sm12 lg12 mb-3 pl-0 pr-4>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Role</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(player, index) in players" :key="index"  style="height: 75px">
            <td>{{ player.name }}</td>
            <td>{{ player.role }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-flex>
</div>
<br>
<br>
 
  </div>    
       
          </v-col>
         
        </v-row>
              <router-link to="/AssignRoles" class="next">Next Step</router-link> 
        
      </v-container>
              

    </v-content>

   
</v-app>
</template>
<style scoped>
.next {
padding-left: 190px ;
text-decoration: none;
color: white;
font-size: 20px;
 letter-spacing: .4px;

}
.field {
  color: white;
}
h1 {
  letter-spacing: 2px;

}
p {
  color: white;
  letter-spacing: 1px;
  font-size:20px;
}
#start {
    border-radius: 10px;
}


</style>
<script>
  export default {
    name: 'AssignRoles',


    data: () => ({
      title: 'This is the second page'
    }),
    computed: {
      players(){
        return this.$store.state.players
      }
    },
    created() {
      this.$store.dispatch('retrievePlayers');
    }
  }
</script>