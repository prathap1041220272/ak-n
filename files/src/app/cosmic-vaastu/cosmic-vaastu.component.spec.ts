import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmicVaastuComponent } from './cosmic-vaastu.component';

describe('CosmicVaastuComponent', () => {
  let component: CosmicVaastuComponent;
  let fixture: ComponentFixture<CosmicVaastuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmicVaastuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmicVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
