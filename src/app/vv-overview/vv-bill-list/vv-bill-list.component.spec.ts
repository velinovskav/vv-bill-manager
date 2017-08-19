import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvBillListComponent } from './vv-bill-list.component';

describe('VvBillListComponent', () => {
  let component: VvBillListComponent;
  let fixture: ComponentFixture<VvBillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VvBillListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
