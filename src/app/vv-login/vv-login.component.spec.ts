import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvLoginComponent } from './vv-login.component';

describe('VvLoginComponent', () => {
  let component: VvLoginComponent;
  let fixture: ComponentFixture<VvLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VvLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
