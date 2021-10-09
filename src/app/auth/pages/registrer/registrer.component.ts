import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styles: [
  ]
})
export class RegistrerComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern( this.validatorsService.nameLastNamePattern ) ]],
    email: [ '', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ], [this.emailValidator ]],
    username: [ '', [ Validators.required , this.validatorsService.noPuedeSerStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    password2: ['', [ Validators.required ] ]
  },{
    validators: [ this.validatorsService.matchFilds('password','password2')]
  })

  get emailErrorMsg(): string{
    const errors = this.myForm.get('email')?.errors;
    if( errors?.required ) { return 'Email es obligatorio'; }
    if( errors?.pattern ) { return 'El formato del correo es invalido'; }
    if( errors?.emailTaken ) { return 'EL email ya se encuentra en uso'; }
    return ''
  }

  constructor( private fb: FormBuilder,
               private validatorsService: ValidatorsService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Ricardo Bastardo',
      email: "test1@test.com",
      username: "bastvai",
      password: 1234567,
      password2: 1234567
    })
  }

  invalidField ( field: string ) {
    return this.myForm.get(field)?.invalid &&
            this.myForm.get(field)?.touched
  }

  // emailRequired(){
  //   return this.myForm.get('email')?.errors?.required &&
  //           this.myForm.get('email')?.touched
  // }

  // emailFormat(){
  //   return this.myForm.get('email')?.errors?.pattern &&
  //           this.myForm.get('email')?.touched
  // }

  // emailTaken(){
  //   return this.myForm.get('email')?.errors?.emailTaken &&
  //           this.myForm.get('email')?.touched
  // }

  submitForm(){
    console.log( this.myForm.value );

    this.myForm.markAllAsTouched();
  }

}
