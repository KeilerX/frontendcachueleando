import { Component, OnInit } from "@angular/core";
import { Area } from "src/app/model/area";
import { Trabajo } from "src/app/model/trabajo";
import { TrabajoService } from "src/app/service/trabajo.service";

@Component({
  selector: "app-trabajo-search",
  templateUrl: "./trabajo-search.component.html",
  styleUrls: ["./trabajo-search.component.css"]
})
export class TrabajoSearchComponent implements OnInit {
  sueldo: number;
  trabajos: Trabajo[];
  constructor(private trabajoService: TrabajoService) {}

  ngOnInit() {
    this.sueldo = 0;
  }

  private searchTrabajo() {
    this.trabajos = [];
    this.trabajoService
      .getTrabajoBySueldo(this.sueldo)
      .subscribe(trabajos => (this.trabajos = trabajos));
  }

  onSubmit() {
    this.searchTrabajo();
  }
}
