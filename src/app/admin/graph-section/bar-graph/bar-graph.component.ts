import { Component, OnInit } from '@angular/core';
import { ILoadedEventArgs, ChartComponent, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent {

  public data: Object[] = [
    {x: 'Thomas Killeen 1', y: 10}, {x: 'Thomas Killeen 2', y: 5}, {x: 'Thomas Killeen 3', y: 8}, {x: 'Thomas Killeen 4', y: 9}
  ];
  public data1: Object[] = [
    {x: 'Bob Cornhole 1', y: 15}, {x: 'Bob Cornhole 2', y: 18}, {x: 'Bob Cornhole 3', y: 2}, {x: 'Bob Cornhole 4', y: 3}
  ];
  public data2: Object[] = [
    {x: 'Joe Bloggs 1', y: 5}, {x: 'Joe Bloggs 2', y: 8}, {x: 'Joe Bloggs 3', y: 6}, {x: 'Joe Bloggs 4', y: 7}
  ];
  public data3: Object[] = [
    {x: 'Jim Henson 1', y: 22}, {x: 'Jim Henson 2', y: 18}, {x: 'Jim Henson 3', y: 19}, {x: 'Jim Henson 4', y: 24}
  ];

  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    majorGridLines: { width: 2 },
    majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
  };
  public marker: Object = { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '1000', color: '#ffffff' } } }
  public title: string = 'Login Hours Weekly';
  public tooltip: Object = {
    enable: true
  };
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    if(selectedTheme === 'highcontrast'){
      args.chart.series[0].marker.dataLabel.font.color = '#000000';
      args.chart.series[1].marker.dataLabel.font.color = '#000000';
      args.chart.series[2].marker.dataLabel.font.color = '#000000';
    }
  }
  // custom code end
  public chartArea: Object = {
    border: {
      width: 1
    }
  };
  public width: string = Browser.isDevice ? '100%' : '60%';

  constructor() {
    //code
  }
}
