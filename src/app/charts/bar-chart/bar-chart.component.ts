import { Component, OnInit } from '@angular/core';

const SAMPLE_BAR_CHART_DATA: any[] = [
  {data: [1, 2, 3, 5, 7], label: 'Q3'},
  {data: [8, 5, 3, 2, 1], label: 'Q4'}
];

const SAMPLE_BAR_CHCART_LABEL: string[] = [
  'w1', 'w2', 'w3', 'w4', 'w5'
];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  barChartData: any[] = SAMPLE_BAR_CHART_DATA;
  barChartLabels: string[] = SAMPLE_BAR_CHCART_LABEL;
  barChartType = 'bar';
  barChartLegend = false;
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
