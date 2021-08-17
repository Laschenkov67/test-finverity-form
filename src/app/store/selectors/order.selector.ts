import { createFeatureSelector, createSelector } from "@ngrx/store";
import { clientAdapter, ClientsState } from "../reducers/clients.reducer";

const getOrderFeatureState = createFeatureSelector<ClientsState>("orders");
  
  export const getClients = createSelector(
    getOrderFeatureState,
    clientAdapter.getSelectors().selectAll
  );
  
  export const getClientsLoading = createSelector(
    getOrderFeatureState,
    (state: ClientsState) => state.loading
  );
  
  export const getClientsLoaded = createSelector(
    getOrderFeatureState,
    (state: ClientsState) => state.loaded
  );
  
  export const getError = createSelector(
    getOrderFeatureState,
    (state: ClientsState) => state.error
  );
  
  export const getCurrentClientId = createSelector(
    getOrderFeatureState,
    (state: ClientsState) => state.selectedClientId
  );

  export const getCurrentClient = createSelector(
    getOrderFeatureState,
    getCurrentClientId,
    state => state.entities[state.selectedClientId]
  );