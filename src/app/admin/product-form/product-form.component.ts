import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ProductRepository } from 'src/app/model/product.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.module';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public form: FormGroup;
  public name: FormControl;
  public category: FormControl;
  public description: FormControl;
  public price: FormControl;
  private id: number;

  constructor(
   private repository: ProductRepository,
   private router: Router,
   private activatedRout: ActivatedRoute
   ) { }

  ngOnInit() {
    const mode = this.activatedRout.snapshot.params['mode'];
    let product = new Product('', '', '', 0, '');
   

    if (mode === 'edit') {
        
        const id = +this.activatedRout.snapshot.params['id'];
        product = this.repository.getProductById(id);
      }

    this.name = new FormControl(product.name, Validators.required);
    this.category = new FormControl(product.category, Validators.required);
    this.description = new FormControl(product.description);
    this.price = new FormControl(product.price, Validators.required);

    this.form = new FormGroup( {
      name: this.name,
      category: this.category,
      description: this.description,
      price: this.price
    });
  }

  public save(): void {
    if (this.form.valid) {
      if (this.mode === 'create') {
        this.repository.createProduct(this.form.value);
      } else {
        this.repository.editProduct(this.form.value, this.id);
      }
      this.router.navigate(['/admin/main/products']);
    }

  }

}
