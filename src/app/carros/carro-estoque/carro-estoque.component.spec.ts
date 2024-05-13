import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosMontadorasComponent } from './carro-estoque.component';

describe('CarroEstoqueComponent', () => {
  let component: CarrosMontadorasComponent;
  let fixture: ComponentFixture<CarrosMontadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosMontadorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosMontadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
