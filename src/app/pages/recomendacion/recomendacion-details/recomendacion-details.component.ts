import { Component, OnInit, Input } from "@angular/core";
import { Recomendacion } from "src/app/model/recomendacion";
import { RecomendacionService } from "src/app/service/recomendacion.service";
import { RecomendacionListComponent } from "../recomendacion-list/recomendacion-list.component";

@Component({
  selector: "app-recomendacion-details",
  templateUrl: "./recomendacion-details.component.html",
  styleUrls: ["./recomendacion-details.component.css"]
})
export class RecomendacionDetailsComponent implements OnInit {
  @Input() recomendacion: Recomendacion;

  constructor(
    private recomendacionService: RecomendacionService,
    private listComponent: RecomendacionListComponent
  ) {}

  ngOnInit() {}

  deleteRecomendacion() {
    this.recomendacionService
      .deleteRecomendacion(this.recomendacion.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error)
      );
  }
}
