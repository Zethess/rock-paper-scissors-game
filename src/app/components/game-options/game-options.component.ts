import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['../../app.component.scss']
})
export class GameOptionsComponent {
  @Output() fisrtPlayerSelection = new EventEmitter<string>();
  @Input() isOriginalGame:string = '';
  public selectedOption(option:string):void{
    this.fisrtPlayerSelection.emit(option);
  }
}
