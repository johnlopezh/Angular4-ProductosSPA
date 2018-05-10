import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../services/productos.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  Productos: any [] = [];
  termino: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productoService: ProductosService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.termino  = params['termino'];
      this.Productos = this._productoService.buscarPersona ( params ['termino']);
    });
  }

}
