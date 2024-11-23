import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Character } from '../interfaces/character.interfaces';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] =[{
    id: uuidv4(),
    name:'Krilin',
    power: 1000,
  },
    {
      id: uuidv4(),
      name:'Goku',
    power: 9500,
  },
  {
    id: uuidv4(),
  name:'Vegeta',
  power: 8000
  }

  ];

  onNewCharacter( character: Character ): void {
  this.characters.push(character);
  }

  onDeletecharacter( index:number ) {
    this.characters.splice(index,1);
  }



}


