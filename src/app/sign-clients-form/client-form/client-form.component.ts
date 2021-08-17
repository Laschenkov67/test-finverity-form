import { IClientsInfo } from './../../store/interfaces/clients.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})

export class ClientFormComponent implements OnInit {
  formOrder: FormGroup;

  newOrder: IClientsInfo = {
    surname: "",
    name: "",
    phone: "",
    address: "",
    pizza: "",
    dough: "",
    size: "",
    ingredients:[]
  };

  private clients: Array<string> = [
    "VIP клиенты", 
    "Постоянные клиенты", 
    "Новые клиенты"
  ];

  private coordinator: Array<string> = [
    "Иванов", 
    "Захаров", 
    "Чернышева"
  ];

  constructor(
    //private store: Store<fromOrder.AppState>
    ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.formOrder = new FormGroup({
      //Фамилия
      surname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),

      //Имя
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),

      //Отчество
      secondname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),

      //Дата рождения
      birthday: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),

      //Телефон
      phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]),

      //Пол
      sex: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]),

      clientsGroup: new FormControl("Новые клиенты", [Validators.required]),
      coordinator: new FormControl("Иванов", [Validators.required]),
      sms: new FormControl(null, [Validators.required]),
    });

  }

  createOrder() {
    const newOrder = {...this.formOrder.value};
    this.store.dispatch(new orderActions.CreateOrder(newOrder));
    this.formOrder.reset();
  }

}
