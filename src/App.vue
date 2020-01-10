<template>
  <div class="container">
    <div
      style="float:right;margin-bottom:10%"
    >Total Weight: {{this.$store.state.rectangle.weight}}kg</div>
    <div
      style="float:left"
    >Total Weight: {{this.$store.state.circle.weight + this.$store.state.triangle.weight}}kg</div>

    <!--<div class="inputs">
      <div class="circle-input">
        <p>Circle</p>
        <label for>
          Weight :
          <input
            type="number"
            v-model="$store.state.circle.weight"
            @change="()=>{ if($store.state.circle.weight>10 ) {$store.state.circle.weight =parseInt($store.state.circle.weight) - 1;}else if($store.state.circle.weight<1 ) {$store.state.circle.weight =parseInt($store.state.circle.weight) + 1;}}"
          />
        </label>
        <label for>
          position(arrow keys) :
          <input
            type="text"
            v-model="$store.state.circle.position"
            v-on:keyup.37="(e)=>{ $store.state.circle.position =  checkDownLimit(e,$store.state.circle.position);}"
            v-on:keyup.38="(e)=>{ $store.state.circle.position =  checkUpLimit(e,$store.state.circle.position);}"
            v-on:keyup.39="(e)=>{ $store.state.circle.position =  checkUpLimit(e,$store.state.circle.position);}"
            v-on:keyup.40="(e)=>{ $store.state.circle.position =  checkDownLimit(e,$store.state.circle.position);}"
          />
        </label>
      </div>
      <div class="triangle-input">
        <p>triangle</p>
        <label for>
          Weight :
          <input type="number" v-model="$store.state.triangle.weight" />
        </label>
        <label for>
          position(arrow keys) :
          <input
            type="text"
            v-model="$store.state.triangle.position"
            v-on:keyup.37="(e)=>{ $store.state.triangle.position =  checkDownLimit(e,$store.state.triangle.position);}"
            v-on:keyup.38="(e)=>{ $store.state.triangle.position =  checkUpLimit(e,$store.state.triangle.position);}"
            v-on:keyup.39="(e)=>{ $store.state.triangle.position =  checkUpLimit(e,$store.state.triangle.position);}"
            v-on:keyup.40="(e)=>{ $store.state.triangle.position =  checkDownLimit(e,$store.state.triangle.position);}"
          />
        </label>
      </div>
      <div class="rectangle-input">
        <p>rectangle</p>
        <label for>
          Weight :
          <input type="number" v-model="$store.state.rectangle.weight" />
        </label>
        <label for>
          position(arrow keys) :
          <input
            type="text"
            v-model="$store.state.rectangle.position"
            v-on:keyup.37="(e)=>{ $store.state.rectangle.position =  checkDownLimit(e,$store.state.rectangle.position);}"
            v-on:keyup.38="(e)=>{ $store.state.rectangle.position =  checkUpLimit(e,$store.state.rectangle.position);}"
            v-on:keyup.39="(e)=>{ $store.state.rectangle.position =  checkUpLimit(e,$store.state.rectangle.position);}"
            v-on:keyup.40="(e)=>{ $store.state.rectangle.position =  checkDownLimit(e,$store.state.rectangle.position);}"
          />
        </label>
      </div>
    </div>-->

    <div class="shape-container">
      <app-triangle :style="{transform: ' rotate('+ this.calcLineAngle() * (180/100) + 'deg)'}"></app-triangle>
      <app-circle :style="{transform: ''}"></app-circle>
      <app-rectangle :style="{transform: ' rotate('+ this.calcLineAngle() * (180/100) + 'deg)'}"></app-rectangle>
    </div>
    <div class="line" :style="{transform: 'rotate('+ this.calcLineAngle() * (180/100) + 'deg)'}"></div>

    <div
      class="shape triangle center"
      style="height: 10px;
            borderLeft: 50px solid transparent;
            borderRight: 50px solid transparent;
            borderBottom: 120px solid grey;
            position:relative;
            width:100px;"
    ></div>

    <div class="weights">
      <span>Weight * Position : {{ leftSide }}</span>
      <!-- <span
        :style="{color : lineAnglePercentage() == 'Not Possible' ? 'red':'green'}"
        style="font-weight:bold;font-size:20px"
      >{{ lineAnglePercentage() }}</span>-->
      <span>Weight * Position : {{ rightSide }}</span>
    </div>
    <br />
  </div>
</template>

<script>
import Triangle from "./components/triangle";
import Circle from "./components/circle";
import Rectangle from "./components/rectangle";

export default {
  data() {
    return {
      selectedShape: "",
      HUD: "7"
    };
  },
  watch: {
    // leftSide(newVal) {
    //   if (
    //     newVal > 20 ||
    //     (this.calcLineAngle() > 3 || this.calcLineAngle() < -3)
    //   ) {
    //     if (confirm("Not Balanced Or More Than 20. Continue?")) {
    //       return false;
    //     } else {
    //       window.close();
    //     }
    //   }
    // },
    // rightSide() {
    //   if (
    //     this.leftSide > 20 ||
    //     (this.calcLineAngle() > 3 || this.calcLineAngle() < -3)
    //   ) {
    //     if (confirm("ot Balanced Or More Than 20. Continue?")) {
    //       return false;
    //     } else {
    //       window.close();
    //     }
    //   }
    // }
  },
  computed: {
    leftSide() {
      return (
        parseInt(
          this.$store.state.triangle.weight *
            this.$store.state.triangle.position
        ) +
        parseInt(
          this.$store.state.triangle.weight *
            this.$store.state.triangle.position
        ) +
        parseInt(
          this.$store.state.circle.weight * this.$store.state.circle.position
        )
      );
    },
    rightSide() {
      return parseInt(
        this.$store.state.rectangle.weight *
          this.$store.state.rectangle.position
      );
    }
  },
  methods: {
    handleGlobalKeyDown(e) {
      // this.keyCode = e.keyCode;
      if (e.key == "ArrowRight" && this.$store.state.rectangle.position < 10)
        this.$store.state.rectangle.position += 0.1;
      if (e.key == "ArrowLeft" && this.$store.state.rectangle.position > 0)
        this.$store.state.rectangle.position -= 0.1;
      console.log(e);
    },
    myEvent(evt) {
      console.log(evt, "KEY pRESSED");
    },
    calcLineAngle() {
      return this.rightSide - this.leftSide;
    },
    lineAnglePercentage() {
      return (this.$store.state.lineAngle =
        this.calcLineAngle() > 3 || this.calcLineAngle() < -3
          ? "Not Possible"
          : this.calcLineAngle() * 10 + "%");
    }
    // checkDownLimit(e, val) {
    //   e.stopPropagation();
    //   if (val <= 0) return val;
    //   return (val -= 1);
    // },
    // checkUpLimit(e, val) {
    //   e.stopPropagation();
    //   if (val >= 5) return val;
    //   return (val += 1);
    // }
  },
  components: {
    appTriangle: Triangle,
    appRectangle: Rectangle,
    appCircle: Circle
  },
  mounted() {
    setInterval(() => {
      this.$store.state.triangle.weight = Math.floor(Math.random() * 10);
      this.$store.state.circle.weight = Math.floor(Math.random() * 10);

      this.$store.state.triangle.position = Math.floor(Math.random() * 10);
      this.$store.state.circle.position = Math.floor(Math.random() * 10);
      this.HUD = 10;
      console.log("reset");
      console.log(this.HUD);
      setInterval(() => {
        console.log(this.HUD);
        this.HUD--;
      }, 1000);
    }, 10000);

    window.addEventListener("keydown", e => {
      this.handleGlobalKeyDown(e);
    });
  }
};
</script>

<style>
.container {
  width: 80%;
  margin: 5% auto;
}
.shape-container {
  height: 100px;
  position: relative;
  margin-top: 5%;
}
/* .inputs {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 100px;
}
.inputs div {
  border: 1px solid green;
  padding: 10px;
} */
.line {
  width: 100%;
  height: 6px;
  background: red;
  position: relative;

  margin-top: 20px;
  transition: 0.3s;
}
.shape {
  position: absolute;
  transition: 0.6s;
}
#rectangle {
  position: relative;
}
.triangle.center {
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
.weights {
  display: flex;
  justify-content: space-between;
}
</style>
