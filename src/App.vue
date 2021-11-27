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
<v-container>
    <v-btn :to="{name: 'Dictionary'}">Begin</v-btn>
    <v-main app>
      <router-view :key="$route.fullPath"/>
    </v-main> 
</v-container>
</template>
