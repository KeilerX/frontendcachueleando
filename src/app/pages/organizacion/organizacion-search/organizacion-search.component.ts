import { Component, OnInit } from "@angular/core";
import { Organizacion } from "src/app/model/organizacion";
import { OrganizacionService } from "src/app/service/organizacion.service";

@Component({
  selector: "app-organizacion-search",
  templateUrl: "./organizacion-search.component.html",
  styleUrls: ["./organizacion-search.component.css"]
})
export class OrganizacionSearchComponent implements OnInit {
  nombre: string;
  organizaciones: Organizacion[];
  constructor(private organizacionService: OrganizacionService) {}

  ngOnInit() {
    this.nombre = "";
  }

  private searchOrganizacion() {
    this.organizaciones = [];
    this.organizacionService
      .getOrganizacionByNombre(this.nombre)
      .subscribe(organizaciones => (this.organizaciones = organizaciones));
  }

  onSubmit() {
    this.searchOrganizacion();
  }
}
