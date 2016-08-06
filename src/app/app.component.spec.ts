/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BoardComponent } from './app.component';

beforeEachProviders(() => [BoardComponent]);
 
describe('App: Cli', () => {
  it('should create the app',
      inject([BoardComponent], (app: BoardComponent) => {
    expect(app).toBeTruthy();
  }));

});
