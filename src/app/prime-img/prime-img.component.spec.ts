import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeImgComponent } from './prime-img.component';

describe('PrimeImgComponent', () => {
  let component: PrimeImgComponent;
  let fixture: ComponentFixture<PrimeImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
