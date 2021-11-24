<script>
import http from '@/plugins/http'

export default {
  data: () => ({
        isDefinition: false,
        word: '',
        definition: '',
    }),
    mounted() {
        this.loadDef()
    },
    methods: {
        loadDef() {
            this.isDefinition = true
            

            http.get(`words/${this.word}/definitions`)
            .then(response => {
                console.log(response.data);
                this.definition = response.data
            })
            .finally(() => { this.isDefinition = false })
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
    <v-container >
    <v-app-bar app>
    <v-app-bar-title>Dictionary</v-app-bar-title>
    <v-spacer/>
    </v-app-bar>
    <v-container style="margin-top: 100px;">

    </v-container>
    <v-btn @click="loadDef" style="margin-right: 5px">Definition</v-btn>
    <v-btn @click="loadDef" style="margin-right: 5px">Synonyms</v-btn>

    <v-text-field v-model="word" label="Enter the word"/>

        <v-card>
          <v-list >
            <v-list-item>
              <v-list-item-content>
              {{ definition }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
    </v-container>
</template>
