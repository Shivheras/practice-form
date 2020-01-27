import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  registerForm: FormGroup;
submitted = false;

constructor(private formBuilder: FormBuilder) { }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fullName:[''],
             email:[''],
             password:[''],
            rePassword:[''],
              altEmail:[''],
             mobileNo:[''],
             day:[''],
              month:[''],
               year:[''],
                gender:[''],
               country:[''],
                  city:['']
  

        });
    }
 
    submit()
  {
    console.log(this.userFormGroup.value);
  }
}
