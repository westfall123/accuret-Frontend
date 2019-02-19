import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-substitution-when-product-is-oos',
  templateUrl: './substitution-when-product-is-oos.component.html',
  styleUrls: ['./substitution-when-product-is-oos.component.css']
})
export class SubstitutionWhenProductIsOOSComponent implements OnInit {

  chartOption: EChartOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
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
            ]
        }
    ]
};

  constructor() { }

  ngOnInit() {
  }

}
