import { Product } from '../../../product.model';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  DoCheck,
  OnDestroy
} from '@angular/core';
import {CartService} from '../../../core/services/cart.service';

@Component({
  // Decorator
  // MetaData from Component
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<string> = new EventEmitter();

  today = new Date();

  /* = {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
  };*/

  constructor(
    private cartSevice: CartService
  ) {
    console.log('1. constructor');
  }
  /*
  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges');
    console.log(changes);
  }

  Es la forma nativa de angular de detectar cambios,
  pero No es recomendable usarlo junto con ngDoCheck()
*/
  ngOnInit() {
    // Call data services
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    // Se pueden detectar cambios, con una implementación forzada o manual
    console.log('4. ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart() {
    console.log('added');
    this.cartSevice.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }
}

/*
Component life cycle

constructor // Crear componente y ponerlo en la interfaz
ngOnChanges // Detectar cambios en inputs (se ejecuta en cada cambio)
ngOnInit // Cuando el componente ya está listo en la interfaz grafica (rest api calls)
ngDoCheck // Cuando los componentes hijos son creados y puestos en la interfaz
  ngAfterContentInit
  ngAfterContentChecked
  ngAfterViewInit
  ngAfterViewChecked
ngOnDestroy // Cuando el elemento es quitado desde la interfaz
*/
