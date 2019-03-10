import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dougnut',
  templateUrl: './dougnut.page.html',
  styleUrls: ['./dougnut.page.scss'],
})
export class DougnutPage implements OnInit {
  public doughnutChartLabels:string[] = ['DineIn Sales', 'Online Sales', 'Toran Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  private donutColors=[
    {
    backgroundColor: [
    'rgb(191, 191, 63)',
    'rgb(63, 191, 191)',
    'rgb(191, 63, 127)'
    ]
  }
]
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
