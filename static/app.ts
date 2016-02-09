/// <reference path="../typings/main.d.ts" />

import { Component, Inject } from 'angular2/core';
import { Counter } from './immutables/counter';
import { CounterList } from './counterList';
import { CounterService } from './services/counterService';
import { loadCounters } from './actions/counterAction';
import { List } from 'immutable';

@Component({
  selector: 'App',
  directives: [CounterList],
  templateUrl: './app.html'
})

export class App {

  private counterList;
  private store;

  constructor(@Inject('ngRedux') ngRedux, private counterService: CounterService) {
    console.log(ngRedux);
    this.store = ngRedux;
    console.log(this.store.getState());
    this.counterService.loadCounters()
      .subscribe(
      res => {
        this.counterList = (<Object[]>res.json()).map((counter: any) =>
          new Counter({ id: counter.id, title: counter.title, currentCount: counter.count }));
        this.store.dispatch(loadCounters(List<Counter>(this.counterList)));
        //this.store.dispatch(totalCounters(List<Counter>(this.counterList)));
      },
      err => console.log('Error retrieving counters')
      );
    this.store.subscribe(
      state => console.log('New state received ')
    );
  }

}
