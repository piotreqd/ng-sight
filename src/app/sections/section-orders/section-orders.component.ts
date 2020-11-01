import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/Order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1,
      total: 230,
      customer: {id: 1, name: 'AIUT sp. z.o.o', state: 'Śląskie', email: 'cos@gmail.com'},
      placed: new Date(2020, 11, 1),
      fulfilled : new Date(2020, 11, 20),
      status: 'Completed'
    }
  ];

  ngOnInit(): void {
  }

}
