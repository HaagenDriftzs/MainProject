import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.css']
})
export class PieGraphComponent {

  public data: Object[];
  public chartTitle: string;
  public chartLabel: Object;
  public legend: Object;


  constructor() {
    this.chartTitle = 'Payment Method';
    this.data = [
      { name: 'Card Payment', value: 42, text: '42%'},
      { name: 'Cash Payment', value: 58, text: '58%'}
      ];
    this.chartLabel = {
      visible: true,
      position: 'Inside',
      name: 'text'
    };
    this.legend = {
      visible: true,
      position: 'Bottom',
      height: '8%',
      width: '35%'
    };
  }



}
