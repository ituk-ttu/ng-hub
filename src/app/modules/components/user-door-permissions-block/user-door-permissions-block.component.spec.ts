import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDoorPermissionsBlockComponent } from './user-door-permissions-block.component';

describe('UserDoorPermissionsBlockComponent', () => {
  let component: UserDoorPermissionsBlockComponent;
  let fixture: ComponentFixture<UserDoorPermissionsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDoorPermissionsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDoorPermissionsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
