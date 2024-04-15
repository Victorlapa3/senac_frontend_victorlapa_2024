import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaListagemComponent } from './carta-listagem.component';

describe('CartaListagemComponent', () => {
  let component: CartaListagemComponent;
  let fixture: ComponentFixture<CartaListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
