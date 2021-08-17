import { Order } from '../interfaces/clients.interface';
import { OrderActionTypes } from '../enums/clients.enum';
import { OrderService } from '../../services/order.service';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as orderActions from "../actions/clients.actions";

@Injectable()

export class OrderEffect {
  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}

  @Effect()
  loadOrders$: Observable<Action> = this.actions$.pipe(
    ofType<orderActions.LoadOrders>(
      OrderActionTypes.LOAD_ORDERS
    ),
    mergeMap((action: orderActions.LoadOrders) =>
      this.orderService.getOrders().pipe(
        map(
          (orders: Order[]) =>
            new orderActions.LoadOrdersSuccess(orders)
        ),
        catchError(err => of(new orderActions.LoadOrdersFail(err)))
      )
    )
  );

  @Effect()
  createOrder$: Observable<Action> = this.actions$.pipe(
    ofType<orderActions.CreateOrder>(
      OrderActionTypes.CREATE_ORDER
    ),
    map((action: orderActions.CreateOrder) => action.payload),
    mergeMap((order: Order) =>
      this.orderService.createOrder(order).pipe(
        map(
          (newOrder: Order) =>
            new orderActions.CreateOrderSuccess(newOrder)
        ),
        catchError(err => of(new orderActions.CreateOrderFail(err)))
      )
    )
  );
}