import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../../core/services/products/products.service';
import {Product} from '../../../product.model';
import {Router} from '@angular/router';
import {MyValidators} from '../../../utils/validators';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }


  uploadFile(event) {
    event.preventDefault();
    const file = event.target.files[0];
    const name = 'image.png';
    const fileRef = this.angularFireStorage.ref(name);
    const task = this.angularFireStorage.upload(name, file);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url => {
            this.form.get('image').setValue(url);
          });
        })
      ).subscribe();
  }

  saveProduct(event: Event) {
    // ignore default event html send form
    event.preventDefault();
    this.form.markAllAsTouched();
    console.log(this.form.valid);
    // this.form.controls['title'].valueChanges.subscribe( val => console.log(val));
    if (this.form.valid) {
      const product: Product = this.form.value;
      this.productsService.create(product)
        .subscribe(newProduct => {
          console.log(newProduct);
          this.router.navigate(['admin/product/list']);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: '',
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
      /*
      company: null,
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.required],
      address2: null,
      city: [null, Validators.required],
      state: [null, Validators.required],
      postalCode: [null, Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(5)])
      ],
      shipping: ['free', Validators.required]
      */
    });
  }

  get titleField() {
    return this.form.get('title');
    // return this.form.controls['title'];
  }

}

