<script>
import words from '../plugins/words'

export default {
    data: () => ({
        loading: false,
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

            words.get(`word/${this.input}`)
            .then(response => {
                this.definition = response.data
                console.log(response.data);
            })
            .finally(() => this.loading = false)
        }
    } 
}
</script>

<template>
<div>
<h1>Dictionary</h1>
<input v-model="input">
</div>
</template>