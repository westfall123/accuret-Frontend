import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-lost-sales-store',
  templateUrl: './lost-sales-store.component.html',
  styleUrls: ['./lost-sales-store.component.css']
})
export class LostSalesStoreComponent implements OnInit {

  chartOption: EChartOption = {
    color: ['#131955',
    '#3c4072',
    '#222a82',
    '#2e4064',
    '#092764',
    '#193163'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}'
    },
    xAxis: {
      type: 'value',
      name: 'Total Lost Sales',
      nameLocation: 'middle',
      nameGap: 35,
      nameTextStyle: {
        fontWeight: 'bold'
      }
    },
    yAxis: {
      type: 'category',
      data: ['37', '27', '26', '88', '65', '89', '51', '94', '58'],
      name: 'Store ID',
      nameLocation: 'end',
      nameGap: 5,
      nameTextStyle: {
        fontWeight: 'bold'
      }
    },
    series: [{
        data: [440, 450, 470, 480, 490, 500, 510, 515, 590],
        type: 'bar'
      },
      {
        data: [230, 567, 100, 230, 230, 230, 230, 230, 230],
        type: 'bar',
        barWidth: '60%',
        barGap:'-100'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
