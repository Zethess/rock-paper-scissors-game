import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(HeaderComponent) headerComponent!:HeaderComponent;
  public title = 'rock-paper-scissors';
  public optionSelectedByFirstPlayer = '';
  public optionSelectedBySecondPlayer = '';
  public isFirstPlayerTheWinner:boolean = false;
  public hasToShowModal = false;
  public isOriginalGame = true;
  public numberOfOptions = 3;
  public isOptionGameModeSelected = false;
  public initialConfGame: { [key: string]: [string, string] } =
  {
    header: ['logo.svg', 'logo-bonus.svg'],
    modal: ['image-rules.svg', 'image-rules-bonus.svg']
  };
  public modalImgRuthPath:string = this.initialConfGame['modal'][0];
  public headerImgRuthPath:string = this.initialConfGame['header'][0];
  ;
  constructor(
  ) {}
  public gameModeSelection(isBonusGame:boolean = false){
    this.isOriginalGame = isBonusGame;
    if (isBonusGame) {
      this.modalImgRuthPath = this.initialConfGame['modal'][1];
      this.headerImgRuthPath = this.initialConfGame['header'][1];
      this.numberOfOptions = 5;
    }
    this.isOptionGameModeSelected = true;

  }
  public selectedOption(option:string){
    this.optionSelectedByFirstPlayer = option;
  }
  public increaseMatchScore(eventData:[boolean,string]){
    this.isFirstPlayerTheWinner = eventData[0];
    this.optionSelectedBySecondPlayer = eventData[1];
    if (this.isFirstPlayerTheWinner) {
      this.headerComponent.incrementMatchScore();
    }
  }
  public restartGame(){
  this.optionSelectedByFirstPlayer = '';
  this.optionSelectedBySecondPlayer = '';
  this.isFirstPlayerTheWinner = false;
  }
  public changeModalFalse(){
    this.hasToShowModal = false;
  }
  public showModal(){
    this.hasToShowModal = true;
  }
}
