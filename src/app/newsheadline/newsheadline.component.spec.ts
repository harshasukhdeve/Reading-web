import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsheadlineComponent } from './newsheadline.component';

describe('NewsheadlineComponent', () => {
  let component: NewsheadlineComponent;
  let fixture: ComponentFixture<NewsheadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsheadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsheadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
