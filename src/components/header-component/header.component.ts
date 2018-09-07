import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mcc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() section: EventEmitter<any>;

  constructor() {
    this.section = new EventEmitter();
  }

  public emitClick(target) {
    this.section.emit(target);
  }
}
