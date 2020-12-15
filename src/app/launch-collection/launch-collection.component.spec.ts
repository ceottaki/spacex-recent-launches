import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchCollectionComponent } from './launch-collection.component';

describe('LaunchCollectionComponent', () => {
  let component: LaunchCollectionComponent;
  let fixture: ComponentFixture<LaunchCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchCollectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Test component's output against given inputs.
});
