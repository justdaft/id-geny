import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { IdGenyAppComponent } from '../app/id-geny.component';

beforeEachProviders(() => [IdGenyAppComponent]);

describe('App: IdGeny', () => {
  it('should create the app',
      inject([IdGenyAppComponent], (app: IdGenyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'id-geny works!\'',
      inject([IdGenyAppComponent], (app: IdGenyAppComponent) => {
    expect(app.title).toEqual('id-geny works!');
  }));
});
