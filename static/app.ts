import { Component } from 'angular2/core';
import { Counter } from './counter';

@Component({
  selector: 'App',
  directives: [Counter],
  templateUrl: './app.html'
})

export class App {
}
