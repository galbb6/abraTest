import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPetScreenComponent } from './show-pet-screen.component';

describe('ShowPetScreenComponent', () => {
  let component: ShowPetScreenComponent;
  let fixture: ComponentFixture<ShowPetScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPetScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPetScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
