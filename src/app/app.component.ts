import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // div;
  title = 'desmond';
  showLoadAnimation: boolean = true;

  // @HostListener('mouseover', ['$event']) changeCursorToDivCursor(event){
  //   this.div.style.top = event.pageY + "px";
  //   this.div.style.left = event.pageX + "px";
  //   console.log(event);
  //   console.log('movement');
  // }

  // swapCursor(e){
  //   this.div = document.querySelector<HTMLElement>('.cursor');
  //   this.div.style.top = e.pageY + "px";
  //   this.div.style.left = e.pageX + "px";
  //   console.log(e);
  // }

  // startEvent(){
  //   window.addEventListener('mouseover', this.swapCursor);
  // }

  ngOnInit(): void {


    // this.startEvent();
  }



}
