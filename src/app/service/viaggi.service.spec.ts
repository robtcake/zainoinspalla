import { TestBed } from '@angular/core/testing';

import { ViaggiService } from './viaggi.service';

describe('ViaggiService', () => {
  let service: ViaggiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViaggiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
