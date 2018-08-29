import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-backend-server-team';
 private bSections: boolean[];
 private backImage: string[];
 private selectedIndex: number;
 private scrollSize: number;

  constructor(){
    this.selectedIndex=0;
    this.bSections = [false,false,false,false,false];
    this.backImage = [
    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwPsyja2qthIP6ou09Phl0qxGoaeLexJIdGe153YeUDRwq1ve)',
    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0wbCPRqtOC47fqP1J8g8CV_np6abo_q1B46kSBgu1Dtrw2aG)',
    'url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350)',
    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw7pURtosUkpqRdjRKJ4tPD3HWyjWBvwrvRQtrQS9ILSVJvgl)',
    'url(http://www.innoenergy.com/wp-content/uploads/2015/11/Elena-Bou-20151.jpg)',
    'url(https://businessportraitsnyc.com/wp-content/uploads/2012/09/BusinessPortrait_hler.jpg)'];
    this.scrollSize = -64;
  }

  onViewportChange(inViewport: boolean, index: number){
    this.bSections[index] = inViewport;
    for (let index = 0,flag = true; index < 5 && flag; index++) {
      if(this.bSections[index] === true){
        flag = false;
        this.selectedIndex = index;
      }
    }
  }
  onMenuClick(index: number){
    this.selectedIndex = index;
  }  



}
