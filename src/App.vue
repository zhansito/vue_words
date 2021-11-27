<script>

export default {
  
    // mounted() {
    //     this.loadDef()
    //     //console.log(word);
    // },
    // methods: {
    //     loadDef() {
    //         this.isDefinition = true
            

    //         http.get(`words/${this.word}/definitions`)
    //         .then(response => {
    //             console.log(response.data);
    //             this.definition = response.data.definitions
    //         })
    //         .finally(() => { this.isDefinition = false })
    //     },
    //     loadSyn(){
    //       this.isDefinition = true
            

    //         http.get(`words/${this.word}/synonyms`)
    //         .then(response => {
    //             console.log(response.data);
    //             this.definition = response.data
    //         })
    //         .finally(() => { this.isDefinition = false })      
            
    //     }
  //   } 
  methods:{
    goto(page){
      if(this.$route.name != page){
        this.$router.push({ name: page });
      }
    }
  }
};
</script>

<template>
<v-container>
    <!-- <v-app-bar app>
    <v-app-bar-title>Dictionary</v-app-bar-title>
    <v-spacer/>
    </v-app-bar> -->

    <v-btn :to="{name: 'Dictionary'}">Begin</v-btn>
    <!-- <v-btn :to="{name: 'Synonyms', params: {word: word}}">Synonyms</v-btn> -->
    <!-- <v-btn @click="loadSyn" style="margin-right: 5px">Synonyms</v-btn> -->

    <v-main app>
      <router-view :key="$route.fullPath"/>
    </v-main> 
</v-container>
    <!-- <v-container >
    <v-app-bar app>
    <v-app-bar-title>Dictionary</v-app-bar-title>
    <v-spacer/>
    </v-app-bar>
    <v-container style="margin-top: 100px;">

    </v-container>
    <v-btn @click="loadDef" style="margin-right: 5px">Definition</v-btn>
    <v-btn @click="loadSyn" style="margin-right: 5px">Synonyms</v-btn>

    <v-text-field v-model="word" label="Enter the word"/>

        <v-card>
          <v-list >
            <v-list-item v-for="(item, i) in definition" :key="i">
              <v-list-item-content >
              {{ item.definition}}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
    </v-container> -->
</template>
