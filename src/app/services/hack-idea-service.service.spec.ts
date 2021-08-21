import { TestBed } from '@angular/core/testing';

import { HackIdeaServiceService } from './hack-idea-service.service';

describe('HackIdeaServiceService', () => {
  let service: HackIdeaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackIdeaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
