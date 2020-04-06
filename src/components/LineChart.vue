<script lang="ts">
import Vue from "vue";

import { Line } from "vue-chartjs";
import { Prop, Component } from "vue-property-decorator";

@Component({
  extends: Line
})
export default class LineChart extends Vue<Line> {
  @Prop() labels!: any;
  @Prop() data!: any;

  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      backgroundColor: "#d04d56",

      datasets: [
        {
          backgroundColor: "#d04d56",

          label: "Casos por data",
          data: this.data
        }
      ]
    });
  }
}
</script>