import { Component, OnInit } from "@angular/core";
import { Organizacion } from "src/app/model/organizacion";
import { OrganizacionService } from "src/app/service/organizacion.service";

@Component({
  selector: "app-organizacion-create",
  templateUrl: "./organizacion-create.component.html",
  styleUrls: ["./organizacion-create.component.css"]
})
export class OrganizacionCreateComponent implements OnInit {
  organizacion: Organizacion = new Organizacion();
  submitted = false;
  constructor(private organizacionService: OrganizacionService) {}

  ngOnInit() {}

  newOrganizacion(): void {
    this.submitted = false;
    this.organizacion = new Organizacion();
  }

  save() {
    this.organizacionService.createOrganizacion(this.organizacion).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
      },
      error => console.log(error)
    );
    this.organizacion = new Organizacion();
  }

  onSubmit() {
    this.save();
  }
}
