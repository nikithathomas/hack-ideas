import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHackIdeasComponent } from './add-hack-ideas.component';

describe('AddHackIdeasComponent', () => {
  let component: AddHackIdeasComponent;
  let fixture: ComponentFixture<AddHackIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHackIdeasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHackIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
