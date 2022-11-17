import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNavbarComponent } from './info-navbar.component';

describe('InfoNavbarComponent', () => {
  let component: InfoNavbarComponent;
  let fixture: ComponentFixture<InfoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
