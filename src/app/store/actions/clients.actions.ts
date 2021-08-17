import { Action } from '@ngrx/store';

import { IClients } from './../interfaces/clients.interface';
import { ClientsActionTypes } from '../enums/clients.enum';


export class LoadClients implements Action {
  readonly type = ClientsActionTypes.LOAD_CLIENTS;
}

export class LoadClientsSuccess implements Action {
  readonly type = ClientsActionTypes.LOAD_CLIENTS_SUCCESS;

  constructor(public payload: IClients[]) {}
}

export class LoadClientsFail implements Action {
  readonly type = ClientsActionTypes.LOAD_CLIENTS_FAIL;

  constructor(public payload: string) {}
}

export class CreateClient implements Action {
  readonly type = ClientsActionTypes.CREATE_CLIENT;

  constructor(public payload: IClients) {}
}

export class CreateClientSuccess implements Action {
  readonly type = ClientsActionTypes.CREATE_CLIENT_SUCCESS;

  constructor(public payload: IClients) {}
}

export class CreateClientFail implements Action {
  readonly type = ClientsActionTypes.CREATE_CLIENT_FAIL;

  constructor(public payload: string) {}
}

export type clientsActions =
  | LoadClients
  | LoadClientsSuccess
  | LoadClientsFail
  | CreateClient
  | CreateClientSuccess
  | CreateClientFail;