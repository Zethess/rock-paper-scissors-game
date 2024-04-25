import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent {
  @Input() isFirstPlayerTheWinner:boolean = false;
  @Output() restartButtonPressed = new EventEmitter<void>();
  public restartGame():void{
    this.restartButtonPressed.emit();
  }
}
