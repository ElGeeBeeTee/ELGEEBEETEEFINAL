import { TestBed } from '@angular/core/testing';

import { ForumItemService } from './forum-item.service';

describe('ForumItemService', () => {
  let service: ForumItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
