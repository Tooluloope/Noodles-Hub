import {Component, Input, OnInit} from '@angular/core';
import {RestaurantService} from '../../../shared/services/restaurant.service';
import {ProductService} from '../../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';
import {Product} from '../../../shared/model/product';


@Component({
  selector: 'app-product-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  restaurants$;
  id;
  product: Product = {
    $key: '',
    title: '',
    price: 0 ,
    restaurant: '' ,
    imageUrl: ''
  };
  constructor(private restaurantService: RestaurantService,
              private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
    this.restaurants$ = this.restaurantService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).take(1).subscribe(p => this.product = p);
    }

  }
  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/restaurants']);
  }
  delete() {
    if (!confirm('Are you sure you want to delete this product?')) { return ; }
      this.productService.delete(this.id);
      this.router.navigate(['/admin/restaurants']);
  }

  ngOnInit() {

}

}
