import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardService } from './card.service';
import { NgForOf } from '@angular/common';
import { FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf, NgIf], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{

  products: any;
  title = new FormControl('');
  price = new FormControl('');
  description = new FormControl('');
  categoryId = new FormControl('');
  images = new FormControl('');
  
 
     
  constructor(private cardService: CardService) { }
  
  
  ngOnInit() {
    this.cardService.getProducts().subscribe(data => { 
      this.products = data; 
    });
  }

  onSubmit() {

      const newProduct = {
      title: this.title.value,
      price: this.price.value,
      description: this.description.value,
      categoryId: this.categoryId.value,
      images: this.images.value
    }
    this.cardService.createProduct(newProduct).subscribe((res: any)=>{
      console.log(res);
    });
  
  }
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}