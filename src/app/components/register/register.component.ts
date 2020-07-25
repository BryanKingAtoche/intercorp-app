import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared/models/customer-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public customer = new Customer();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birth: [new Date(), Validators.required]
    });
  }

  registerCustomer() {
    this.customer.name = this.registerForm.get('name').value;
    this.customer.lastname = this.registerForm.get('lastname').value;
    this.customer.age = 24;
    this.customer.birth = this.registerForm.get('birth').value;
    this.customer.death = new Date();
    console.log(this.customer);
  }
}
