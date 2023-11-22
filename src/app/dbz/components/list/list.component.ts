import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interace';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  characterList: Character[] = [{
    name: 'Trunks',
    power: 1500
  }];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeletedCharacter(id?: string ): void {

    if ( !id ) return;

    this.onDelete.emit( id );
  }
}
