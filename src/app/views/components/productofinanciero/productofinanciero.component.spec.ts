import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductofinancieroComponent } from './productofinanciero.component';

describe('ProductofinancieroComponent', () => {
  let component: ProductofinancieroComponent;
  let fixture: ComponentFixture<ProductofinancieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductofinancieroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductofinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
