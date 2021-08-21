import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagRelatedComponent } from './tag-related.component';

describe('TagRelatedComponent', () => {
  let component: TagRelatedComponent;
  let fixture: ComponentFixture<TagRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagRelatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
