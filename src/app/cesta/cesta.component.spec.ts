import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cesta } from './cesta.component';

describe('Cesta', () => {
  let component: Cesta;
  let fixture: ComponentFixture<Cesta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cesta],
    }).compileComponents();

    fixture = TestBed.createComponent(Cesta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
