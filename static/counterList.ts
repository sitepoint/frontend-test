import { Component, Inject } from 'angular2/core';
import { increment, decrement } from './actions/counterAction';

@Component({
  selector: 'counter-list',
  templateUrl: './counterList.html',
  inputs: ['counterList']
})

export class CounterList {

  private ngRedux;

  constructor( @Inject('ngRedux') ngRedux) {
    this.ngRedux = ngRedux;
  }

  increaseCount($event, counter) {
    $event.preventDefault();
    this.ngRedux.dispatch(increment(counter));
  }

  decreaseCount($event, counter) {
    $event.preventDefault();
    this.ngRedux.dispatch(decrement(counter));
  }
}
