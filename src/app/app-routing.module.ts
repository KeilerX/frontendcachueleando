import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AreaListComponent } from "./pages/area/area-list/area-list.component";
import { AreaCreateComponent } from "./pages/area/area-create/area-create.component";
import { AreaSearchComponent } from "./pages/area/area-search/area-search.component";
import { TrabajoListComponent } from "./pages/trabajo/trabajo-list/trabajo-list.component";
import { TrabajoCreateComponent } from "./pages/trabajo/trabajo-create/trabajo-create.component";
import { TrabajoSearchComponent } from "./pages/trabajo/trabajo-search/trabajo-search.component";
import { UsuarioListComponent } from "./pages/usuario/usuario-list/usuario-list.component";
import { UsuarioCreateComponent } from "./pages/usuario/usuario-create/usuario-create.component";
import { UsuarioSearchComponent } from "./pages/usuario/usuario-search/usuario-search.component";
import { OrganizacionListComponent } from "./pages/organizacion/organizacion-list/organizacion-list.component";
import { OrganizacionCreateComponent } from "./pages/organizacion/organizacion-create/organizacion-create.component";
import { OrganizacionSearchComponent } from "./pages/organizacion/organizacion-search/organizacion-search.component";
import { RecomendacionListComponent } from "./pages/recomendacion/recomendacion-list/recomendacion-list.component";
import { RecomendacionSearchComponent } from "./pages/recomendacion/recomendacion-search/recomendacion-search.component";
import { RecomendacionCreateComponent } from "./pages/recomendacion/recomendacion-create/recomendacion-create.component";

const routes: Routes = [
  /*   {
    path: "",
    redirecTo: "/",
    pathMatch: "full"
  }, */
  {
    path: "listar-trabajo",
    component: TrabajoListComponent
  },
  {
    path: "crear-trabajo",
    component: TrabajoCreateComponent
  },
  {
    path: "buscar-trabajo-byarea",
    component: TrabajoSearchComponent
  },
  {
    path: "listar-area",
    component: AreaListComponent
  },
  {
    path: "crear-area",
    component: AreaCreateComponent
  },
  {
    path: "buscar-area-bynombre",
    component: AreaSearchComponent
  },
  {
    path: "listar-usuario",
    component: UsuarioListComponent
  },
  {
    path: "crear-usuario",
    component: UsuarioCreateComponent
  },
  {
    path: "buscar-usuario-bynombres",
    component: UsuarioSearchComponent
  },
  {
    path: "listar-organizacion",
    component: OrganizacionListComponent
  },
  {
    path: "crear-organizacion",
    component: OrganizacionCreateComponent
  },
  {
    path: "buscar-organizacion-bynombre",
    component: OrganizacionSearchComponent
  },
  {
    path: "listar-recomendacion",
    component: RecomendacionListComponent
  },
  {
    path: "crear-recomendacion",
    component: RecomendacionCreateComponent
  },
  {
    path: "buscar-recomendacion-byid",
    component: RecomendacionSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
