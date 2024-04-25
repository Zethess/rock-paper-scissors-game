import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-selections',
  templateUrl: './game-selections.component.html',
  styleUrls: ['../../app.component.scss']
})
export class GameSelectionsComponent implements OnChanges {
  @Input() firstPlayerSelection:string = '';
  @Input() secondPlayerSelection:string = '';
  @Input() numberOfSelections:number = 3;
  @Output() isFirstPlayerTheWinner = new EventEmitter<[boolean,string]>();
  public winMap: { [key: string]: [string, string] } = {
    'scissors-icon': ['paper-icon','lizard-icon'],
    'paper-icon': ['rock-icon','spock-icon'],
    'rock-icon': ['scissors-icon','lizard-icon'],
    'lizard-icon': ['spock-icon','paper-icon'],
    'spock-icon': ['rock-icon','scissors-icon'],
  };
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.firstPlayerSelection && changes.firstPlayerSelection.currentValue !== '' ) {
      setTimeout(() => {
        this.secondSelectionByIA();
      }, 1000);
    }
  }
  private secondSelectionByIA():void{
  this.secondPlayerSelection = Object.keys(this.winMap)[Math.floor(Math.random() * this.numberOfSelections)];
  this.checkIfFirstPlayerWin();
  }
  public checkIfFirstPlayerWin(){
    let firstPlayerWin:boolean = this.winMap[this.firstPlayerSelection][0] === this.secondPlayerSelection;
    if (this.numberOfSelections === 5) {
      let bonusGameOptionCheck = this.winMap[this.firstPlayerSelection][1] === this.secondPlayerSelection || firstPlayerWin;
      firstPlayerWin = bonusGameOptionCheck;
    }
  this.isFirstPlayerTheWinner.emit([firstPlayerWin,this.secondPlayerSelection]);
  }
}
