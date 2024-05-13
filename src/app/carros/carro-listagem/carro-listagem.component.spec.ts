import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroDetalheComponent } from './carro-listagem.component';

describe('CarroDetalheComponent', () => {
  let component: CarroDetalheComponent;
  let fixture: ComponentFixture<CarroDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
