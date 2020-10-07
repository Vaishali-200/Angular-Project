import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.registerForm=this.formBuilder.group( {
        firstName: ['', [Validators.required]],
        lasttName: ['', [Validators.required]],
        username: ['', [Validators.required]], 
        email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
        password: ['', [Validators.required]],
        description: ['', [Validators.required]],
        number: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        linkedin: ''
      });
   }

  ngOnInit(): void {
  }

  onSubmit()
  {
    
  }

}
