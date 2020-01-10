<template>
  <div
    class="shape rectangle"
    v-bind:style="{height: this.$store.state.rectangle.weight * 10 + 'px' ,
            width: this.$store.state.rectangle.weight * 10 + 'px',
            left:  'calc( ' + (50 + this.$store.state.rectangle.position * 10 )+  '% - ' + this.$store.state.rectangle.weight * 10 +'px )'}"
  >
    <span
      class="shape-text"
      v-bind:style="{fontSize:this.$store.state.rectangle.weight*6+'px'}"
    >{{this.$store.state.rectangle.weight}}kg</span>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.shape-text {
  color: white;
  font-size: 30px;
  /* text-align: center;
  vertical-align: middle; */
}
.info {
  margin-bottom: 100px;
}
.rectangle {
  background: cornflowerblue;

  /* bottom: 10px; */
}
</style>