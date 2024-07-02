import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
    providedIn: 'root'
})

export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name: 'Goku',
        power: 15000
    }, {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }, {
        id: uuid(),
        name: 'Trunks',
        power: 10
    }];

    addCharacter(character: Character): void {
        const newCharacter = { id: uuid(), ...character };
        this.characters.push(newCharacter);
        console.log({chars:this.characters})
    }

    // onDeleteCharacter(id: number) : void{
    //     console.log(id);
    //     this.characters.splice(id,1);
    deleteCharacterById(id:string) : void{
        this.characters = this.characters.filter(character => character.id !== id);
    }
}