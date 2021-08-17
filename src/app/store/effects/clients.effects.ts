import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { IClients } from "../interfaces/clients.interface";
import { ClientsActionTypes } from '../enums/clients.enum';
import { ClientsService } from '../../services/clients.service';
import * as clientsActions from "../actions/clients.actions";

@Injectable()

export class OrderEffect {
  constructor(
    private actions$: Actions,
    private clientService: ClientsService
  ) {}

  @Effect()
  loadClients$: Observable<Action> = this.actions$.pipe(
    ofType<clientsActions.LoadClients>(
      ClientsActionTypes.LOAD_CLIENTS
    ),
    mergeMap((action: clientsActions.LoadClients) =>
      this.clientService.getClients().pipe(
        map(
          (clients: IClients[]) =>
            new clientsActions.LoadClientsSuccess(clients)
        ),
        catchError(err => of(new clientsActions.LoadClientsFail(err)))
      )
    )
  );

  @Effect()
  createClient$: Observable<Action> = this.actions$.pipe(
    ofType<clientsActions.CreateClient>(
      ClientsActionTypes.CREATE_CLIENT
    ),
    map((action: clientsActions.CreateClient) => action.payload),
    mergeMap((client: IClients) =>
      this.clientService.createClient(client).pipe(
        map(
          (newClient: IClients) =>
            new clientsActions.CreateClientSuccess(newClient)
        ),
        catchError(err => of(new clientsActions.CreateClientFail(err)))
      )
    )
  );
}