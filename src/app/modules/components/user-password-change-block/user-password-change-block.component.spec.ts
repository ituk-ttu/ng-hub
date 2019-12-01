import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPasswordChangeBlockComponent } from './user-password-change-block.component';

describe('UserPassowrdChangeBlockComponent', () => {
  let component: UserPasswordChangeBlockComponent;
  let fixture: ComponentFixture<UserPasswordChangeBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPasswordChangeBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPasswordChangeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
