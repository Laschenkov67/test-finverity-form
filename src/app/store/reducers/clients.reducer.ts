import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { IClients } from './../interfaces/clients.interface';
import { ClientsActionTypes } from '../enums/clients.enum';

import * as clientsActions from "../actions/clients.actions";
import * as fromRoot from "../state/app-state";

export interface ClientsState extends EntityState<IClients> {
  selectedClientId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  clients: ClientsState;
}

export const clientAdapter: EntityAdapter<IClients> = createEntityAdapter<IClients>();

export const defaultClient: ClientsState = {
  ids: [],
  entities: {},
  selectedClientId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = clientAdapter.getInitialState(defaultClient);

export function clientsReducer(
  state = initialState,
  action: clientsActions.clientsActions
): ClientsState {
  switch (action.type) {
    case ClientsActionTypes.LOAD_CLIENTS_SUCCESS: {
      return clientAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case ClientsActionTypes.LOAD_CLIENTS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case ClientsActionTypes.CREATE_CLIENT_SUCCESS: {
      return clientAdapter.addOne(action.payload, state);
    }
    case ClientsActionTypes.CREATE_CLIENT_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}