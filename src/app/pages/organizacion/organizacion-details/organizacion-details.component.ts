import { Component, OnInit, Input } from "@angular/core";
import { Organizacion } from "src/app/model/organizacion";
import { OrganizacionService } from "src/app/service/organizacion.service";
import { OrganizacionListComponent } from "../organizacion-list/organizacion-list.component";

@Component({
  selector: "app-organizacion-details",
  templateUrl: "./organizacion-details.component.html",
  styleUrls: ["./organizacion-details.component.css"]
})
export class OrganizacionDetailsComponent implements OnInit {
  @Input() organizacion: Organizacion;
  constructor(
    private organizacionService: OrganizacionService,
    private listComponent: OrganizacionListComponent
  ) {}

  ngOnInit() {}

  deleteOrganizacion() {
    this.organizacionService.deleteOrganizacion(this.organizacion.id).subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error)
    );
  }
}
