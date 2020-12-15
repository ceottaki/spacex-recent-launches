import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailsModalComponent } from './launch-details-modal.component';

describe('LaunchDetailsModalComponent', () => {
  let component: LaunchDetailsModalComponent;
  let fixture: ComponentFixture<LaunchDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
