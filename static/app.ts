import { Component, View } from 'angular2/core';

@Component({
  selector: 'App'
})
@View({
  template: `
    <div>Hello my friends This is my app!</div>
  `
})
export class App {
  appStatus: string;

  constructor() {
    this.appStatus = 'Application is working.';
  }
}
