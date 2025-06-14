import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplyComponent } from './job-apply.component';

describe('JobApplyComponent', () => {
  let component: JobApplyComponent;
  let fixture: ComponentFixture<JobApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
