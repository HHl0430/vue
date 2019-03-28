<template>
  <div>
    <div class="charts">
      <x-chart
        :id="id"
        :option="option"
      ></x-chart>
    </div>
  </div>
</template>

<script>
import XChart from "../chart/comp.vue";
export default {
  data() {
    return {
      id: "test",
      option: {
        chart: {
          type: "line"
        },
        title: {
          text: "访问数量/日"
        },
        tooltip: {
          shared: true
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: [
            "2019-03-24",
            "2019-03-25",
            "2019-03-26",
            "2019-03-27",
            "2019-03-28",
            "2019-03-28",
            "2019-03-30"
          ],
          title: {
            text: "X axis title",
            align: "high"
          }
        },
        yAxis: {
          title: {
            text: "访问量(个)",
            align: "high",
            offset: 0,
            rotation: 0,
            y: -10
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [
          {
            name: "图表访问量",
            data: [12, 3, 5, 32, 23, 23, 10]
          },
          {
            name: "地图访问量",
            data: [1, 3, 5, 22, 3, 23, 10]
          }
        ]
      }
    };
  },
  components: {
    XChart
  }
};
</script>

<style>
</style>
