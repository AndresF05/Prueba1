import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardService } from './card.service';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  people: any[] | undefined;
  title: any;
     
  constructor(private api:CardService){ }
  ngOnInit(){
    this.api.getCharacters().subscribe((ans:any)=>{
      this.people=ans.results
      console.log(ans);
    }) 
  }
}