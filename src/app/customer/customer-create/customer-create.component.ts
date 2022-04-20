import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.sass'],
})
export class CustomerCreateComponent implements OnInit {
  formCustomer!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this._buildForm();
  }

  onSubmit() {
    const { name, email } = this.formCustomer.value;
    console.table({ name, email });

    if (this.formCustomer.invalid) {
      alert('Campos obrigatorios invalidos');
    }
  }

  private _buildForm() {
    this.formCustomer = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
    });
  }
}
