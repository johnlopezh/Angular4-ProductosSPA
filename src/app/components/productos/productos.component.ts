import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  Productos: Producto[] = [];

  constructor(
    private _productosServices: ProductosService,
    private _router: Router
    ) {}

  ngOnInit() {
    this.Productos = this._productosServices.getProductos();
  }
  verProducto(idx: number) {
    this._router.navigate( ['/producto', idx] );
  }
}

