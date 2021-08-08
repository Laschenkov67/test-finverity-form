import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedClientsComponent } from './created-clients.component';

describe('CreatedClientsComponent', () => {
  let component: CreatedClientsComponent;
  let fixture: ComponentFixture<CreatedClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
