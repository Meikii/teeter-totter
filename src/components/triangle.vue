<template>
  <div class="shape triangle" v-bind:style="triangleStyle()">
    <div class="shape-text">{{this.$store.state.triangle.weight}}kg</div>
  </div>
</template>
<script>
export default {
  methods: {
    triangleStyle() {
      return {
        height: this.$store.state.triangle.weight * 10 + "px",
        width: this.$store.state.triangle.weight * 10 + "px",
        left:
          "calc( " +
          (50 - this.$store.state.triangle.position * 10) +
          "% - " +
          parseInt(this.$store.state.triangle.weight) * 10 +
          "px )",
        borderLeft:
          (this.$store.state.triangle.weight * 10) / 2 + "px solid transparent",
        borderRight:
          (this.$store.state.triangle.weight * 10) / 2 + "px solid transparent",
        borderBottom: this.$store.state.triangle.weight * 10 + "px solid black"
      };
    }
  }
};
</script>
<style scoped>
.shape-text {
  color: white;
  font-size: 20px;
  /* text-align: center;
  vertical-align: middle; */

  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.triangle {
  bottom: 10px;
}
</style>