import { OnInit } from '@angular/core';

export class Cart implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getTotal(items: any[]): number {
    let total: number = 0;

    items.forEach((x) => {
      total = total + <number>x.price;
    });

    return total;
  }
}
