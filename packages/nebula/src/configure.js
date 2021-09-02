import { embed } from '@nebula.js/stardust';
import barChart from '@nebula.js/sn-bar-chart';
import lineChart from '@nebula.js/sn-line-chart';
import pieChart from '@nebula.js/sn-pie-chart';
import sankeyChart from '@nebula.js/sn-sankey-chart';
import funnelChart from '@nebula.js/sn-funnel-chart';
import mekkoChart from '@nebula.js/sn-mekko-chart';
import table from '@nebula.js/sn-table';
import comboChart from '@nebula.js/sn-combo-chart';
import kpi from '@nebula.js/sn-kpi';
import actionButton from '@nebula.js/sn-action-button';
import gridChart from '@nebula.js/sn-grid-chart';
import bulletChart from '@nebula.js/sn-bullet-chart'
import scatterPlot from '@nebula.js/sn-scatter-plot'

const configure = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
    constraints: {
      active: false,
      passive: false,
      select: false,
    },
  },
  types: [
    {
      name: 'barchart',
      load: () => barChart,
    },
    {
      name: 'linechart',
      load: () => lineChart,
    },
    {
      name: 'piechart',
      load: () => pieChart,
    },
    {
      name: 'sankeychart',
      load: () => sankeyChart,
    },
    {
      name: 'funnechart',
      load: () => funnelChart,
    },
    {
      name: 'mekkochart',
      load: () => mekkoChart,
    },
    {
      name: 'table',
      load: () => table,
    },
    {
      name: 'combochart',
      load: () => comboChart,
    },
    {
      name: 'kpi',
      load: () => kpi,
    },
    {
      name: 'actionbutton',
      load: () => actionButton,
    },
    {
      name: 'gridchart',
      load: () => gridChart,
    },
    {
      name: 'bulletchart',
      load: () => bulletChart,
    },
    {
      name: 'scatterplot',
      load: () => scatterPlot,
    }
  ],
});

export default configure;