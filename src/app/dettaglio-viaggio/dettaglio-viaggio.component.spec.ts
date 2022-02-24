import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioViaggioComponent } from './dettaglio-viaggio.component';

describe('DettaglioViaggioComponent', () => {
  let component: DettaglioViaggioComponent;
  let fixture: ComponentFixture<DettaglioViaggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioViaggioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioViaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
