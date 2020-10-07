import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [150, 450, 120];
  pieChartLabels: string[] = ['lol', 'hehe', 'trolololo'];
  colors: any[] = [
    {
       backgroundColor: ['#26547C', '#FF6B6B', '#FFD166']
    }
  ];
  pieChartType: 'pie';

  ngOnInit(): void {
  }

}
