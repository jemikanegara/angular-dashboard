import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() message: string
  @Output() closeModal: EventEmitter<any> = new EventEmitter()

  close() {
    this.closeModal.emit("")
  }

  constructor() { }

  ngOnInit() {
  }

}
