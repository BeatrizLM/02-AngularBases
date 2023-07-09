import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({ // Los servicios son clases corrientes con sus propiedades. Pero el decorador injectable hace que la clase se considere como un servicio
    providedIn: 'root'
})
export class DbzService {
    //constructor() { }
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 500
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ] 

    onNewCharacter(character: Character): void{
        const newCharacter: Character  = {id: uuid(), ...character};
        this.characters.push(newCharacter);
    }

    onDeleteId(id: string): void {

        this.characters = this.characters.filter(character=>character.id !== id);
    }
}