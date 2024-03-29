export * from './articleController.service';
import { ArticleControllerService } from './articleController.service';
export * from './categoryController.service';
import { CategoryControllerService } from './categoryController.service';
export * from './clientController.service';
import { ClientControllerService } from './clientController.service';
export * from './commandeClientController.service';
import { CommandeClientControllerService } from './commandeClientController.service';
export * from './commandeFournisseurController.service';
import { CommandeFournisseurControllerService } from './commandeFournisseurController.service';
export * from './entrepriseController.service';
import { EntrepriseControllerService } from './entrepriseController.service';
export * from './fournisseurController.service';
import { FournisseurControllerService } from './fournisseurController.service';
export * from './mvtStkController.service';
import { MvtStkControllerService } from './mvtStkController.service';
export * from './photoController.service';
import { PhotoControllerService } from './photoController.service';
export * from './utilisateurController.service';
import { UtilisateurControllerService } from './utilisateurController.service';
export * from './ventesController.service';
import { VentesControllerService } from './ventesController.service';
export const APIS = [ArticleControllerService, CategoryControllerService, ClientControllerService, CommandeClientControllerService, CommandeFournisseurControllerService, EntrepriseControllerService, FournisseurControllerService, MvtStkControllerService, PhotoControllerService, UtilisateurControllerService, VentesControllerService];
