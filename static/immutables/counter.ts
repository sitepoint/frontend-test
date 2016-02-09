/// <reference path="../../typings/main.d.ts" />

import { Record } from 'immutable';

const CounterRecord = Record({
    id: 0,
    title: '',
    currentCount: 0
});

export class Counter extends CounterRecord {

    id:number;
    title:string;
    currentCount:number;

    constructor(props) {
        super(props);
    }

}
