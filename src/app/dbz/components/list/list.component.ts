import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();
  @Input() // Si no me mandan nada ese es el valor por defecto
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  onDeleteId(id?: string): void{

    if(!id) return;
    this.onDeleteCharacter.emit(id);

  }
}
