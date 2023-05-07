import { Component, OnInit} from '@angular/core';
import { FormGroup,  FormBuilder, FormControl, Validators, RequiredValidator } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
//   title = 'cocktailsApp';
//   //Create FormGroup
//   requiredForm!: FormGroup;
//   constructor(private fb: FormBuilder) {
//      this.myForm();
//   }

//   //Create required field validator for name
//   myForm() {
//      this.requiredForm = this.fb.group({
//      name: ['', Validators.required ]
//      });
//   }
// }

export class AppComponent {
  form: FormGroup;
  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  // submitForm() {
  //   var formData: any = new FormData();
  //   formData.append('name', this.form.get('name').value);
  //   formData.append('avatar', this.form.get('avatar').value);
  //   this.http
  //     .post('http://localhost:4000/api/create-user', formData)
  //     .subscribe({
  //       next: (response) => console.log(response),
  //       error: (error) => console.log(error),
  //     });
  // }
}
