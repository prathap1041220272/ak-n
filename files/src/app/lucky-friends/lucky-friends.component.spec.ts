import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyFriendsComponent } from './lucky-friends.component';

describe('LuckyFriendsComponent', () => {
  let component: LuckyFriendsComponent;
  let fixture: ComponentFixture<LuckyFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
