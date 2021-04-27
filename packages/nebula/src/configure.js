import { embed } from '@nebula.js/stardust';
import barChart from '@nebula.js/sn-bar-chart';
import lineChart from '@nebula.js/sn-line-chart';
import pieChart from '@nebula.js/sn-pie-chart';
import sankeyChart from '@nebula.js/sn-sankey-chart';
import funneChart from '@nebula.js/sn-funnel-chart';
import mekkoChart from '@nebula.js/sn-mekko-chart';
import table from '@nebula.js/sn-table';
import comboChart from '@nebula.js/sn-combo-chart';

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
      name: 'barChart',
      load: () => barChart,
    },
    {
      name: 'lineChart',
      load: () => lineChart,
    },
    {
      name: 'pieChart',
      load: () => pieChart,
    },
    {
      name: 'sankeyChart',
      load: () => sankeyChart,
    },
    {
      name: 'funneChart',
      load: () => funneChart,
    },
    {
      name: 'mekkoChart',
      load: () => mekkoChart,
    },
    {
      name: 'table',
      load: () => table,
    },
    {
      name: 'comboChart',
      load: () => comboChart,
    },
  ],
});

export default configure;