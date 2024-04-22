import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['../../app.component.scss']
})
export class GameOptionsComponent {
  @Output() fisrtPlayerSelection = new EventEmitter<string>();
  @Input() isOriginalGame:boolean = false;
  public selectedOption(option:string){
    this.fisrtPlayerSelection.emit(option);
  }
}
