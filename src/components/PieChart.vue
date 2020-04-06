<script lang="ts">
import Vue from "vue";

import { Pie } from "vue-chartjs";
import { Prop, Component } from "vue-property-decorator";

@Component({
  extends: Pie
})
export default class PieChart extends Vue<Pie> {
  @Prop() labels!: any;
  @Prop() data!: any;

  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: ["#d04d56", "#ffddde"],
          label: "Casos por genêro",
          data: this.data
        }
      ]
    });
  }
}
</script>