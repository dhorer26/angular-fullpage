import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // tslint:disable-next-line: variable-name
  fullpage_api: any;
  config: any;
  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin: any, destination: any, direction: any) => {
        console.log(origin.index);
      }
    };
  }
  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }
}
