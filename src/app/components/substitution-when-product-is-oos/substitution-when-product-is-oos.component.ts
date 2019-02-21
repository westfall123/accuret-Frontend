import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-substitution-when-product-is-oos',
  templateUrl: './substitution-when-product-is-oos.component.html',
  styleUrls: ['./substitution-when-product-is-oos.component.css']
})
export class SubstitutionWhenProductIsOOSComponent implements OnInit {

  chartOption: EChartOption = {
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
          symbolSize: 20,
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
