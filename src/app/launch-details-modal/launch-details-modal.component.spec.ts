import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LaunchDetailsModalComponent } from './launch-details-modal.component';
import { ArrayJoinPipe } from '../array-join.pipe';
import { BoolToYesNoPipe } from '../bool-to-yes-no.pipe';

describe('LaunchDetailsModalComponent', () => {
  let component: LaunchDetailsModalComponent;
  let fixture: ComponentFixture<LaunchDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ArrayJoinPipe,
        BoolToYesNoPipe,
        LaunchDetailsModalComponent,
      ],
      imports: [NgbModule],
      providers: [NgbActiveModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Test component's output against given inputs.
});
