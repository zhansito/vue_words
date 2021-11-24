<script>
import http from '@/plugins/http'

export default {
  data: () => ({
        loading: false,
        word: '',
        definition: '',
    }),
    computed: {
        input(){
            let word = document.getElementById("input").value
            return word
        }
    },
    mounted() {
        //this.load()
        
        //console.log(word)
    },
    methods: {
        loadDef() {
            this.loading = true

            http.get(`word/${this.input}`)
            .then(response => {
                console.log(response.data);
                this.definition = response.data
            })
            .finally(() => this.loading = false)
        }
  //   } 
  // methods:{
  //   goto(page){
  //     if(this.$route.name != page){
  //       this.$router.push({ name: page });
  //     }
  //   }
  }
};
</script>

<template>
  <v-app>
    <v-app-bar app>
    <v-app-bar-title>Dictionary</v-app-bar-title>
    <v-spacer/>
    </v-app-bar>
    <v-container style="margin-top: 120px">
    <v-btn @click="loadDef">Definition</v-btn>
    <v-btn :to="{name: 'Words'}">Sinonyms</v-btn>
    </v-container>
    <v-text-field v-model="word" label="Enter the word"/>
  </v-app>
</template>
