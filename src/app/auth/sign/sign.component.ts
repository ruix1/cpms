import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  profileForm: FormGroup;
  content1: any;
  counter: any;

  constructor() {
    this.profileForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        this.emailDomainValidator
      ]),
      password: new FormControl('', [
        Validators.required,
        this.passwordValidator
      ]),
      content: new FormControl(''),
    });
  }

  //counter = this.profileForm.content.value.length;
  emailDomainValidator(control: FormControl) {

    let email = control.value;
    if (email && email.indexOf("@") != -1) {
      return null;
    } else {
      return {
        emailDomainValidator: {
          valid: false
        }
      }
    }
  }

  passwordValidator(control: FormControl) {

    let password = control.value;
    if (password.length > 8 && password.length < 16) {
      return null;
    } else {
      return {
        passwordValidator: {
          valid: false
        }
      }
    }
  }

  ngOnInit() {
    // this.profileForm = new FormGroup({
    //   email: new FormControl('', [
    //     Validators.required,
    //     this.emailDomainValidator
    //   ]),
    //   password: new FormControl('', [
    //     Validators.required,
    //     this.passwordValidator
    //   ]),
    //   content: new FormControl(''),
    // });

  }
  onSubmit() {
    console.log(this.profileForm);

  }

  getlength() {
    //this.profileForm.get("content").value.length;
    //if (this.content1 != " " && this.content1 != undefined) {
    if (this.profileForm.get('content').value !== undefined && this.profileForm.get('content').value !== "") {
      //   return this.content1.length;
      return this.profileForm.get("content").value.length;
    } else {
      return 0;
    }

  }


}


