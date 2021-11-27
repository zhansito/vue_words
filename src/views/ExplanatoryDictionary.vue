<script>
import http from '@/plugins/http'

export default {
    data: () => ({
        isSynonym: false,
        isPronunciation: false,
        isExample: false,
        isRhymes: false,
        isAntonyms: false,
        isSyllables: false,
        isFrequency: false,
        isSearch: false,
        isRandom: false,
        word: '',
        result: null,
    }),
    methods: {
        load(message) {
            this.isSynonym = false
            this.isPronunciation = false
            this.isExample = false
            this.isRhymes = false
            this.isAntonyms = false
            this.isSyllables = false
            this.isFrequency = false
            this.isSearch = false
            this.isRandom = false


            http.get(`words/${this.word}/${message}`)
            .then(response => {
                console.log(response.data);
                if(message === 'synonyms'){
                    this.result = response.data.synonyms
                    this.isSynonym = true
                }
                if(message === 'definitions'){
                    this.result = response.data.definitions
                }
                if(message === 'examples'){
                    this.result = response.data.examples
                    this.isExample = true
                }
                if(message === 'rhymes'){
                    this.result = response.data.rhymes.all
                    this.isRhymes = true
                }
                if(message === 'antonyms'){
                    this.result = response.data.antonyms
                    console.log(response.data.antonyms)
                    this.isAntonyms = true
                }
                if(message === 'pronunciation'){
                    this.result = response.data.pronunciation
                    this.isPronunciation = true
                }
                if(message === 'syllables'){
                    this.result = response.data.syllables.list
                    this.isSyllables = true
                }
                if(message === 'frequency'){
                    this.result = response.data.frequency
                    this.isFrequency = true
                }
                console.log(this.result)
            })
            .finally(() => {  })
        },
        random() {
            this.isRandom = true

            http.get(`words/`, {
                params: {
                    random: 'true',
                }
            })
            .then(response => {
                console.log(response.data);
                this.result = response.data.results
                console.log(this.result)
            })
            .finally(() => {  })  
        },
        search(){
            this.isSearch = true

            http.get(`words/`, {
                params: {
                    letters: this.word,
                    limit: '20',
                    page: '1',
                }
            })
            .then(response => {
                console.log(response.data);
                this.result = response.data.results.data
                console.log(this.result)
            })
            .finally(() => {  })      
            
        }
    }
}
</script>

<template>
    <v-container >
    <v-app-bar app>
    <v-app-bar-title>Explanatory Dictionary</v-app-bar-title>
    <v-spacer/>
    </v-app-bar>
    <v-container style="margin-top: 100px;">

    </v-container>
    <v-btn @click="load('synonyms')" style="margin-right: 10px; margin-bottom: 10px">Synonyms</v-btn>
    <v-btn @click="load('definitions')" style="margin-right: 10px; margin-bottom: 10px">Definition</v-btn>
    <v-btn @click="load('examples')" style="margin-right: 10px; margin-bottom: 10px">Examples</v-btn>
    <v-btn @click="load('rhymes')" style="margin-right: 10px; margin-bottom: 10px">Rhymes</v-btn>
    <v-btn @click="load('antonyms')" style="margin-right: 10px; margin-bottom: 10px">Antonyms</v-btn>
    <v-btn @click="load('pronunciation')" style="margin-right: 10px; margin-bottom: 10px">Pronunciation</v-btn>
    <v-btn @click="load('syllables')" style="margin-right: 10px; margin-bottom: 10px">Syllables</v-btn>
    <v-btn @click="load('frequency')" style="margin-right: 10px; margin-bottom: 10px">Frequency</v-btn>
    <v-btn @click="random()" style="margin-right: 10px; margin-bottom: 10px">Random</v-btn>
    <v-btn @click="search()" style="margin-right: 10px; margin-bottom: 10px">Search</v-btn>

    <v-text-field v-model="word" label="Enter the word"/>

        <v-card>
          <v-list v-if="result != null">
            <v-list-item  v-for="(item, i) in result" :key="i">
              <v-list-item-content v-if="isSynonym === true">
              {{ item }}
              </v-list-item-content>
              <v-list-item-content v-if="item.definition != null">
              {{ item.definition }}
              </v-list-item-content>
              <v-list-item-content v-if="isExample === true">
              {{ item }}
              </v-list-item-content>
              <v-list-item-content v-if="isRhymes === true">
              {{ item }}
              </v-list-item-content>
              <v-list-item-content v-if="isAntonyms === true">
              {{ item }}
              </v-list-item-content>
              <v-list-item-content v-if="isPronunciation === true">
              {{ item }}
              </v-list-item-content>
              <v-list-item-content v-if="isSyllables === true">
              {{ item }}
              </v-list-item-content>
              <v-list-item-content v-if="isFrequency === true">
              {{ item }}
              </v-list-item-content>
              <v-list-item-content v-if="isSearch === true">
              {{ item }}
              </v-list-item-content>
              <v-list-item-content v-if="item === 0">
              No matches
              </v-list-item-content>
            </v-list-item>
          </v-list>
            <v-list v-if="isRandom === true">
            <v-list-item v-for="(item, i) in result" :key="i">
                {{ item }}
            </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>