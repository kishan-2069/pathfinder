import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTextComponent } from './read-text.component';

describe('ReadTextComponent', () => {
  let component: ReadTextComponent;
  let fixture: ComponentFixture<ReadTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
