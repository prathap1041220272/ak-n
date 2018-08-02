import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyLogosComponent } from './lucky-logos.component';

describe('LuckyLogosComponent', () => {
  let component: LuckyLogosComponent;
  let fixture: ComponentFixture<LuckyLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
