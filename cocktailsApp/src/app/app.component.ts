import { Component } from '@angular/core';
import { FormGroup,  FormBuilder, FormControl, Validators, RequiredValidator } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktailsApp';
  //Create FormGroup
  requiredForm!: FormGroup;
  constructor(private fb: FormBuilder) {
     this.myForm();
  }

  //Create required field validator for name
  myForm() {
     this.requiredForm = this.fb.group({
     name: ['', Validators.required ]
     });
  }
}
