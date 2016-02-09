import 'angular2/bundles/angular2-polyfills';
import { bootstrap } from 'angular2/platform/browser';
import { App } from './App';
import { HTTP_PROVIDERS } from 'angular2/http';
import configureStore from './stores/configureStore';
import { CounterService } from './services/counterService';

const provider = require('ng2-redux').provider;
const store = configureStore();

bootstrap(App, [ HTTP_PROVIDERS, CounterService, provider(store) ]);
