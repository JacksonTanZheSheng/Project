import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandNavigatorComponent } from './command-navigator.component';

describe('CommandNavigatorComponent', () => {
  let component: CommandNavigatorComponent;
  let fixture: ComponentFixture<CommandNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
