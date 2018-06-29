import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HttpServiceService } from './../services/http-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public myForm: any;
  public userData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: 18
  };
  constructor(private _httpService: HttpServiceService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('18', Validators.compose([Validators.required])),
      confirm_password: new FormControl('', Validators.compose([Validators.required)),
      age: new FormControl('18', Validators.compose([Validators.required]))
    })
  }

  checkConfirmPassword(control: AbstractControl) {
    if (control.value === this.userData.password) {
      return { valid: true }
    }
    else {
      return { valid: false };
    }
  }
  saveData() {
    this._httpService.saveData(this.userData).subscribe(response => {
      console.log('Response ', response);
    }, err => console.log('Save error: ', err));
  }

}
