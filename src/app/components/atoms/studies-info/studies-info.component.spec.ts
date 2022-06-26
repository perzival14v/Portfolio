import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesInfoComponent } from './studies-info.component';

describe('StudiesInfoComponent', () => {
  let component: StudiesInfoComponent;
  let fixture: ComponentFixture<StudiesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
