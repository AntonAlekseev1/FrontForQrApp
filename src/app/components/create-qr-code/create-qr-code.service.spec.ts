import { TestBed } from '@angular/core/testing';

import { CreateQrCodeService } from './create-qr-code.service';

describe('CreateQrCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateQrCodeService = TestBed.get(CreateQrCodeService);
    expect(service).toBeTruthy();
  });
});
