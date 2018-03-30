import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqItemsComponent } from './req-items.component';

describe('ReqItemsComponent', () => {
  let component: ReqItemsComponent;
  let fixture: ComponentFixture<ReqItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
