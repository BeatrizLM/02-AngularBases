import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'dbz-add-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(){
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

  }
}
