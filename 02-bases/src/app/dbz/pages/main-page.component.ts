import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbx-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPaigeComponent implements OnInit {

    constructor(private dbzService: DbzService) {
    };

    ngOnInit(): void {}

    get characters(): Character[] {
        return [...this.dbzService.characters]
    }
    
    onDeleteCharacter(id: string): void {
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }

}