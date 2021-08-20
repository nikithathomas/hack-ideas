import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackChallengesComponent } from './hack-challenges.component';

describe('HackChallengesComponent', () => {
  let component: HackChallengesComponent;
  let fixture: ComponentFixture<HackChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackChallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
