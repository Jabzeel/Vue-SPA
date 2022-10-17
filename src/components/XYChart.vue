<template>
  <div id="chartdiv" ref="chartdiv">
</div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated'
import { computed } from 'vue'
import store from '@/store/index'

export default {
  name: 'PieChart',
  setup () {
    const scoreList = computed(() => store.state.scoreList)

    return { scoreList }
  },
  mounted () {
    const data = this.scoreList
    const root = am5.Root.new(this.$refs.chartdiv)

    root.setThemes([am5themesAnimated.new(root)])

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    )

    // Create Y-axis
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: 5,
        numberFormat: '#',
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    )

    // Create X-Axis
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: 'username'
      })
    )

    xAxis.data.setAll(data)

    // Create series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'score',
        categoryXField: 'username'
      })
    )

    series.data.setAll(data)

    // Add legend
    const legend = chart.children.push(am5.Legend.new(root, {
      nameField: 'username'
    }))
    legend.data.setAll(series.dataItems)

    this.root = root
  },
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  beforeDestroy () {
    if (this.root) {
      this.root.dispose()
    }
  }
}
</script>

<style lang="scss">
#chartdiv {
  width: 100%;
  height: 300px;
}
</style>
