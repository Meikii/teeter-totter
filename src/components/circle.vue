<template>
  <div
    class="shape circle"
    v-bind:style="{height: this.$store.state.circle.weight * 10 + 'px' ,
            width: this.$store.state.circle.weight * 10 + 'px',
            left: 'calc( ' + (50-  this.$store.state.circle.position * 10 )+  '% - ' + this.$store.state.circle.weight * 10 +'px )' }"
  >
   
    <span
      class="shape-text"
      v-bind:style="{fontSize:this.$store.state.circle.weight*6+'px'}"
    >{{this.$store.state.circle.weight}}kg</span>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.shape-text {
  color: white;
   
  /* font-size: 30px; */
  text-align: center;
  vertical-align: middle;
}
.circle {
  border-radius: 100%;
  /* bottom: 10px; */
  background: red;
}
</style>