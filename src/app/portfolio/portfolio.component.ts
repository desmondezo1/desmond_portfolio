import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public switch = "web"
web(){
  this.switch = "web"
}
design(){
  this.switch = "design"
}
  constructor() {
    
   }




  ngOnInit(): void {
    
  }

}
