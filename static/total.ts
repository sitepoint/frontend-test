import { Component } from 'angular2/core';

@Component({
  selector: 'total',
  template: '<div>{{total}}</div>'
})

export class Total {

  private total;

  constructor() {
    this.total = 100;
  }
}
