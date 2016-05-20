import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AcroClientComponent } from '../app/acro-client.component';

beforeEachProviders(() => [AcroClientComponent]);

describe('App: AcroClient', () => {
  it('should create the app',
      inject([AcroClientComponent], (app: AcroClientComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'acro-client works!\'',
      inject([AcroClientComponent], (app: AcroClientComponent) => {
    expect(app.title).toEqual('acro-client works!');
  }));
});
