import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCharacterComponent } from './about-character.component';

describe('AboutCharacterComponent', () => {
  let component: AboutCharacterComponent;
  let fixture: ComponentFixture<AboutCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
