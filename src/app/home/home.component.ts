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


  constructor() {}


  ngAfterViewInit(): void {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    });

    tl.add({
      targets: '.hi',
      opacity: [0, 1],
      translateY: [-20, 0]
    }).add({
      targets: '.desmond',
      opacity: [0, 1],
      translateY: [-20, 0]
    })
    .add({
      delay: 1800,
      targets: '.creative',
      opacity: [0, 1],
      translateY: [-20, 0]
    }).add({
      targets: '.designer',
      opacity: [0, 1],
      translateY: [-20, 0],
      offset: '-=500' // Delay the animation by 500ms compared to the previous keyframe
    });
   
  }

  }




