import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Trabajo } from "src/app/model/trabajo";
import { TrabajoService } from "src/app/service/trabajo.service";

@Component({
  selector: "app-trabajo-list",
  templateUrl: "./trabajo-list.component.html",
  styleUrls: ["./trabajo-list.component.css"]
})
export class TrabajoListComponent implements OnInit {
  trabajos: Observable<Trabajo[]>;
  constructor(private trabajoService: TrabajoService) {}

  ngOnInit() {
    this.reloadData;
  }

  reloadData() {
    this.trabajos = this.trabajoService.getTrabajoList();
  }

  deleteTrabajos() {
    this.trabajoService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log("ERROR: " + error)
    );
  }
}
