<script>
export default {
  methods: {
    goto(page){
      if(this.$router.name != page){
        console.log(page);
        this.$router.push({ name: page })
      }
    }
  }
}
</script>

<template>
  <div>
      <button :to="{name: 'Words'}">Begin</button>
  </div>
</template>
