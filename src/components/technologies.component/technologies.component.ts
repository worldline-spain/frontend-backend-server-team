import { Component } from '@angular/core';

import { Technologies } from '../../constants/technologies.constants';

@Component({
  selector: 'mcc-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {

  public technologies: any;

  constructor() {
    this.technologies = Technologies;
  }

}
