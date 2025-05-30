import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBody } from './page-body';

describe('PageBody', () => {
  let component: PageBody;
  let fixture: ComponentFixture<PageBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
