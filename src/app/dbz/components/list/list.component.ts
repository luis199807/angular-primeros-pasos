import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Input()
public characterList: Character[]= [{
  name: 'Trunks',
  power: 10
}
]
@Output()
onDelete: EventEmitter<number> = new EventEmitter();

onDeleteCharacter(index: number):void {
  //TODO: Emitir ID del personaje

  this.onDelete.emit(index);
}

}
