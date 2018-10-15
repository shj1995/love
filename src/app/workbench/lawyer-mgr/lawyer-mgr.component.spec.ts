import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerMgrComponent } from './lawyer-mgr.component';

describe('LawyerMgrComponent', () => {
  let component: LawyerMgrComponent;
  let fixture: ComponentFixture<LawyerMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
