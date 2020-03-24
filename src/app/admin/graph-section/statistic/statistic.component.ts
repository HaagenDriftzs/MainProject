import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {

  public data: Object[];
  public xAxis: Object;
  public yAxis: Object;
  public legend: Object;
  public markerSettings: Object;
  public tooltip: Object;
  constructor() {
    this.data = [
      {month: 'January', sales: 55}, {month: 'February', sales: 87},
      {month: 'March', sales: 44}, {month: 'April', sales: 22},
      {month: 'May', sales: 107}, {month: 'June', sales: 120},
      {month: 'July', sales: 101}, {month: 'August', sales: 98},
      {month: 'September', sales: 69}, {month: 'October', sales: 38},
      {month: 'November', sales: 155}, {month: 'December', sales: 208}
    ];
    this.tooltip = {
      enable: true
    };
    this.markerSettings = {
      visible: true,
      dataLabel: {
        visible: true
      }
    };
    this.legend = {
      visible: true
    };
    this.xAxis = {
      title: 'Month',
      valueType: 'Category'
    };
    this.yAxis = {
      title: 'Sales'
    };
  }


}
