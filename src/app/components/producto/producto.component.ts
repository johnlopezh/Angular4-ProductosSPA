import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.services';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  producto: any = {};
  constructor( private _activatedRoute: ActivatedRoute,
               private  _productosService: ProductosService
  ) {
    this._activatedRoute.params.subscribe( params => {
      this.producto = this._productosService.getProducto( params ['id']);
    });
   }

  ngOnInit() {
  }

}
