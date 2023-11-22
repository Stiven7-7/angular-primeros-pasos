import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'; //identificador unico
import { Character } from '../interfaces/character.interace';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 8500
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(),...character };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  }
