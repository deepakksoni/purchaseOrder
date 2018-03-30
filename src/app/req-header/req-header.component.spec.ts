import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqHeaderComponent } from './req-header.component';

describe('ReqHeaderComponent', () => {
  let component: ReqHeaderComponent;
  let fixture: ComponentFixture<ReqHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
