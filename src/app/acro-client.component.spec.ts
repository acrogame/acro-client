import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AcroClientAppComponent } from '../app/acro-client.component';

beforeEachProviders(() => [AcroClientAppComponent]);

describe('App: AcroClient', () => {
  it('should create the app',
      inject([AcroClientAppComponent], (app: AcroClientAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'acro-client works!\'',
      inject([AcroClientAppComponent], (app: AcroClientAppComponent) => {
    expect(app.title).toEqual('acro-client works!');
  }));
});
