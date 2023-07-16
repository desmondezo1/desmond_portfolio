import { AfterViewInit, Component, OnInit } from '@angular/core';
//import * as anime from 'animejs';
import anime from "animejs/lib/anime.es.js";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
anime: any


constructor() {
}

   ngAfterViewInit(): void {
    let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000
      });

      tl.add({
        targets: [".hi",".desmond",".creative",".designer","h2"],
     opacity: 0
      }).add({
     targets: ".hi",
     opacity: 1
    }).add({
      targets: ".desmond",
      opacity: 1
    }).add({
      delay: 1500,
      targets:[".creative","h2"],
      opacity: 1
    }).add({
      targets:[".designer","h2"],
      opacity: 1
    })

   }
  }


  // ngOnInit(): void {
    
    

 

  // }


