import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeviceDetailsComponent } from './all-device-details.component';

describe('AllDeviceDetailsComponent', () => {
  let component: AllDeviceDetailsComponent;
  let fixture: ComponentFixture<AllDeviceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDeviceDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
