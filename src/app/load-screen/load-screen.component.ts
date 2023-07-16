import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.css']
})
export class LoadScreenComponent implements OnInit {


  

  constructor() {
     
  }

  // grabCircle(): any{
  //   let circle = document.querySelector('.prog_ring_circle');
  //   return circle 
  // }

  // grabRadius(): number{
  //   let radius = document.getElementsByClassName("prog_ring_circle")[0].r.baseVal.value;
  //   return radius
  // }


  // calculateCurcumfrence(): number{
  // let radius = this.grabRadius()
  // let circumfrence = +radius * 2 * Math.PI;
  // return circumfrence
  // }

  // styleCircle(){
  //   let circle = this.grabCircle();
  //   let circumfrence = this.calculateCurcumfrence();
  //   circle.style.strokeDasharray = `${circumfrence}, ${circumfrence}`;
  //   circle.style.strokeDashoffset = `${circumfrence}`
  // }

  // setProgress(percent){ 
  //   this.styleCircle()
  //   let circle = this.grabCircle();
  //   let circumfrence = this.calculateCurcumfrence();
  //   let offset = circumfrence - (percent/100 * circumfrence);
  //   circle.style.strokeDashoffset = offset;
  // }


  ngOnInit(): void {

    
  // this.setProgress(50)
 
  
  }

}
