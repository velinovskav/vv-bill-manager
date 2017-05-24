import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvOverviewComponent } from './vv-overview.component';

describe('VvOverviewComponent', () => {
  let component: VvOverviewComponent;
  let fixture: ComponentFixture<VvOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VvOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
