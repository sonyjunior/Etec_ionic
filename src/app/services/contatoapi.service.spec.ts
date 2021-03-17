import { TestBed } from '@angular/core/testing';

import { ContatoapiService } from './contatoapi.service';

describe('ContatoapiService', () => {
  let service: ContatoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
