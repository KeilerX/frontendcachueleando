import { Component, OnInit, Input } from "@angular/core";
import { Trabajo } from "src/app/model/trabajo";
import { TrabajoService } from "src/app/service/trabajo.service";
import { TrabajoListComponent } from "../trabajo-list/trabajo-list.component";

@Component({
  selector: "app-trabajo-details",
  templateUrl: "./trabajo-details.component.html",
  styleUrls: ["./trabajo-details.component.css"]
})
export class TrabajoDetailsComponent implements OnInit {
  @Input() trabajo: Trabajo;
  constructor(
    private trabajoService: TrabajoService,
    private listComponent: TrabajoListComponent
  ) {}

  ngOnInit() {}

  deleteTrabajo() {
    this.trabajoService.deleteTrabajo(this.trabajo.id).subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error)
    );
  }
}
