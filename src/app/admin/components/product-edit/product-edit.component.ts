import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../../core/services/products/products.service';
import {Product} from '../../../product.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MyValidators} from '../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
    this.form.markAllAsTouched();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.get(this.id)
        .subscribe( product => {
          this.form.patchValue(product);
        });
    });
  }

  saveProduct(event: Event) {
    // ignore default event html send form
    event.preventDefault();
    this.form.markAllAsTouched();
    console.log(this.form.valid);
    // this.form.controls['title'].valueChanges.subscribe( val => console.log(val));
    if (this.form.valid) {
      const product: Product = this.form.value;
      this.productsService.update(this.id, product)
        .subscribe(newProduct => {
          console.log(newProduct);
          this.router.navigate(['admin/product/list']);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5)])
      ],
      price: [0,
        Validators.compose([
          Validators.required,
          MyValidators.isValidPrice(100, 200)])
      ],
      image: '',
      description: ['', Validators.required]
    });
  }

  get titleField() {
    return this.form.get('title');
    // return this.form.controls['title'];
  }

}
