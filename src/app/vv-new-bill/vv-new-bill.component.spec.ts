import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvNewBillComponent } from './vv-new-bill.component';

describe('VvNewBillComponent', () => {
  let component: VvNewBillComponent;
  let fixture: ComponentFixture<VvNewBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VvNewBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvNewBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
