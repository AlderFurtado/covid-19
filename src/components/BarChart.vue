<script lang="ts">
import Vue from "vue";

import { Bar } from "vue-chartjs";
import { Prop, Component } from "vue-property-decorator";

@Component({
  extends: Bar
})
export default class BarChart extends Vue<Bar> {
  @Prop() labels!: any;
  @Prop() data!: any;

  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: "#d04d56",
          label: "Casos por cidade",
          data: this.data
        }
      ]
    });
  }
}
</script>