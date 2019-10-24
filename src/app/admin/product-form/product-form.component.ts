import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ProductRepository } from 'src/app/model/product.repository';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
   private repository: ProductRepository,
   private router: Router,
   private activatedRout: ActivatedRoute
   ) { }

  ngOnInit() {
  
    const mode = this.activatedRout.snapshot.params['mode'];
    let product = new Product(name: '', category: '', this.description: '', price: 0);

    if (mode === 'edit') {
        console.log(mode);
        const id = +this.activatedRout.snapshot.params[ 'id' ];
        product = this.repository.getProductById(id);
      }

    this.name = new FormControl('', Validators.required);
    this.category = new FormControl('', Validators.required);
    this.description = new FormControl('');
    this.price = new FormControl('', Validators.required);

    this.form = new FormGroup( {
      name: this.name,
      category: this.category,
      description: this.description,
      price: this.price
    });
  }

  public save(): void {
    if (this.form.valid) {
      this.repository.createProduct(this.form.value);
      this.router.navigate(['/admin/main/products']);
    }

  }

}
