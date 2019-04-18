import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyidCustomerComponent } from './getbyid-customer.component';

describe('GetbyidCustomerComponent', () => {
  let component: GetbyidCustomerComponent;
  let fixture: ComponentFixture<GetbyidCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetbyidCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbyidCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
