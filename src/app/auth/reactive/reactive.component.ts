import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  name = new FormControl('');

  constructor(private fb: FormBuilder) { }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.minLength(4)],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  })

  ngOnInit() {

  }


  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {

    console.warn(this.profileForm.value);
  }


}