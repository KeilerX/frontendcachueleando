import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Organizacion } from "src/app/model/organizacion";
import { OrganizacionService } from "src/app/service/organizacion.service";

@Component({
  selector: "app-organizacion-list",
  templateUrl: "./organizacion-list.component.html",
  styleUrls: ["./organizacion-list.component.css"]
})
export class OrganizacionListComponent implements OnInit {
  organizaciones: Observable<Organizacion[]>;

  constructor(private organizacionService: OrganizacionService) {}

  ngOnInit() {
    this.reloadData;
  }

  reloadData() {
    this.organizaciones = this.organizacionService.getOrganizacionList();
  }

  deleteOrganizaciones() {
    this.organizacionService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log("ERROR: " + error)
    );
  }
}
