import { Component } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'mcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private scrollToService: ScrollToService
  ) {

  }

  public triggerScrollTo(target) {
    let config: ScrollToConfigOptions;
    if (target === 'mobile-competence') {
      config = { target };
    } else {
      config = { target, offset: -56 };
    }
    this.scrollToService.scrollTo(config);
  }
}
