import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyStonesComponent } from './lucky-stones.component';

describe('LuckyStonesComponent', () => {
  let component: LuckyStonesComponent;
  let fixture: ComponentFixture<LuckyStonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyStonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyStonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
