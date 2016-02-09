/// <reference path="../../typings/main.d.ts" />
import { List } from 'immutable';
import {
INCREMENT_COUNTER,
DECREMENT_COUNTER,
LOAD_COUNTERS,
DELETE_COUNTER,
SAVE_COUNTER
} from '../actions/counterAction';
import { Counter } from '../immutables/counter';

export default function(state: List<Counter>, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      let incrementCounter: Counter = state.get(action.counter.id);
      return state.set(
        incrementCounter.id,
        new Counter({
          id: incrementCounter.id,
          title: incrementCounter.title,
          currentCount: incrementCounter.currentCount += 1
        })
      );
    case DECREMENT_COUNTER:
      let decrementCounter: Counter = state.get(action.counter.id);
      return state.set(
        decrementCounter.id,
        new Counter({
          id: decrementCounter.id,
          title: decrementCounter.title,
          currentCount: decrementCounter.currentCount -= 1
        })
      );
    case LOAD_COUNTERS:
      state = action.counterList;
      return List(state);
    case DELETE_COUNTER:
      let counterIndex = state.findIndex((counter) => counter.id === action.counter.id);
      return List(state.delete(counterIndex));
    case SAVE_COUNTER:
      return List(state.push(action.counter));
    default:
      return List(state);
  }
}
