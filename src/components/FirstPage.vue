<template>
  <v-app id="inspire">

  
    
    <!-- <v-navigation-drawer
      class="top"
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

 
    

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


  <br>
  
  <br>
 
   <!-- <div v-responsive.lg.xl >Only visible on desktop !</div>
 
   <div v-responsive.md    >Visible on tablet ☺</div>
 
   <div v-responsive.sm.xs >Only visible on smartphone!</div> -->
<router-link to="/SecondPage" class="none">

<div v-responsive.lg.xl.md>  <v-btn fab x-large rounded color="#AA5F2C" dark  id="start" v-on:click="method">
      Start Game</v-btn></div> 
     
      <div v-responsive.sm.xs >  <v-btn fab medium rounded color="#AA5F2C" dark id="startSm" v-on:click="method">
      Start Game</v-btn></div> 
      
      </router-link> 
     

  </div>


       
          </v-col>
      
        </v-row>
      </v-container>
    </v-content>

   
</v-app>
</template>
<style>
#inspire {

   background-color: #323C46;


}
#app {
    background-image: url('/img/night.jpg');
  background-size: cover;
   background-color: #323C46;

  background-position: bottom;
  transition: 0.4s;

}
.none {
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
.v-application.v-application--is-ltr.theme--dark {
  color: orange;

}
.theme--dark.v-application {
  color: orange;
}

v-sheet v-sheet--tile theme--dark v-toolbar v-app-bar v-app-bar--fixed v-app-bar--is-scrolled {
 
  color: orange;
  
}

#start {
  padding-left: 200px;
   padding-right: 200px;
   border-radius: 40px;
   font-size: 20px;
}
#startSm {
   padding-left: 150px;
   padding-right: 150px;
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

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({

    
            

      
      drawer: null,
    }),

    created () {
      this.$vuetify.theme.dark = true
    },

  }
</script>
