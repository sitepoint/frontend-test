import { Component } from 'angular2/core';
import { CounterService } from './services/counter';

@Component({
  selector: 'counter',
  providers: [
    CounterService
  ],
  templateUrl: './counter.html'
})

export class Counter {

  private counterList;
  private total;

  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.counterList = this.counterService.getCounters();
    this.total = 100;
  }
}
