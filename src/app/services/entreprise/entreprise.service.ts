import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import { EntrepriseControllerService, EntrepriseDto } from 'src/gs-api/src';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(
    private entreprisesService: EntrepriseControllerService
  ) { }

  sinscrire(entreprise: EntrepriseDto): Observable<EntrepriseDto> {
    return this.entreprisesService.save(entreprise);
  }
}
