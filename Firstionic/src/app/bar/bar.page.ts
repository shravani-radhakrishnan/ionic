import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {SampleService} from '../services/sample.service'
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.page.html',
  styleUrls: ['./bar.page.scss'],
})
export class BarPage implements OnInit {
  constructor(private myService:SampleService,public toastController: ToastController,private router:Router){

  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2016', '2017', '2018', '2019','2020'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81 ], label: 'Series A'},
    {data: [28, 48, 40, 19 ], label: 'Series B'}
  ];
  time:String='';
  data:any;
  date:any
  year:any;
  chartLabel:any;
  chartData:any;
  nothideMe:boolean=true;
  hideMe:boolean=false;
  returned:any;
 
  public DataTypes:any[]=[
    {data: [ 81 ], label: 'Series A'},
    {data: [79 ], label: 'Series B'}
  ];

  public serback():any{
    //console.log("iam in serback");
    this.returned=this.myService.sampledata();
    console.log(this.returned);
    this.nothideMe=this.myService.nothideMe;
    this.hideMe=this.myService.hideMe;
    console.log(this.nothideMe);
    console.log(this.hideMe);
    this.barChartLabels=['2016', '2017', '2018', '2019','2020'];
    this.barChartData= [
      {data: [65, 59, 80, 81 ], label: 'Series A'},
      {data: [28, 48, 40, 19 ], label: 'Series B'}
    ];


  }

  //date
  public search():void{
    //this.router.navigate(['line'])
    this.data=this.time;
    if(this.data != '' && this.data != undefined){
      //alert(this.data);
      this.date = new Date(this.data);
      this.year = this.date.getFullYear();
      for(let i=0;i<this.barChartLabels.length;i++){
        if(this.year == this.barChartLabels[i]){
          this.chartLabel=this.barChartLabels[i];
          for(let j=0;j<this.barChartData.length;j++){
            this.chartData=this.barChartData[j].data[i];
            console.log(this.barChartData[j].data[i]);
            this.barChartLabels=[];
            this.barChartLabels.push(this.chartLabel);
            //this.barChartData=this.chartData;
            this.barChartData=this.barChartData;
            
            this.nothideMe=false;
            this.hideMe=true;
          }
        }
      }
    }else{
      this.presentToastWithOptions()
    }
   
  }
  public back():void{
    this.nothideMe=true;
    this.hideMe=false;
  }
  //toaster
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'pick a year',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done',
      color:'warning'
    });
    toast.present();
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  ngOnInit() {
  }

}
 