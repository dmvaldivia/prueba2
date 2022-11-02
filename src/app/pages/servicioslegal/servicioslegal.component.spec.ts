import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioslegalComponent } from './servicioslegal.component';

describe('ServicioslegalComponent', () => {
  let component: ServicioslegalComponent;
  let fixture: ComponentFixture<ServicioslegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioslegalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioslegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
