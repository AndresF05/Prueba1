import { NgIf } from '@angular/common';
import { Component, Input,} from '@angular/core';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
  
})
export class CardComponent {
  @Input ()products: any;

  constructor() { }
  delete (productid : any)
  {
    console.log(productid);
  }

  edit (productid : any)
  {
    console.log(productid);
  }
  



}