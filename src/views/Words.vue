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
        this.load()
    },
    methods: {
        load() {
            this.loading = true

            http.get(`word/${this.input}`)
            .then(response => {
                console.log(response.data);
                this.definition = response.data
            })
            .finally(() => this.loading = false)
        }
    } 
}
</script>

<template>
<v-container style="margin-top: 120px">
<h1>Dictionary</h1>

<v-text-field v-model="word" label="Enter the word"/>

</v-container>
</template>