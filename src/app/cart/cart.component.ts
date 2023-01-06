import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../cart.service';
import { Cart } from './cart.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent extends Cart {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {
    super();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.warn(
      'Your order has been submitted',
      customerData,
      'Total: ',
      super.getTotal(this.items)
    );

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    this.router.navigate(['']);
  }
}
