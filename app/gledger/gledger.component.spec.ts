import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GledgerComponent } from './gledger.component';

describe('GledgerComponent', () => {
  let component: GledgerComponent;
  let fixture: ComponentFixture<GledgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GledgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
