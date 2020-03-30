 <template>
  <v-app id="night">

<v-content>
<div class="text-center"><h2>Night Phase</h2></div>
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
  <br>
  <br>
  <br>
  <br>
  <br>
</div>
</v-col>
</v-row>
<router-link to="/DayPhase" class="next"><p>Next Step</p></router-link> 
</v-container>

</v-content>
</v-app>
</template>


<style>
p {
  color: white;
  letter-spacing: 1px;
  font-size:20px;
  font-weight: 600px;
}
.next {
font-weight: 600px;
color: white;
padding-left: 190px ;
text-decoration: none;
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
.v-application.v-application--is-ltr.theme--dark {
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

