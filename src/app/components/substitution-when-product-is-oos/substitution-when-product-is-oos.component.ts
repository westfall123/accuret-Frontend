import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-substitution-when-product-is-oos',
  templateUrl: './substitution-when-product-is-oos.component.html',
  styleUrls: ['./substitution-when-product-is-oos.component.css']
})
export class SubstitutionWhenProductIsOOSComponent implements OnInit {

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
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['1', '2', '3', '4', '5']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: '1'},
                {value: 310, name: '2'},
                {value: 234, name: '3'},
                {value: 135, name: '4'},
                {value: 1548, name: '5'}
            ],
    
    xAxis: {
        name: 'Transition Porbability Out',
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: {
          fontWeight: 'bold'
        }
      },
      yAxis: {
        name: 'Transition Porbability In',
        nameLocation: 'middle',
        nameGap: 25,
        nameTextStyle: {
          fontWeight: 'bold'
        }
      },
      series: [{
        name: 'Transition to OOS',
        data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68]
        ],
        type: 'scatter'
      }]
    };

  constructor() { }

  ngOnInit() {
  }

}
