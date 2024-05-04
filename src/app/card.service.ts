import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  URL = 'https://rickandmortyapi.com/api';

  getCharacters(){
    return this.http.get(`${this.URL}/character`);
  }

  addCharacter(character: any){
    return this.http.post(`${this.URL}/addcharacter`, character);
  }
}
