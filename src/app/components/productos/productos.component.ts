import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.services';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  Productos: Producto[] = [];

  constructor(private _productosServices: ProductosService) {
   }

  ngOnInit() {
    this.Productos = this._productosServices.getProductod();
    console.log('Productos', this.Productos);
  }

}

