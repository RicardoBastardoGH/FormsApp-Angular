import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm= {
    product: '',
    price: 10,
    stock: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  validPrice(): boolean {
    return ( this.myForm?.controls.price?.value < 0 &&
             this.myForm?.controls.price?.touched  )
  }

  validName(): boolean {
    return ( this.myForm?.controls.product?.invalid &&
            this.myForm?.controls.product?.touched )
  }
  save( ){
    // console.log(this.myForm.value);
    console.log("Posteo");
    this.myForm.resetForm({
      price: 0,
      stock: 0
    });
  }

}
