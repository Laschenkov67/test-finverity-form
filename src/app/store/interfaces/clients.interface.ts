export interface IClients {
  id?: number;
  clientsInfo: IClientsInfo,
  clientAdress: IClientsAdress,
  clientConfirm: IClientConfirm
}

export interface IClientsInfo{
  surname: string;
  name: string;
  phone: string;
  address: string;
  pizza:string,
  dough: string,
  size: string,
  ingredients: []
}

export interface IClientsAdress{
  surname: string;
  name: string;
  phone: string;
  address: string;
  pizza:string,
  dough: string,
  size: string,
  ingredients: []
}

export interface IClientConfirm{
  surname: string;
  name: string;
  phone: string;
  address: string;
  pizza:string,
  dough: string,
  size: string,
  ingredients: []
}