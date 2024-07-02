import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent {
    @Output()
    public onDeleteId: EventEmitter<string> = new EventEmitter();

    @Input()
    public characterList: Character[] = [];

    onDeleteCharacter(id?:string):void {
        //TODO: Emitir id del personaje
        console.log({id});
        this.onDeleteId.emit(id);
    }
 }
