import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() hasToCloseModal = new EventEmitter<void>();
  @Input() imgPath:string = '';
  public closeModal(){
    this.hasToCloseModal.emit();
  }
}
