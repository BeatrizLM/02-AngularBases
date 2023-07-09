import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';
@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class DBZMainComponent{
   constructor ( private dbzService: DbzService) {}

   get characters(): Character[]{
    return [...this.dbzService.characters];
   }

   onDeleteId(id: string): void{
    this.dbzService.onDeleteId(id);
   }

   onNewCharacter(character: Character):void{
    this.dbzService.onNewCharacter(character);
   }
}