import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './composants/header/header.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NoouvelleCategoryComponent } from './pages/categories/noouvelle-category/noouvelle-category.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { DetailMvtStkArticleComponent } from './composants/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { MenuComponent } from './composants/menu/menu.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { LoaderComponent } from './composants/loader/loader.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { FooterComponent } from './composants/footer/footer.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';


@NgModule({
  declarations: [
    AppComponent,
    BouttonActionComponent,
    DetailArticleComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    HeaderComponent,
    ChangerMotDePasseComponent,
    PageProfilComponent,
    PageCategoriesComponent,
    NoouvelleCategoryComponent,
    PaginationComponent,
    DetailCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailUtilisateurComponent,
    MenuComponent,
    NouveauCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    LoaderComponent,
    PageArticleComponent,
    NouvelArticleComponent,
    PageClientComponent,
    PageFournisseurComponent,
    PageMvtstkComponent,
    PageCmdCltFrsComponent,
    PageDashboardComponent,
    FooterComponent,
    PageStatistiquesComponent,
    NouvelUtilisateurComponent,
    PageUtilisateurComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
