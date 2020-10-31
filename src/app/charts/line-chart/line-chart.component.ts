import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [1, 2, 3, 5, 7, 11], label: 'x'},
  { data: [1, 2, 3, 5, 8, 13], label: 'y'},
  { data: [1, 3, 5, 7, 9, 11], label: 'z'},
];

const LINE_CHART_LABELS: string[] = ['1', '2', '3', '4', '5', '6'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;
  lineChartOptions: any = {
    responsive: true
  };

  ngOnInit(): void {
  }

}
