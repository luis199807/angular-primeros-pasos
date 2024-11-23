import { DbzService } from '../services/app.service';
import { Character } from './../interfaces/character.interfaces';
import { Component} from '@angular/core';


@Component({
    selector: 'a-dbz-main-page',
    templateUrl: './main.page.component.html',
    styleUrls: ['./main.page.component.css']
})

export class MainPageComponent  {

  constructor( public dbzService: DbzService ) {}

}
