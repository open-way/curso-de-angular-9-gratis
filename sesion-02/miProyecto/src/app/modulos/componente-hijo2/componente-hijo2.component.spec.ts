import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHijo2Component } from './componente-hijo2.component';

describe('ComponenteHijo2Component', () => {
  let component: ComponenteHijo2Component;
  let fixture: ComponentFixture<ComponenteHijo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteHijo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteHijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
