import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvBillItemComponent } from './vv-bill-item.component';

describe('VvBillItemComponent', () => {
  let component: VvBillItemComponent;
  let fixture: ComponentFixture<VvBillItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VvBillItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvBillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
