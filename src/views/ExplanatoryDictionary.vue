<script>
import http from '@/plugins/http'

export default {
    data: () => ({
        isDefinition: false,
        word: '',
        result: null,
    }),
    mounted() {
        this.load()
    },
    methods: {
        load(message) {
            this.isDefinition = true
            

            http.get(`words/${this.word}/${message}`)
            .then(response => {
                console.log(response.data);
                this.result = response.data.definitions
                console.log(this.result)
            })
            .finally(() => { this.isDefinition = false })
        },  
        loadSyn(){
          this.isDefinition = true
            

            http.get(`words/${this.word}/synonyms`)
            .then(response => {
                console.log(response.data);
                this.result = response.data.synonyms
            })
            .finally(() => { this.isDefinition = false })      
            
        }
    }
}
</script>

<template>
    <v-container >
    <v-app-bar app>
    <v-app-bar-title>Dictionary</v-app-bar-title>
    <v-spacer/>
    </v-app-bar>
    <v-container style="margin-top: 100px;">

    </v-container>
    <v-btn @click="load('definitions')" style="margin-right: 5px">Definition</v-btn>
    <!-- <v-btn @click="load('synonyms')" style="margin-right: 5px">Synonyms</v-btn> -->
    <v-btn @click="loadSyn()" style="margin-right: 5px">Synonyms</v-btn>

    <v-text-field v-model="word" label="Enter the word"/>

        <v-card>
          <v-list v-if="result != null">
            <v-list-item  v-for="(item, i) in result" :key="i">
              <v-list-item-content >
              {{ item }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
    </v-container>
</template>