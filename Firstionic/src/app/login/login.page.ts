import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:String;
  password:String;
  userid:String;
  pwd:String;
  message:String;
  color:String;
  constructor(public toastController: ToastController,private router:Router) { }

  ngOnInit() {
  }
  public login():void{
    this.user=this.userid;
    this.password=this.pwd;
    if(this.user !='' && this.password !=''){
        if(this.user == 'admin' && this.password =='root')
        {
          this.message="Login success";
          this.color="primary";
          this.presentToastWithOptions(this.message,this.color)
          //this.router.navigate(['line'])
         
        }else{
          this.message="Wrong user id and password";
          this.color="danger";
          this.presentToastWithOptions(this.message,this.color)
        }
    }else{
          this.message="Enter the userid and password";
          this.color="warning";
          this.presentToastWithOptions(this.message,this.color)
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  //toaster
  async presentToastWithOptions(msg,color) {
    const toast = await this.toastController.create({
      message:msg,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done',
      color:color
    });
    toast.present();
  }
}
