import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaViaggiComponent } from './lista-viaggi.component';

describe('ListaViaggiComponent', () => {
  let component: ListaViaggiComponent;
  let fixture: ComponentFixture<ListaViaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaViaggiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaViaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
