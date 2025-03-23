import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzkarDetailsComponent } from './azkar-details.component';

describe('AzkarDetailsComponent', () => {
  let component: AzkarDetailsComponent;
  let fixture: ComponentFixture<AzkarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzkarDetailsComponent]
    });
    fixture = TestBed.createComponent(AzkarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
