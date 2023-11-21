import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { Adresse, EntrepriseDto } from 'src/gs-api/src';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {

  entrepriseDto: EntrepriseDto = {
    adresse: {},
  };
  adresse: Adresse = {};
  errorsMsg: Array<string> = [];


  constructor(private entrepriseService: EntrepriseService){}

  ngOnInit(): void {
  }

  inscrire(): void {
    this.entrepriseDto.adresse = this.adresse;
    this.entrepriseService.sinscrire(this.entrepriseDto)
    .subscribe(entrepriseDto => {
     //todo
    },
     error => {
      this.errorsMsg = error.error.errors;
      });
  }

}
