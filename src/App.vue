<script>
export default {
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
  <v-app>
    <v-app-bar app>
    <v-app-bar-title>Dictionary</v-app-bar-title>
    <v-spacer/>
      <v-btn :to="{name: 'Words'}">Begin</v-btn>
    </v-app-bar>
    <v-main>
    </v-main>
  </v-app>
</template>
