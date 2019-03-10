import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private userTheme:string;
  private data:string;
  public nothideMe:boolean;
  public hideMe:boolean;
  constructor() { }
  sampledata(){
    this.data="Hello world";
    this.nothideMe=false;
    this.hideMe=true;
    return this.data;
    
  }
}
