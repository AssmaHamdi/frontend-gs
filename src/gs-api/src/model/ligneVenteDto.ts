/**
 * gestion de stock REST API
 * gestion de stock api documentation
 *
 * The version of the OpenAPI document: 1.3.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { VentesDto } from './ventesDto';
import { ArticleDto } from './articleDto';


export interface LigneVenteDto { 
    id?: number;
    vente?: VentesDto;
    quantite?: number;
    prixUnitaire?: number;
    idEntreprise?: number;
    article?: ArticleDto;
}

