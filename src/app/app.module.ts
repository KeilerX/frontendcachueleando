import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import {
  MatDialogModule,
  MatSnackBarModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule
} from "@angular/material";
import { AreaListComponent } from "./pages/area/area-list/area-list.component";
import { AreaDetailsComponent } from "./pages/area/area-details/area-details.component";
import { AreaCreateComponent } from "./pages/area/area-create/area-create.component";
import { AreaSearchComponent } from "./pages/area/area-search/area-search.component";
import { TrabajoCreateComponent } from "./pages/trabajo/trabajo-create/trabajo-create.component";
import { TrabajoDetailsComponent } from "./pages/trabajo/trabajo-details/trabajo-details.component";
import { TrabajoSearchComponent } from "./pages/trabajo/trabajo-search/trabajo-search.component";
import { TrabajoListComponent } from "./pages/trabajo/trabajo-list/trabajo-list.component";
import { OrganizacionCreateComponent } from "./pages/organizacion/organizacion-create/organizacion-create.component";
import { OrganizacionDetailsComponent } from "./pages/organizacion/organizacion-details/organizacion-details.component";
import { OrganizacionSearchComponent } from "./pages/organizacion/organizacion-search/organizacion-search.component";
import { OrganizacionListComponent } from "./pages/organizacion/organizacion-list/organizacion-list.component";
import { UsuarioCreateComponent } from "./pages/usuario/usuario-create/usuario-create.component";
import { UsuarioDetailsComponent } from "./pages/usuario/usuario-details/usuario-details.component";
import { UsuarioSearchComponent } from "./pages/usuario/usuario-search/usuario-search.component";
import { UsuarioListComponent } from "./pages/usuario/usuario-list/usuario-list.component";
import { RecomendacionCreateComponent } from "./pages/recomendacion/recomendacion-create/recomendacion-create.component";
import { RecomendacionDetailsComponent } from "./pages/recomendacion/recomendacion-details/recomendacion-details.component";
import { RecomendacionSearchComponent } from "./pages/recomendacion/recomendacion-search/recomendacion-search.component";
import { RecomendacionListComponent } from "./pages/recomendacion/recomendacion-list/recomendacion-list.component";

@NgModule({
  declarations: [
    AppComponent,
    AreaListComponent,
    AreaDetailsComponent,
    AreaCreateComponent,
    AreaSearchComponent,
    TrabajoCreateComponent,
    TrabajoDetailsComponent,
    TrabajoSearchComponent,
    TrabajoListComponent,
    OrganizacionCreateComponent,
    OrganizacionDetailsComponent,
    OrganizacionSearchComponent,
    OrganizacionListComponent,
    UsuarioCreateComponent,
    UsuarioDetailsComponent,
    UsuarioSearchComponent,
    UsuarioListComponent,
    RecomendacionCreateComponent,
    RecomendacionDetailsComponent,
    RecomendacionSearchComponent,
    RecomendacionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
