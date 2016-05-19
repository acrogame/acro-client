import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AcroClientApp } from '../app/acro-client.component';

beforeEachProviders(() => [AcroClientApp]);

describe('App: AcroClient', () => {
  it('should create the app',
      inject([AcroClientApp], (app: AcroClientApp) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'acro-client works!\'',
      inject([AcroClientApp], (app: AcroClientApp) => {
    expect(app.title).toEqual('acro-client works!');
  }));
});
