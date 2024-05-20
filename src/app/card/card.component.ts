import { Component, Input, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardService } from '../card.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
  
})
export class CardComponent {

  @Input()
  product: any;
  title: any

  price = new FormControl('');
  description = new FormControl('');
  titulo = new FormControl('');
  images = new FormControl('');

  constructor(private CardService: CardService) { }

  deleteProduct (id: number) {
    console.log('Usted ha eliminando el producto: ', this.product.id);

    this.CardService.deleteP(this.product.id)
      .subscribe((response: any) => {
        console.log('El producto ha sido eliminado correctamente:', response);
        
      }, (error: any) => {
        console.error('Error al eliminar el producto:', error);
      }); 
  }

  edit (product: any) {
    console.log('Usted está editando el producto: ', this.product.id);

    this.CardService.deleteP(this.product.id)
      .subscribe((response: any) => {
        console.log('Producto editado correctamente:', response);
        
      }, (error: any) => {
        console.error('Error al editar producto:', error);
      }); 
  }
}