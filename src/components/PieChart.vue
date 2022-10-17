<template>
  <div id="chartdiv" ref="chartdiv">
</div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5'
import * as am5percent from '@amcharts/amcharts5/percent'
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated'
import store from '@/store/index'
import { computed } from 'vue'

export default {
  name: 'PieChart',
  setup () {
    const userAnswers = computed(() => store.state.userAnswers)

    return { userAnswers }
  },
  mounted () {
    const rightAnswers = this.userAnswers.filter(a => a.answerEvaluation === 'Right')
    const wrongAnswers = this.userAnswers.filter(a => a.answerEvaluation === 'Wrong')
    const skippedAnswers = this.userAnswers.filter(a => a.answerEvaluation === 'Skipped')

    const root = am5.Root.new(this.$refs.chartdiv)

    root.setThemes([am5themesAnimated.new(root)])

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        radius: am5.percent(90),
        innerRadius: am5.percent(50),
        layout: root.verticalLayout
      })
    )

    // Define data
    const data = [
      {
        answerEvaluation: 'Right',
        score: rightAnswers.length
      },
      {
        answerEvaluation: 'Wrong',
        score: wrongAnswers.length
      },
      {
        answerEvaluation: 'Skipped',
        score: skippedAnswers.length
      }
    ]

    // Create series
    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        valueField: 'score',
        categoryField: 'answerEvaluation'
      })
    )

    series.data.setAll(data)

    // Disabling labels and ticks
    series.labels.template.set('visible', false)
    series.ticks.template.set('visible', false)

    const legend = chart.children.push(am5.Legend.new(root, {
      nameField: 'answerEvaluation'
    }))
    legend.data.setAll(series.dataItems)
  }
}
</script>

<style lang="scss">
#chartdiv {
  width: 100%;
  height: 250px;
}
</style>
