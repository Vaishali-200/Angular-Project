import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group(
      {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['', [Validators.required,Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ['', [Validators.required]],
  })

   }


  ngOnInit(): void {
    
  }

}