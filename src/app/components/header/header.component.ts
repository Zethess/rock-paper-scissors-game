import { Component, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @Input() headerImgPath:string = '';
  public matchScore: number = 0;
  public incrementMatchScore(){
    this.matchScore ++;
  }

}

